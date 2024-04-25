#!/usr/bin/env node
import inquirer from "inquirer";
let _2Dos = [];
let condition = true;
while (condition) {
    let task = await inquirer.prompt([
        {
            name: "addTask",
            type: "input",
            message: "What do you want to add in your tasks?"
        },
        {
            name: "addAnotherTask",
            type: "confirm",
            message: "Do you want to add more tasks?",
            default: "true",
        }
    ]);
    if (task.addTask.trim != "") {
        _2Dos.push(task.addTask.trim());
    }
    condition = task.addAnotherTask;
    console.log(_2Dos);
}
