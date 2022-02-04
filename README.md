# tweeter

## Technologies

1. Create React App scaffolding.
2. A list of the dependencies can be found within the package.json file.

## Requirements
The highest priority changes they've requested are:

1. It should not be possible to type in the output text box. **//Disable the output TextField.**. 
2. It should be possible to see an entire tweet in both text boxes without having to manually resize it. **//Use multiline textarea.**
3. The "tweetify" button should be removed. Instead, the output text should update as the user is typing. **//Remove button. Use state to update output box.**
4. There should be a randomised delay between input and output, so the system would appear to be "doing more" (client's words). The delay time should vary between 500 ms and 2500 ms. **//setTimeout interval randomly duration between 500-2500ms.**
5. When the user's input text is already on-message (no hashtag is added), its length should still be truncated to fit in a tweet. Make sure not to cut off the hashtag! **//MarketingLogic checks if hashtag is already within tweet.**
6. The Association is trying to expand its international reach; The tweetifier should accept #Tomate (French), #Pomodoro (Italian), #Tomaat (Dutch) and #Pomidor (Polish) as additional valid hashtags - and not add #Tomato after them. **//MarketingLogic checks clients navigator.language value to determine the clients language.**
7. 280-character, multilingual, and URL-containing tweets should be supported as they are on Twitter.com. (NOTE: The maximum length of a tweet changed in 2017, but the PO only got the budget to adapt their system recently.) **//TextFields have maxLength of 140. MarketingLogic finds real max length based on the clients navigator.language value.**
8. In addition to the aforementioned international hashtags being accepted, the client would also like us to detect the language of a tweet and add the most appropriate available hashtag. **//MarketingLogic checks if hashtag is already within tweet.**

## Considerations

1. Limited experience with testing at this point hence the tests are mostly behaviour driven. Further exposure to RTL/JEST would increase knowledge and subsquently coverage. I would look at being able to mock the clients navigator.language value which would enable better testing of the marketingLogic file.  
2. Reusable features are in place but a further abstraction on this into a components directory would be worth developing if the app was to grow. A component is a reusable JSX file generally used in one-to-many features. In this particular case the MUI component TextField could be extracted into a high-level component which takes in props (options) for what behaviour that TextField should have.
