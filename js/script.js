// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
"use strict"

const positiveRandomNumber = Math.floor(Math.random() * 6) +1 
const negativetiveRandomNumber = Math.floor(Math.random() * 6) +1 

function generateNumber() {
  //input
  const userInput = document.getElementById('option-positive').checked
  // process
  if (userInput === true) {
    //output
    document.getElementById('result').innerHTML =
      '<p> The random number is:' + positiveRandomNumber + '<p>'
  } else {
    //output
    document.getElementById('result').innerHTML =
      '<p> The random number is:' + '-' + negativetiveRandomNumber + '<p>'
  }
}
