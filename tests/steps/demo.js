//import {  Given, Then, When} from "@cucumber/cucumber";
const {Given, Then, When} = require("@cucumber/cucumber");

Given('checking demo', function () {
    console.log("Given")
  });

When('print some message', function () {
    console.log("When")
  });

Then('result values', function () {
    console.log("Then")
  });