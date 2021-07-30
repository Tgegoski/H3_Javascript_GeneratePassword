// Assignment Code
var length;
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var symbols = "/%*&()".split("");
var numbers = "0123456789".split("");
var characters = []; // characters.concat(uppercase)
var empString = "";

function generatePassword() {

  length = Number(prompt("How many characters would you like your password to be?")); {
    while (isNaN(length) || length < 8 || length > 100) length = Number(prompt("Length must be 8-100 characters. How many characters would you like your password to be"));
  }
  var choiceOne = confirm("Would you like to use uppercase letters?");
  if (choiceOne) {
    characters = characters.concat(uppercase)
  }
  var choiceTwo = confirm("Would you like to use lowercase letters?");
  if (choiceTwo) {
    characters = characters.concat(lowercase)
  }
  var choiceThree = confirm("Would you like to use numbers?");
  if (choiceThree) {
    characters = characters.concat(numbers)
  }

  var choiceFour = confirm("Would you like to use special characters?");
  if (choiceFour) {
    characters = characters.concat(symbols)
  }
  
  for (var i = 0; i < length; i++) {
    var index = Math.floor(Math.random() * characters.length);
    var randomChar = characters[index];
    
    empString += randomChar;
    console.log (empString);
  }
  return (empString);
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
