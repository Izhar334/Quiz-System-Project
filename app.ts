// #! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow.bold("\n\n\tWell-Come-my-Adventure-Quiz-Game!"));
console.log("<<<", "-".repeat(50), ">>>");
console.log(
  chalk.green.italic(
    "\tYou are required to gain maximum 3 points for the window"
  )
);
console.log(
  chalk.redBright.bold(
    "\n\t<<<.. You have 25 seconds to answer the questions ..>>>"
  )
);

let points = 0;
//question (01)
let question1 = await inquirer.prompt([
  {
    name: "one",
    type: "list",
    message: "\nTypescript is a supperset off ?",
    choices: ["python", "c++", "java", "javascript"],
  },
]);
if (question1.one == "javascript") {
  console.log(chalk.green("Your Answer is correct"));
  points++;
} else {
  console.log(chalk.red("Your Answer is incorrect...!"));
}

//question (02)
let question2 = await inquirer.prompt([
  {
    name: "two",
    type: "list",
    message: "\nWhat does Typescript provides that javascript lacks ?",
    choices: [
      "strong typing",
      "dynamic typing",
      "optional typing",
      "no typing system",
    ],
  },
]);
if (question2.two == "strong typing") {
  console.log(chalk.gray(chalk.green("Your Answer is correct..")));
  points++;
} else {
  console.log(chalk.red(chalk.red("Your Answer is incorrect..!")));
}
// question (03)
let question3 = await inquirer.prompt([
  {
    name: "three",
    type: "list",
    message: "\nWhich file extention commonly use for typescript files",
    choices: [".ts", ".js", ".txt", ".html"],
  },
]);
if (question3.three == ".ts") {
  console.log(chalk.green("Your answer is correct.."));
  points++;
} else {
  console.log(chalk.red("Your answer is incorrect..!"));
}
// question (04)
let question4 = await inquirer.prompt([
  {
    name: "four",
    type: "list",
    message: "\nWhat does transpilation means? in the context of Typescript ?",
    choices: [
      "Converting Typesrcipt code to machine code",
      "Converting Typescript code to Javascript code",
      "Converting Javascript code to Typescript code",
      "Analyzing Typescript code for error",
    ],
  },
]);
if (question4 == "Analyzing Typescript code for error") {
  console.log(chalk.green("Your answer is correct.."));
  points++;
} else {
  console.log(chalk.red("Your Answer is incorrect...!"));
}
// question (05
let question5 = await inquirer.prompt([
  {
    name: "five",
    type: "list",
    message: "\nWhich of the following is not a Typescript feature?",
    choices: [
      "Classes",
      "const",
      "let",
      "var",
      "function",
      "type",
      "Interfaces",
    ],
  },
]);
if (question5.five == "var") {
  console.log(chalk.green("Your answer is correct.."));
  points++;
} else {
  console.log(chalk.red("Your answer is incorrect..!"));
}
// output conditions
if (points >= 3) {
  console.log(chalk.blue.bold("\nCongratulations! You have scored " + points + " points"));
} else {
  console.log(chalk.blue.bold("You have scored " + points + " points"));
  console.log(chalk.grey("\n\tBetter luck next time"));
}
