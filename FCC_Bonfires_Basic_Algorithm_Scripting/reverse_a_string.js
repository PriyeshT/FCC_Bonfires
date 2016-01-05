function reverseString(str) {
  
  var strArr = str.split("");
  str = strArr.reverse().join("");
  
  
  return str;
}

reverseString("hello");
