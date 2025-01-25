import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

interface CodeSampleProps {
  code: string;
}

const CodeSample: React.FC = ({ code }: CodeSampleProps) => {
  const { colorMode } = useColorMode();

  const isDarkTheme = colorMode === "dark";

  return (
    <pre
      style={{
        backgroundColor: isDarkTheme ? "#2d2d2d" : "#f4f4f4",
        color: isDarkTheme ? "#ffffff" : "#000000",
        padding: "15px",
        borderRadius: "8px",
        overflowX: "auto",
      }}
    >
      <code>{code}</code>
    </pre>
  );
};

export default CodeSample;
