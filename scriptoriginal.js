// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "0123456789";
var symbols = "!@#$%^&*(){}[]?";
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
var userPreference1 = confirm("Do you want to include Letters?");
var userPreference2 = confirm("Do you want to include Numbers?");
var userPreference3 = confirm("Do you want to include Symbols?");
var stringLengthUser = prompt("How long do you want your password?")

var userletters = (userPreference1)
var usernumbers = (userPreference2)
var userSymbols = (userPreference3)


if(stringLengthUser < 128 && stringLengthUser >8){
    function generatePassword(){
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz!@#$%^&*(){}[]?";
        var string_length = parseInt(stringLengthUser);
        var randomstring = "";
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
        var randomstring = "";
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
            var randomstring = "";
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
        var randomstring = "";
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
        var randomstring = "";
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
        var randomstring = "";
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
        var randomstring = "";
        for (var i=0; i<string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum,rnum+1);
        }
        
        return randomstring
        
        
    }
    if (userletters == true && userSymbols == true && usernumbers == true){
        generatePassword()
    
    }else if(userletters === true && userSymbols == false && usernumbers == false){
            generateLetters()
    
    }else if (usernumbers === true && userletters === false && userSymbols == false){
            generateNumbers()
    }else if(userSymbols === true && usernumbers === false && userletters === false){
            generateSymbols()
    }else if(userletters === true && usernumbers === true && userSymbols === false){
            generateNumbsAndLetters()
    }else if(userletters === true && userSymbols===true && usernumbers ===false){
            generateLettersAndSymbols()
    }else if(usernumbers === true && userSymbols === true && userletters === false){
            generateNumbsAndSymbols()
    }  
   
    


}else{
    alert("Put in a Length between 8-128")
    var stringLengthUser = prompt("How long do you want your password?")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  

  passwordText.value = password;

}
//write generate password function my self.

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);