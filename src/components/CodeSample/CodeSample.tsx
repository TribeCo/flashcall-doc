import React, { useEffect, useState } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { Highlight, themes } from "prism-react-renderer";
import beautify from "js-beautify";

interface CodeSampleProps {
  code: string;
  language: string; // Specify language for each code
}

const CodeSample: React.FC<CodeSampleProps> = ({ code, language }) => {
  const { colorMode } = useColorMode();
  const [formattedCode, setFormattedCode] = useState<string>(code); // Initial code is unformatted
  const theme = colorMode === "dark" ? themes.vsDark : themes.github;

  useEffect(() => {
    // Format code based on language
    let formatted = code;

    if (language === "python") {
      formatted = beautify(code, {
        indent_size: 4,
        space_in_empty_paren: true,
      });
    } else if (language === "javascript") {
      formatted = beautify.js(code, { indent_size: 2 });
    } else if (language === "html") {
      formatted = beautify.html(code, { indent_size: 2 });
    } else if (language === "css") {
      formatted = beautify.css(code, { indent_size: 2 });
    }
    setFormattedCode(formatted);
  }, [code, language]);

  return (
    <Highlight code={formattedCode} language={language} theme={theme}>
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
  );
};

export default CodeSample;
