const reverse1 = (word) => {

  let reversedstr = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversedstr += word[i];
  }
  return reversedstr;
}  

// Do not delete the code below 🙏

module.exports = {
  reverse1
}
