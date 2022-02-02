function addHashtag(tweet) {
  const hashTag = getHashtagBasedOnUserLang();
  const tweetLimit = 140 - hashTag.length;

  if (!tweet.includes(hashTag)) {
    if (tweet.length >= tweetLimit) {
      tweet = tweet.substr(0, tweetLimit);
    }
    tweet += hashTag;
  }
  return tweet;
}

export function processTweet(tweet) {
  return addHashtag(tweet);
}

function getHashtagBasedOnUserLang() {
  const clientLang = navigator.language;
  switch (clientLang) {
    case clientLang.includes("fr"):
      return " #Tomate";
    case clientLang.includes("pl"):
      return " #Pomidor";
    case clientLang.includes("it"):
      return " #Pomodoro";
    case clientLang.includes("nl"):
      return " #Tomaat";
    default:
      return " #Tomato";
  }
}
