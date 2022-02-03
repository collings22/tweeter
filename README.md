# tweeter
Created with CodeSandbox

# Requirements
The highest priority changes they've requested are:

1. It should not be possible to type in the output text box. <span style="color:green">//Disable the output TextField.</span>. 
2. It should be possible to see an entire tweet in both text boxes without having to manually resize it. <span style="color:green">//Use multiline textarea.</span>
3. The "tweetify" button should be removed. Instead, the output text should update as the user is typing. <span style="color:green">//Remove button. Use state to update output box.</span>
4. There should be a randomised delay between input and output, so the system would appear to be "doing more" (client's words). The delay time should vary between 500 ms and 2500 ms. <span style="color:green">//setTimeout interval randomly duration between 500-2500ms.</span>
5. When the user's input text is already on-message (no hashtag is added), its length should still be truncated to fit in a tweet. Make sure not to cut off the hashtag! <span style="color:green">//MarketingLogic checks if hashtag is already within tweet.</span>
6. The Association is trying to expand its international reach; The tweetifier should accept #Tomate (French), #Pomodoro (Italian), #Tomaat (Dutch) and #Pomidor (Polish) as additional valid hashtags - and not add #Tomato after them. <span style="color:green">//MarketingLogic checks clients navigator.language value to determine the clients language.</span>
7. 280-character, multilingual, and URL-containing tweets should be supported as they are on Twitter.com. (NOTE: The maximum length of a tweet changed in 2017, but the PO only got the budget to adapt their system recently.) <span style="color:green">//TextFields have maxLength of 140. MarketingLogic finds real max length based on the clients navigator.language value.</span>
8. In addition to the aforementioned international hashtags being accepted, the client would also like us to detect the language of a tweet and add the most appropriate available hashtag. <span style="color:green">//MarketingLogic checks if hashtag is already within tweet.</span>
