// complete the given function

function palindrome(str){
	 s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
  // Compare the string with its reverse
  return str === str.split("").reverse().join("");
}
module.exports = palindrome
