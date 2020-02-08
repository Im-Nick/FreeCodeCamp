function palindrome(str) {
  let myStr = str.split(/[\s_,-./)(:]+/g).join("").toLowerCase()
  
  for (let x = 0; x < myStr.length / 2; x++) {
    console.log(myStr[x] == myStr[myStr.length - (x + 1)])
    if (!(myStr[x] === myStr[myStr.length - (x+1)])) return false;
  }
  return true;
}



console.log(palindrome("0_0 (: /-\ :) 0-0"));