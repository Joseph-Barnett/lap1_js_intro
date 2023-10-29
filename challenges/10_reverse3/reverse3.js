const reverse3 = (str) => {

  let splitString = str.split(''); // splits string into array - arrays are easier to work with than strings

  let reversedArray = splitString.reverse(); // reveres the array that was just made

  let reversedString = reversedArray.join(''); // uses the opposite command of .split() to rejoin the array and forms a new string

  return reversedString;

}

// Do not delete the code below 🙏

module.exports = {
  reverse3
}
