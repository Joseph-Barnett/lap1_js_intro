const swapcase = (input) => {
  let newLetters = "";
  for (let i = 0; i < input.length; i++) {
      if (input[i] === input[i].toLowerCase()) {
          newLetters += input[i].toUpperCase();
      } else {
          newLetters += input[i].toLowerCase();
      }
    }
    console.log(newLetters);
    return newLetters;
}


// Do not delete the code below 🙏

module.exports = {
  swapcase
}
