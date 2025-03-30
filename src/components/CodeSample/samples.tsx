const samples = [
  {
    code: `import requests

# URL of the Flash Call service
url = "https://flash-call.liara.run/services/call/call/"

# Request body payload
payload = {
    "destination": "0930xx16xxx",  # The phone number you want to call
    "token": "Ih.nMOjBa3WystRfdnnFzsmt.foqm0O7gFBAm"  # The access token for the service
}

# Send a POST request
response = requests.post(url, json=payload)

# Check the response
if response.status_code == 200:
    print("Call initiated successfully!")
    print("Server response:", response.json())  # Display the server response
else:
    print("Failed to initiate the call!")
    print("Status code:", response.status_code)
    print("Server response:", response.text)  # Display the error message`,
    language: "python",
  },
  {
    code: `const axios = require('axios');

// URL of the Flash Call service
const url = 'https://flash-call.liara.run/services/call/call/';
    
// Request payload
const payload = {
    destination: '09303016386', // Replace with the target phone number
    token: 'Ih.nMOjBv3WyvtRdnHnFzGmt.foqm0O7gFBAm', // Replace with your access token
};
    
// Send a POST request
axios
    .post(url, payload)
    .then((response) => {
    console.log('Call initiated successfully!');
    console.log('Server response:', response.data); // Display the server response
    })
    .catch((error) => {
     if (error.response) {
        // The request was made, but the server responded with an error
        console.log('Failed to initiate the call!');
        console.log('Status code:', error.response.status);
        console.log('Server response:', error.response.data); // Display the error message
    } else {
        // Something went wrong while making the request
        console.log('Error sending request:', error.message);
    }
});`,
    language: "nodejs",
  },
  {
    code: `package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

// Define the request payload structure
type FlashCallRequest struct {
	Destination string 'json:"destination"' // The phone number to call
	Token       string 'json:"token"'       // Your access token
}

func main() {
	// URL of the Flash Call service
	url := "https://flash-call.liara.run/services/call/call/"

	// Create the request payload
	payload := FlashCallRequest{
		Destination: "0930xx16xxx",                             // Replace with the target phone number
		Token:       "Jh.nMOjB31b3WfvtRanHnFzGmt.foqm0O7gFBAd", // Replace with your access token
	}

	// Convert the payload to JSON
	jsonPayload, err := json.Marshal(payload)
	if err != nil {
		fmt.Println("Error marshaling JSON:", err)
		return
	}

	// Send a POST request
	response, err := http.Post(url, "application/json", bytes.NewBuffer(jsonPayload))
	if err != nil {
		fmt.Println("Error sending request:", err)
		return
	}
	defer response.Body.Close()

	// Read the response body
	body, err := ioutil.ReadAll(response.Body)
	if err != nil {
		fmt.Println("Error reading response body:", err)
		return
	}

	// Check the response status code
	if response.StatusCode == http.StatusOK {
		fmt.Println("Call initiated successfully!")
		fmt.Println("Server response:", string(body)) // Display the server response
	} else {
		fmt.Println("Failed to initiate the call!")
		fmt.Println("Status code:", response.StatusCode)
		fmt.Println("Server response:", string(body)) // Display the error message
	}
}`,
    language: "go",
  },
];

export default samples;
