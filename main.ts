#!/usr/bin/env/node

import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

let myBalance = 10000; //doller
let myPin = 1357; //number

const answer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin number",
    type: "number",
  },
]);

if (answer.pin === myPin) {
  console.log("correct pin number");

  let answer1 = await inquirer.prompt([
    {
      message: "please select one option",
      name: "operation",
      type: "list",
      choices: ["withdraw", "check balance"],
    },
  ]);

  if (answer1.operation === "withdraw") {
    let answer2 = await inquirer.prompt([
      {
        message: "enter you amount",
        name: "amount",
        type: "number",
      },
    ]);
    myBalance -= answer2.amount;
    console.log("your remaning balance is " + myBalance);
  }else if(answer1.operation === "check balance"){
    console.log("your balance is" + myBalance)
  }





} else {
  console.log("wrong pin number");
}
