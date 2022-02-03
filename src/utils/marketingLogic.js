/**
 * 
 * @param {string} tweet 
 * @returns The clients tweet not exceeding max character limit {140} and appended language appropriate tomato hashtag
 */
 export function processTweet(tweet) {
  return addHashtag(tweet);
}

/**
 * 
 * @param {string} tweet 
 * @returns Clients tweet upto the max tweet size {140} and with appended hashtag.
 */
function addHashtag(tweet) {
  const hashTag = getHashtagBasedOnUserLang();
  const tweetLimit = 140 - hashTag.length;

  if (!tweet.includes(hashTag)) {
    if (tweet.length >= tweetLimit) {
      tweet = tweet.substring(0, tweetLimit);
    }
    tweet += hashTag;
  }
  return tweet;
}

/**
 * 
 * @returns Tomato in the language appropruate hashtag based on the clients browsers navigator.language value
 */
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
