import React from "react";

const CodeSample: React.FC = () => {
  return (
    <pre
      style={{
        background: "#f4f4f4",
        padding: "15px",
        borderRadius: "8px",
        overflowX: "auto",
      }}
    >
      <code>
        {`import requests

url = "https://flash-call2.liara.run/services/call/call/"
payload = {
  "destination": "09123456789",
  "token": "YOUR_ACCESS_TOKEN"
}
response = requests.post(url, json=payload)
print(response.json())`}
      </code>
    </pre>
  );
};

export default CodeSample;
