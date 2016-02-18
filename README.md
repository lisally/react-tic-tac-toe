# React-Tac-Toe

This module is a Tic-Tac-Toe game played in the browser, completed as part of a [course](http://arch-joelross.rhcloud.com/) at the UW ISchool. 

The below questions should be answered (in detail!) regarding your submission!


##### 1. Does using a Model-View-Controller architecture make it easier to change your game in the future? How many places would you need to make changes to your code to make this a 5x5 game of Tic-Tac-Toe?
> To make a 5x5 game of Tic Tac Toe, I would have to modify parts of the view and the model. For the view, I would have to change the code to construct the grid using more tile buttons. For the model, I would have to add
all the strategies to win a 5x5 game and add more tile values to the tile array. Overall, there wouldn't be much changes in the main functions of the model, view, or controller because the model, view, and controller are 
structured to work around changes made in any of the architectures.


##### 2. Why did I say that an `Array` is the best data structure to represent the game's grid of cells? Why not a 2D-array (Array of Arrays), or an Object, or a Linked-List, or a Tree? 
> An array is the best data structure to represent the game's grid because the index of each tile can easily represent the tile's position. This allows for expanding to larger 5x5 games to be done by simply adding more values to the array.
 Also, the consistent index makes it easier to traverse through the grid to check for winning strategies. Other data structures such as 2D arrays, linked lists, or trees require much more detail to traverse through to find winning strategies.


##### 3. What online resources did you find to help you learn React? How do you search for resources, and how did you determine whether they were helpful or not? Think back to the "learning an API" paper! 
> Reviewing the in class lecture slides was useful in writing the basic react classes. Facebook's react documentation was useful in showing examples of different react classes. 
To find other react resources, I googled for specific keywords on what I was looking to do. These were determined useful if they provided examples of usage which would allow me to apply to my own code.


##### 4. Approximately how many hours did it take you to complete this assignment? #####
> 13 hours


##### 5. Did you receive help from any other sources (classmates, etc)? If so, please list who (be specific!). #####
> Kendall helped me with the grid, gave advice to use table and rows.


##### 6. Did you encounter any problems in this assignment we should warn students about in the future? How can we make the assignment better? #####
> Learning how to link the controller to the model and view on my own was difficult.
