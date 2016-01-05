function palindrome(str) {
  // Good luck!
  var re = /[\W_]/g;
  str = str.replace(re,"").toLowerCase();
  
  var newStr = str.split("").reverse().join("");
  //var newStr = strArr.reverse().join("");
  
  if(str === newStr){
    return true;
  }else{
    return false;
  }
  
 // return true;
}



palindrome("eye");
