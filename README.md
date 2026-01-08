A program like zetmac, but trying to build it for both web and android devices (by creating an apk).

A clone of zetamac

When you give a certain parameter, it generates question within the given range for the two values.

Note: the smallest value is 1, and the largest possible value is 1000, otherwise, it will send an stating which parameters are invalid.

The program also keeps track of the top 10 scores you have achieved, which only tracks the score, not the parameter + score.

Quick rundown of how it generates questions:

if first gains all the parameters and checks whether they are valid or not, and afterwards, sends the entire set into a function, the function generates a random number, which leads to the operation of the specific question, then on those individual functions, two random numbers are generated, and expressed as a string, which is then stored into an array, this is done 500 times for every second you have selected (e.g. for 120 seconds, 6000 questions are generated).


This is then stored in the local storage, and then presented onto the game screen. 

After the gameplay is over, it checks whether your score is in the top 10, and adds it in the respective place.
