#Gameboard Module

- POTENTIAL CHANGE, have the "isSunk" function take in an array of ships, which still does the same thing, but now the ships are being passed in as an argument, this allows the player module to really keep track of the ships instead of the gameboard,
- Should the gameboard be the one intializing the ships? Since its already checking so much why does any other part of the code need to know about them.

#Player Module

- Should only focus on getting name, setting ships down, and sending attacks, remember that the rest of the logic is left to the ship and gameboard.
- Any logic about changing turns, who is the winner, whether an attack can be sent to a spot is all up to the gameboard and main logic modules.
- A player/AI will have a board connectd with them, this board is their board and is used to keep track of enemy movements.
- PLyaer will also keep track of their own board, this makes it so the main logic doesn't have another thing that needs to be tracked of. Makes things more organized.
- Player should keep track of the enemy gameboard, leaving out of the main logic makes it so we don't have to keep track of what board is currently being attacked, it is up to the whose ever turn it is.
- With this in mind, this means that the player module will be potentially calling the game, as it will check if the enemy gameboard has all its ships sunk.
- WHose turn it is depends on the game logic so we don't need to worry about it.
- Again, these modules so far should not have to worry about whats going on at the DOM/Main Logic, it only needs to worry about its own board, the enemy board, and whether it has won or not.
- The two player modules will be constantly communicating with each other.

The player module will have the following functions.

- Place a ship, will call its own gameboard and place ships, this will be done a call at a time, where if the gameboard function fails, then it is called again, (Final logic determiend in the main logic module)
- Send an attack, will call other player "attack" method and send coordinates for an attack, which inside calls the gameboard version of this, should return false.
- A function that checks if it has won, this one should be PRIVATE and ONLY be called if a ship has been sunk, potentially after each hit, call the 'isSunk' function on the ship, and if that is true then call the "allsunk" function from the gamebaord. However this means that now Player Module will keep track of the ships, which gameboard is already doing. This function is called on the enemboard, and if allSunk returns true, then end the game.
- It's best to create two gameboards, so its easier to set up the two player functionality down the line.
- My main concern is that we are calling function within function too much, I believe that the gameboard should only be worried about the ship, while player simply initlizes the names, and calls methods.

Design

- Fonts <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Asap:wght@400;600;700&family=Chakra+Petch:wght@400;600;700&display=swap" rel="stylesheet">
