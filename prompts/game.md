# Game


## Game concept

A game where the aim is to guess the song and sing it by "opening" boxes that will reveal part of the lyrics.


On the game board there would be 4 to 6 boxes, each containing one word of the lyrics.

In this case, Ehe song would "Who wants to live forever" by The Queen and 4 boxes:

Who (box 1) wants (box 2) to (box 3) live (box 4)


The players can choose any box in any order. The box is opened by clicking on it. When opened, the word is revealed. Even if the players may open the boxes in random order, the words are always in a specific order.

The amount of words determine the amount of boxes. 

Here are 4 songs: 
- "Har du sett min apa”
- ”Minns du en sjöman för länge” 
- ”Och nu så vill jag sjunga”
- ”är minsann en sjusärdeles karl”


## Implementation

When the web app is loaded, show an intro screen with the game title "Bum tsih bum!". Below it a button named "Börja" (engl. "Begin"). When the button is pressed, show the unopened boxes (all on same row). 

Below the boxes, show a button named "Nytt spel" (engl. "New Game"). Pressing this button, the game is reset with a new round.


### How the order of the songs are defined

When pressing the "Börja" button in the intro screen, create a random order in which the songs will be presented. If the player presses the "New game" button during a game, the next song from the list of songs that was randomized initially. If all songs from the list have been "used", when a new game is started, generate a new random order.

  



