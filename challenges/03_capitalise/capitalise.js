const capitalise = (input) => {
  if (input === '') {
    return ''
  } else {
    return input[0].toUpperCase() + input.slice(1).toLowerCase();
  }
}

// Do not delete the code below 🙏

module.exports = {
  capitalise
}
