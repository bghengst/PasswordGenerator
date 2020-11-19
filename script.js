// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c", "d", "e" , "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", 
"W","X", "Y", "Z"];
var specialCharacter = ["!", "@","#", "$", "%", "^", "*", "&", "?", "/", "+"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passwordArray =[]




// Write password to the #password input


function writePassword() {

    var userLengthPassword = prompt("How many characters do you want your password to be? You can choose between 8 and 128.")

    if (userLengthPassword < 8 || userLengthPassword > 128 ){
       alert("You have to pick between 8 and 128");
        prompt("How many characters do you want your password to be? You can choose between 8 and 128.")
    }

    var userLowerCase = confirm("Do you want to include lowercase letters in your password?");
    var userUpperCase = confirm("Do you want to include uppercase letters in your password?");
    var userSpecialCharacter = confirm("Do you want to include special characters?")
    var userNumber = confirm("Do you want to include numbers?")

   if (userLowerCase == false && userUpperCase == false && userSpecialCharacter == false && userNumber == false) {
      alert("You have to pick one to generate a password");
      userLowerCase = confirm("Do you want to include lowercase letters in your password?");
      userUpperCase = confirm("Do you want to include uppercase letters in your password?");
      userSpecialCharacter = confirm("Do you want to include special characters?")
      userNumber = confirm("Do you want to include numbers?")

     }
     if (userLowerCase === true){
      passwordArray.push(lowerCase)
    }

    if (userUpperCase === true){
      passwordArray.push(upperCase)
    }

    if (userSpecialCharacter === true){
      passwordArray.push(specialCharacter)
    }
    
    if (userNumber === true){
      passwordArray.push(number)
    }
    


     var password = generatePassword();
     var passwordText = document.querySelector("#password");

  passwordText.value = password;



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


