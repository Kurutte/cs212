const NUMBER_GRABBER = document.querySelector("#number-grabber")
const ADD_NUMBER = document.querySelector("#add-number")
const CALCULATE = document.querySelector("#calculate")

const DATA_SET = document.querySelector("#data-set")
const RESULTS = document.querySelector("#results")
const RESET = document.querySelector("#reset")

const BUTTON_CLICK = document.querySelector("#button-click")
const THE_LICK = document.querySelector("#the-lick")
const RESET_RISE = document.querySelector("#reset-rise")

var total = 0
var temp
var counter = 0
var average = 0.0

function newNumber() 
{
	// Get the new number, add it to the total, and add 1 to the counter
	temp = document.getElementById("number-grabber").value
	total = total + Number(temp)
	counter = counter + 1
	
	// Display the total for the current session
	DATA_SET.innerText = "" + total
	// Play SFX
	BUTTON_CLICK.play()
}

function calculateResults() 
{
	// Disable the number grabber
	NUMBER_GRABBER.disabled = true
	ADD_NUMBER.disabled = true
	CALCULATE.disabled = true

	// Calculate the Average
	average = total / counter
	average = average.toFixed(2)

	// Display the Results
	RESULTS.innerText = "\nThe sum of the data is " + total + ".\nThere were " + counter + " numbers in the data set.\nThe average is....." + average + "!!!"

	// Enable the reset button
	RESET.disabled = false

	// Play SFX
	THE_LICK.play()
}

// Reset for repeated use
function resetCalculator()
{
	// Disable the Reset Button
	RESET.disabled = true

	// Enable the Calculate/Add Number buttons and the number grabber
	NUMBER_GRABBER.disabled = false
	ADD_NUMBER.disabled = false
	CALCULATE.disabled = false

	// Clear text in results and data set
	DATA_SET.innerText = ""
	RESULTS.innerText = ""

	// Reset variables
	total = 0
	counter = 0
	average = 0.0
	
	// Play SFX
	RESET_RISE.play()
}

ADD_NUMBER.addEventListener('click', newNumber)
CALCULATE.addEventListener('click', calculateResults)
RESET.addEventListener('click', resetCalculator)
