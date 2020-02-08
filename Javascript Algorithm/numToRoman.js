function convertToRoman(num) {
let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let romanLibrary = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  var toRoman = "";

  for (let i = 0; i < decimal.length; i++) {
    while (decimal[i] <= num) {
      toRoman += romanLibrary[i];
      num -= decimal[i];
    }
  }

  return toRoman;
}

convertToRoman(99);