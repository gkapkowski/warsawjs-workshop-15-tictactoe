# warsawJS Workshop#15: JavaScript basics with tic-tac-toe game

- - - -
### Before you start
* Register on (github.com) and
* [create a new repository](https://help.github.com/articles/creating-a-new-repository/).
- - - -
## Initial game
### Step 1 - Draw initial board
[code reference](https://github.com/gkapkowski/warsawjs-workshop-15-tictactoe/tree/step-1)
1. create `initGame()` function which:
    * gets all `<div>` elements inside `div.board` element
    * adds click event listener for each `<div>` with `fieldClickHandler` listener function

2. create `fieldClickHandler()` function which logs string 'Hello' and `this` to the console

### Step 2 - Color each field after user click
[code reference](https://github.com/gkapkowski/warsawjs-workshop-15-tictactoe/tree/step-2)
1. inside `fieldClickHandler()` function add 'red' to clicked element classes (use native `classList.add()`)

### Step 3 - Change color depeding on current player
[code reference](https://github.com/gkapkowski/warsawjs-workshop-15-tictactoe/tree/step-3)
1. at the top of the file:
    * declare `playerClasses` object to hold color for each player (playerA - 'red' and playerB - 'blue')
    * declare `currentPlayer` variable to hold currentPlayer name

2. inside fieldClickHandler()` function:
    * declare `playerClass` variable
    * assign to it name of the color of currentPlayer

### Step 4 - Allow only one click per field
[code reference](https://github.com/gkapkowski/warsawjs-workshop-15-tictactoe/tree/step-4)
1. remove click event listener from clicked element, so it is impossible to click one element twice (use `removeEventListener()` function)

### Step 5 - Check if game has ended (all fields have been clicked)
[code reference](https://github.com/gkapkowski/warsawjs-workshop-15-tictactoe/tree/step-5)
1. at the top of the file declare `emptyFields` variable in which you will store number of empty fileds left
2. inside `initGame()` function assign to this variable number of empty fields at the beginning of the game (9)
3. inside `fieldClickHandler()` function:
    * decrease `emptyFields` variable by one
    * check if game has ended (game ends when emptyFields equals to 0)
    * if it has ended show alert on the screen (use built-in `alert()` function)

### Step 6 - Check if any player won during the game
[code reference](https://github.com/gkapkowski/warsawjs-workshop-15-tictactoe/tree/step-6)
1. create new function `checkWinner()` and inside this function:
    * get all `<div>` elements inside `div.board` element and store it as a variable
    * think of possible winning scenarios for each player (how board looks like in horizontal, vertical and diagonal lines)
    * create string for each winning configuration, i.e. 'redredred' (use `fields[index].className` notation). Example: 
    ```js
    var row1 = fields[0].className + fields[1].className + fields[2].className;
    ```
    * use `if() {...}` statement to check if playerA or playerB has won the game
    * move end game check to the bottom of `checkWinner()` function

### Step 6a - Make checks 
[code reference](https://github.com/gkapkowski/warsawjs-workshop-15-tictactoe/tree/step-6a)
1. create array with all winning configurations
2. change `if() {...}` statements to use `.includes()` to check the winner

### Step 7 - Allow for more than one game
[code reference](https://github.com/gkapkowski/warsawjs-workshop-15-tictactoe/tree/step-7)
1. reinitialize game once any of the players wins or there is no more empty fields on the board

### Step 7a - Fix chrome...
[code reference](https://github.com/gkapkowski/warsawjs-workshop-15-tictactoe/tree/step-7a)
1. to fix Chrome repainting bug use `setTimeout()` function for showing end of the game alert and reinitializing the game 

- - - -
### Make your game available on the Internet
You've completed base game version. Push it to your GitHub repository and publish it on gh-pages.
[How to publish on gh-pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#enabling-github-pages-to-publish-your-site-from
-master-or-gh-pages)
- - - -

### Step 8
[code reference](https://github.com/gkapkowski/warsawjs-workshop-15-tictactoe/tree/step-8)
1. display information about which player round is now

### Step 9
[code reference](https://github.com/gkapkowski/warsawjs-workshop-15-tictactoe/tree/step-9)
1. display information about score for each player
2. update scores after each win
3. add reset score button

### Step 10
[code reference](https://github.com/gkapkowski/warsawjs-workshop-15-tictactoe/tree/step-10)
1. enable players to change their names
2. update all places that displays player name

## Challenges
### Rewrite this game using ES6 classes
1. create classes Player, Scores, Board:
    * Board responsibilities should be:
        * store information of current board state
        * display board on screen
        * display round information
    * Player responsibilities should be:
        * Store name, color, score
    * Scores responsibilities should be:
        * display score table
        * display reset and rename buttons
### Rewrite this game using React
### Rewrite this game using Angular
### Rewrite this game using Vue.js
