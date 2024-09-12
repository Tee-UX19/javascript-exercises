const reverseString = function(String) {
    let reversedString = "";
    if (String === "") {
        return "";
    }
    for (let i = String.length - 1; i >= 0; i--) {
        reversedString += String[i];
    }
    return reversedString;

};


// Do not edit below this line
module.exports = reverseString;
