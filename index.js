#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        message: "Please guess a number: ",
        name: "userGuessNumber",
        type: "Number",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulation!You guess the right Number");
}
else {
    console.log("Try Again!You guessed the wrong Number");
}
