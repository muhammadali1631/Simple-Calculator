#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNumber" },
  { message: "Enter Second Number", type: "number", name: "SecendNumber" },
  {
    message: "Select one of the operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addtion", "Subraction", "Multiplication", "Division"],
  },
]);
console.log(answer)

// conditional statement
if(answer.operator === "Addtion"){
    console.log(answer.firstNumber + answer.SecendNumber)
}else if(answer.operator === "Subraction"){
    console.log(answer.firstNumber - answer.SecendNumber)
}else if(answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.SecendNumber)
}else if (answer.operator === "Division"){
    console.log(answer.firstNumber / answer.SecendNumber)
}else{
    console.log("Please select valid operator")
}

console.log("THE END")