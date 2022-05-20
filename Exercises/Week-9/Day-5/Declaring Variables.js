// Declare a variable called age and assign your own age to it using a numerical value.
// On line 2, declare a second variable called ageIn5Years and assign the following expression to it: age + 5.
let age = 23;
let ageIn5Years = age + 5

// Declare a variable called firstName and assign it your first name.
// Now declare a variable called lastName and assign it your last name.
// Using the firstName and lastName variables, make a variable called fullName that combines your first and last names into one string. Make sure to add a white space between the first name and last name.
const firstName = "Corbin"
const lastName = "Steig"
const fullName = firstName + " " + lastName

// In the following string "What can we do? Keep going!", use the charAt() method to find the character at index 14. Assign the return value to a new variable called index14. Do this in one line.
const index14 = `What can we do ? Keep going!`.charAt(14)

// On a new line, find the length of the sentence string. Let's use .length to avoid manually counting any characters.
// let sentence = "This variable is already assigned. Find its length without manually counting the characters and spaces."
sentence.length

// On line 3, increment the dayOfWeek variable by using a single operator which increases a variable's value by one.
// On line 4, increment the numPassengers variable by 3. Do this using an operator which avoids using the variable’s name more than once in the new statement.
let dayOfWeek = 0;
let numPassengers = 0;
dayOfweek++
numPassengers += 3

// Build a trainCapacity variable and set it to 60.
// Create a new variable called occupancy which uses the variable numPassengers and the difference between trainCapacity and numPassengers to output the string "3 passengers present, with 57 remaining seats.".
let trainCapacity = 60
let occupancy = numPassengers + " passengers present, with " + (trainCapacity - numPassengers) + " remaining seats."

// Create a new variable called fishyString and assign the string "Nemo" to it. Do this by concatenating each one of "Nemo"'s letters, one by one.
let fishyString = "N" + "e" + "m" + "o"

// Create a variable called lostFish and assign "Nemo" to it by using the .charAt property to grab the characters "N" "e" "m" "o" out of the following strings. Don't forget to concatenate!
// The character at index 0 in "Never look back."
// The character at index 3 in "Adventure is out there."
// The character at index 14 in "Just keep swimming."
// The character at index 1 in "To infinity... and beyond!"
const lostFish = "Never look back.".charAt(0) + "Adventure is out there.".charAt(3) + "Just keep swimming.".charAt(14) + "To infinity... and beyond!".charAt(1)
