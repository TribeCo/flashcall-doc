import React, { useEffect, useState } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { Highlight, themes } from "prism-react-renderer";
import beautify from "js-beautify";
import { Box, Tab, Tabs } from "@mui/material";

interface CodeSampleProps {
  samples: { code: string; language: string }[];
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CodeSample: React.FC<CodeSampleProps> = ({
  samples,
}: CodeSampleProps) => {
  const { colorMode } = useColorMode();
  const theme = colorMode === "dark" ? themes.vsDark : themes.github;
  const [value, setValue] = React.useState(0);

  // useEffect(() => {
  //   // Format code based on language
  //   let formatted = samples[value].code;

  //   if (samples[value].language === "python") {
  //     formatted = beautify(samples[value].code, {
  //       indent_size: 4,
  //       space_in_empty_paren: true,
  //     });
  //   } else if (samples[value].language === "nodejs") {
  //     formatted = beautify.js(samples[value].code, { indent_size: 2 });
  //   }
  // }, [value]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", direction: "ltr" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {samples.map((sample, index) => (
            <Tab key={index} label={sample.language} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {}

      {samples.map((sample, index) => (
        <CustomTabPanel value={value} index={index} key={index}>
          <Highlight
            code={sample.code}
            language={sample.language}
            theme={theme}
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={className}
                style={{
                  ...style,
                  padding: "15px",
                  borderRadius: "8px",
                  overflowX: "auto",
                }}
              >
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </CustomTabPanel>
      ))}
    </Box>
  );
};

export default CodeSample;
