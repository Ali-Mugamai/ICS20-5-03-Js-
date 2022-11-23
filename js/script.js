// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-5-02-JS/sw.js", {
    scope: "/ICS20-5-02-JS/",
  })
}

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
}

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  buttonOnChecked = document.getElementById("positive_number").checked

  const randomNumber = Math.floor(Math.random() * 6) + 1
  const negative_random = Math.floor(Math.random() * -5) - 1

  if (buttonOnChecked == true) {
    document.getElementById("radio-button-value").innerHTML =
      "<p>Value is: " + randomNumber + "</p>"
  } else {
    document.getElementById("radio-button-value").innerHTML =
      "<p>Value is: " + negative_random + "</p>"
  }
}
