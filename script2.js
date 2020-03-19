// Assignment Code
var generateBtn = document.querySelector("#generate");
var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz!@#$%^&*(){}[]?";
var numbers = "0123456789";
var symbols = "!@#$%^&*(){}[]?";
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
var numbsAndLetter= "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxy";
var numbersAndSymbols="0123456789!@#$%^&*(){}[]?"
var symbolsAndLetters = "!@#$%^&*(){}[]?ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"
var userPreference1 = confirm("Do you want to include Letters?")
var userPreference2 = confirm("Do you want to include Numbers?")
var userPreference3 = confirm("Do you want to include Symbols?")
var stringLengthUser = prompt("What do you want your passsword length to be?")
var letterAndNumbers = (userPreference1 && userPreference2)
var lettersAndSymbols = (userPreference1 && userPreference3)
var numbersAndSymbols = (userPreference2 && userPreference3)



for (var i = 0; i < 10; i++) {
    // Generate a random decimal number between 0 and 1
    var num = Math.random();
    console.log(Math.ceil(Math.random() * 10))


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  

  passwordText.value = password;

}
//write generate password function my self.
//make these independent functions with if else to operathe them.
function generatePassword(){
   
    var string_length = (parseInt(stringLengthUser)<124);
    var randomstring = '';
    
	for (var i=0; i<string_length; i++) {
        
        
        
        if(userPreference1 === true && userPreference2 ===true && userPreference3 === true ){
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum,rnum+1);
            
        }
        else if (userPreference1 === true && userPreference2 === true && userPreference3 === false){
            var rnum = Math.floor(Math.random() * umbsAndLetter.length);
            randomstring += numbsAndLetter.substring(rnum,rnum+1);
        }
        else if (userPreference1 === true && userPreference2 === false && userPreference3 === true){
            var rnum = Math.floor(Math.random() * symbolsAndLetters.length);
            randomstring += symbolsAndLetters.substring(rnum,rnum+1);
        }
        else if (userPreference1 === false && userPreference2 === true && userPreference3 === true){
            var rnum = Math.floor(Math.random() * symbolsAndLetters.length);
            randomstring += symbolsAndLetters.substring(rnum,rnum+1);
        }
        else if (userPreference1 === true && userPreference2 === false && userPreference3 === false){
            var rnum = Math.floor(Math.random() * letters.length);
            randomstring += letters.substring(rnum,rnum+1);
        }
        else if (userPreference1 === false && userPreference2 === true && userPreference3 === false){
            var rnum = Math.floor(Math.random() * numbers.length);
            randomstring += numbers.substring(rnum,rnum+1);
        }
        else if (userPreference1 === false && userPreference2 === false && userPreference3 === true){
            var rnum = Math.floor(Math.random() * symbols.length);
            randomstring += symbols.substring(rnum,rnum+1);
        }
    
        var rnum = Math.floor(Math.random() * chars.length);
        var string_length = 8;
	    var randomstring = '';
        return randomstring
    }
    
}

// Add event listener to generate button
var button = document.createElement("button");
button.innerHTML = "Do Something";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("did something");
})

generatePassword()
