function rot13(str) {

  let alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  let myText = "";
  const func = str.split("").forEach(data => {

    let index = alphabet.indexOf(data);
    if (data === " ") myText += " ";
    if (index == 13) myText += alphabet.charAt([data]);
    if (index > 13) {
      index -= 13;
      let MyData = alphabet.charAt([index])
      myText += MyData;
    }else {
      index += 13;
      let MyData = alphabet.charAt([index])

      if (MyData == 'M') {
        if (data == " ") return;
        myText += data;
        return
      }

      myText += MyData;
    }
  })
  return myText;
}

// Change the inputs below to test
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");