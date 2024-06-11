### Pixel Perfect ###

This is my rendition of a shopping cart application for video games. It is a strictly frontend application, making use of the RAWG Games API for all games shown on the frontend. As this API does not contain price information as all stores have different values, for the purposes of the demo project, all games have their price set to £9.99. 



## Open ##
![](https://github.com/Anthony-McDonald/shopping-cart/assets/89093671/827af1d9-2caf-4fc6-afe9-d89d8fa41224)
Upon opening the page you are greeted with a page with open in white text, on hover the text expands and on click you are brought into the main text area. I experimented with this for a while to find a look and feel that I was happy with, eventually I stumbled upon what is currently seen. A retro styled text box that invites the user to click to find more.

## Search ##
Once the user is in the main area, they have two main ways of filtering to find the specific games that they wish to purchase, via category and name.

# Category Search #
![](https://github.com/Anthony-McDonald/shopping-cart/assets/89093671/d5b19020-9d09-48e1-a60a-62a84fc27ed3)
Searching via category shows all games that meet that specific selection criteria. This was done through picking up on user click and sending a request to the RAWG api for whatever is clicked on, returning the games that suit the criteria. Working with the API proved challenging at first due to difficulty finding the particular numbers corresponding to each genre or platform, however through reading the doucmentation as well as some old fahsioned trial and error, I was able to get this to work as expected.

# Name Search #
![](https://github.com/Anthony-McDonald/shopping-cart/assets/89093671/4be502e9-7626-4d5f-af68-eaaa17ec7280)
Searching via name on the other hand was much more straight forward to implement. There is a search box at the top of the screen, the user inputs the game that they are looking for, presses their enter key and then that reads the content of the input box and sends that through to the api to return the list of games that suit the name inserted into the input box, triggering the frontend react elements to rerender the newly returned games on to the screen.

## Purchasing ##
![](https://github.com/Anthony-McDonald/shopping-cart/assets/89093671/3ce7442d-7df0-4517-b8e7-07f3cc265d51)
Finally, users can add each individual game to their basket and 'purchase' whatever is in their basket (as it is a demo application, attempting to purchase just returns a message informing the user that it is in fact a demo application and that games cannot actually be bought). This involved lifting the state of the react components to pass through the individual information of each element into the sidebar, so that they can be displayed for the user to see. 

