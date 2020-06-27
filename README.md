# BeetFarm
Dwight's Beet Farm

Throughout The Office, Dwight Schrute never lets his coworkers forget his love for beets and awareness of bear attacks.

“I saw Wedding Crashers accidentally. I bought a ticket for “Grizzly Man” and went into the wrong theater. After an hour, I figured I was in the wrong theater, but I kept waiting. Cause that’s the thing about bear attacks… they come when you least expect it.”-Dwight K. Schrute

In this problem set you will use code to create an interactive game in which you determine the fate of the farm (think The Office meets Farmville). You will need to keep your beets watered and protect them from bear attacks to maximize Dwight's beet sales.

"First rule in roadside beet sales, put the most attractive beets on top. The ones that make you pull the car over and go, 'Wow, I need this beet right now.' Those are the money beets." -Dwight K. Schrute 

An example of the complete problem set can be found here: http://apps.introcs.com/hank/p...

Please note your output must exactly match the expected output of the demo above for full credit!

Learning Objectives
After completing this problem set, you should:

1. Gain comfort and familiarity using while loops

2. Gain comfort and familiarity using if-then-else statements

3. Practice using nested if-then-else statements


The Office

Part 0. Starting the Dev Environment
As with in lecture, begin by opening up VSCode, ensuring your project is still open, and then running the following two commands in the VSCode Integrated Terminal:

npm run pull
npm start
Part 1. Setting up an App
In the same directory used in lecture:

Right click on the "src" folder
Select "New Folder"
Name the new folder: ps01-beet-farm
Note: capitalization and punctuation are important!
Right click on the ps01-beet-farm folder
Select "New File"
Name the new file: index-app.ts
Note: capitalization and punctuation are important!
Part 2. Starting your Code
2.0 Honor Code Header

All problem sets begin with an Honor Code pledge. Notice this header is contained within block comment tags discussed in Lecture 1. You can copy paste the pledge below and fill in your name and ONYEN.

/*
* 
* Author: 
* 
* ONYEN: 
* 
* UNC Honor Pledge: I certify that no unauthorized assistance has been received 
* or given in the completion of this work. I certify that I understand and 
* could now rewrite on my own, without assistance from course staff, 
* the problem set code I am submitting. 
*/


The next step after ensuring the honor code header is to import the functions we'll use from the introcs library. The first line of code to add to your app is the following:

import { print, promptNumber, promptString } from "introcs";
2.2 The main Function

Your program's execution will begin in a special function named `main`. Inside this function, you will put all of your code. It will run once main is called (main();).

export let main = async () => {   
// TODO: Put all of your code here
};
main();


Part 3: Dwight's Farm
In our beet farm game, every day you can chose to take one of three different actions - water your beets, spray them with bear repellant, or harvest them and end the game. Every day that your beets stay alive, the number of beets you have grows, but if they get too thirsty, are over-watered, or don't have enough bear repellant, they will all die and you go home with no beets for all your hard work. Try to grow as many beets as you can before deciding to harvest them.

3.1: Create status variables and Number of Beets

We need to create 3 variables that represent the state of your farm and one that stores the number of beets you are preparing to harvest.  

3.1 a) Since you can work on your farm until your plants die, you need to create a variable that represents whether or not it's time to harvest your beets. Name this variable alive and initialize its value to true. 

3.1 b) You will also be tracking the thirst level of the beets, likelihood of a bear attack, and whether you are harvesting. Declare three variables named thirstLevel, bearLikeliness, and isHarvestTime. Initialize thirstLevel and bearLikeliness to 50 and isHarvestTime to false.

3.1 c) So you can keep track of how long you have been farming, declare a variable called day and initialize its value to 0. Each loop of the while loop will be considered a new day for the beets on the farm. 

3.1 d) Now that you are starting to farm, create variable called beetsCount and initialize it to 10. The farm will always start out with 10 beets, and will grow depending on how you take care of it.

3.2: Loop and change the Farm's state

3.2 a) The looping condition

In class we said all while loops need a counter that is iterated each loop. Actually, all while loops do not necessarily need counters. The more general requirement of a looping condition is that it is a boolean expression that evaluates to true or false (for example, is i < 50?). In our game, the while loop runs as long as your isHarvestTime is false AND alive is true. Now you can begin writing the repeating block of the loop.

3.2 b) Once inside the loop, print a string that announces the current value of the day variable (to let us know how many days you have been farming) that looks like the following:

Day: <your day variable>

3.2 c) Prompt the user as to whether they want to water, spray bear repellent, or harvest their beets.

The prompt you create should be the following string, but with your beetsCount variable:

"Do you want to water, spray, or harvest your <beetsCount> beets? Type 'water', 'spray', or 'harvest'."

Store the result of this prompt in a variable called waterSprayOrHarvest. 

3.2 d) Vary water, spray, and harvest variables based off waterSprayOrHarvest

For this part, you will need to write a series of if-then-else statements to satisfy the following conditions:

1. If the user waters their farm (i.e. the string they entered equals "water"), the farm will be less thirsty but also more prone to bear attacks because it was not prepped with the spray. Under this condition, print the number of beets concatenated with the string " beets have been watered!", decrease the thirst level by 10, increase the bear attack likeliness level by 10, and increase your beet count by 2. We want to increase the beet count because when you water it we are spreading more seeds into the soil! 

2. If the user sprays the farm (i.e. the string they entered equals "spray"), print the number of beets concatenated with the string " beets have been sprayed!", increase the thirst level by 10, and decrease the bear attack likeliness level by 5. 

3. If the user harvests the farm (i.e. the string they entered equals "harvest"), print the number of beets concatenated with the string " beets have been harvested!" and change the isHarvestTime variable to true.  

4. Finally, if the user did not water, spray, or harvest (i.e. the string they entered is something else), print the number of beets from beetCount concatenated with the string " beets were not watered, sprayed, or harvested.", increase thirst level by 10, and increase the bear attack likeliness level by 10. 

3.3: Check if your beets are still alive and whether they were harvested

(The sentences you should write are at the end of this explanation) In this if statement, instead of incrementing a counter at the end of the repeat block, you will check to see if the alive condition should be changed to false.

1. If thirstLevel is less than or equal to 0, you have over watered your beets.

2. if thirstLevel is greater than 100, you have dehydrated your beets. 

3. If bearLikeliness is greater than or equal to 100, your beets have died from a bear attack.

When any of these conditions are met, change the value of your alive variable to false and print a string that contains the number of beets you were trying to harvest and what has caused this.  Your string should look like the following for overwatered except with your beetsCount variable: 

"Your 10 beets have been overwatered"

Your string should look like the following if your beets are dehydrated:

"Your 10 beets have been dehydrated"

Your string should look like the following if your beets are eaten by bears:

"Your 10 beets were eaten by bears".

3.4: Report on the status of a living farm

We need to stay up to date on the health of our farm. 

If your farm is still alive and has not been harvested after the checking the conditions in 3.3 (i.e. alive is true and isHarvestTime is false), print three statements. The first should say that your beets are still living; the second should report the thirst levels of your beets; and the third should report the likeliness of a bear attack on your farm. Be sure to include the number of beets in each print statement, the word "thirst" (for #2), and the word "bear" (for #3).

Since your farm is still alive, it has lived another full day! Increase the value of day by 1.

The strings should look like the following:

Your <beetsCount> beets are alive!

Thirst Level of <beetsCount> beets: <thirstLevel>

Likeliness of Bear Attack of <beetsCount> beets: <bearLikeliness> 



3.5: Report the death or harvest of your farm

Since the while loop will terminate if your farm has died or you have harvested. Create the following print, if-statement after the while-loop. 

If your farm is still alive but was harvested in condition 3.2 (i.e. alive is true and isHarvestTime is true), your loop will terminate. The statement should look like the string below, with "Y" being replaced with the number of beets on your farm and "X" being replaced with the number of days your farm was alive. 

            Your Y beets were harvested after X days :)

If you farm has died before it has been harvested, write a print statement after the loop that declares it has died and how long it has lived. The statement should look like the string below, with "Y" being replaced with the number of beets on your farm and "X" being replaced with the number of days your farm was alive.

           This means that Y beets have died after X days :(
