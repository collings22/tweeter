import React from "react";
import "./App.scss";
import { processTweet } from "./utils/marketingLogic";
import TweetInput from "./features/TweetInput/TweetInput";
import ConvertedTweet from "./features/ConvertedTweet/ConvertedTweet";

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
    <div className="card">
      <header>
        <h1>Tweeter</h1>
      </header>
      <main>
        <TweetInput handleOnInputChange={handleOnInputChange} />
        <hr />
        <ConvertedTweet output={output} />
      </main>
    </div>
  );
}
