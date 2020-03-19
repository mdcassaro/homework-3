// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "0123456789";
var symbols = "!@#$%^&*(){}[]?";
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
var userPreference1 = confirm("Do you want to include Letters?");
var userPreference2 = confirm("Do you want to include Numbers?");
var userPreference3 = confirm("Do you want to include Symbols?");
var stringLengthUser = prompt("How long do you want your password?")
var letterAndNumbers = (userPreference1 && userPreference2)
var lettersAndSymbols = (userPreference1 && userPreference3)
var numbersAndSymbols = (userPreference2 && userPreference3)




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  

  passwordText.value = password;

}
//write generate password function my self.
function generatePassword(){
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz!@#$%^&*(){}[]?";
    var string_length = parseInt(stringLengthUser);
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
    }
    return randomstring
    console.log(main)
    
    
}
function generateNumbsAndLetters(){
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxy";
    var string_length = parseInt(stringLengthUser);
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);
    }
    return randomstring    
    console.log(2)
}
function generateNumbsAndSymbols(){
        var chars = "0123456789!@#$%^&*(){}[]?";
        var string_length = parseInt(stringLengthUser);
        var randomstring = '';
        for (var i=0; i<string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum,rnum+1);
        return randomstring
        console.log(3)
        }
}
function generateLettersAndSymbols(){
    var chars = "!@#$%^&*(){}[]?ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var string_length = parseInt(stringLengthUser);
    var randomstring = '';
    for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);
    }
    
    return randomstring
    console.log(4)
    
}
function generateLetters(){
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var string_length = parseInt(stringLengthUser);
    var randomstring = '';
    for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);
    }
    
    return randomstring
    console.log(5)
    
}
function generateSymbols(){
    var chars = "!@#$%^&*(){}[]?";
    var string_length = parseInt(stringLengthUser);
    var randomstring = '';
    for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);
    }
    
    return randomstring
    console.log(6)
    
}
function generateNumbers(){
    var chars = "0123456789";
    var string_length = parseInt(stringLengthUser);
    var randomstring = '';
    for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);
    }
    
    return randomstring
    console.log(7)
    
}

if(userPreference1 === true){
    generateLetters()

}else if (userPreference2 === true){
    generateNumbers()
}else if(userPreference3 === true){
    generateSymbols()
}else if(letterAndNumbers === true){
    generateNumbsAndLetters()
}else if(lettersAndSymbols === true){
    generateLettersAndSymbols()
}else if(numbersAndSymbols === true){
    generateNumbsAndSymbols()
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);