import React from "react";
import "./App.scss";
import TextField from "@mui/material/TextField";
import { processTweet } from "./marketingLogic";

export default function App() {
  const [output, setOutput] = React.useState("");

  function handleOnInputChange(e) {
    const delay = Math.floor(Math.random() * 2500) + 500;

    setOutput("Processing...");

    setTimeout(() => {
      setOutput(processTweet(e.target.value));
    }, delay);
  }

  return (
    <div className="container">
      <TextField
        id="outlined-multiline-flexible"
        label="Text to tweetify:"
        multiline
        fullWidth
        inputProps={{ maxLength: 140 }}
        minRows={2}
        maxRows={3}
        onChange={handleOnInputChange}
      />
      <hr />
      <TextField
        id="output"
        label="Tweetified text:"
        placeholder="Placeholder"
        fullWidth
        multiline
        minRows={2}
        maxRows={3}
        value={output}
        disabled
        InputProps={{
          maxLength: 140
        }}
      />
    </div>
  );
}
