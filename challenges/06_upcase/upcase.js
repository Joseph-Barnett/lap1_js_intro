const upcase = (arr) => {

  if (arr.length === 0) {
    return [];
  }

  const upcased = [];
  for (let i = 0; i < arr.length; i++) {
    upcased.push(arr[i].toUpperCase());

  }
  return upcased;
}


// Do not delete the code below 🙏

module.exports = {
  upcase
}
