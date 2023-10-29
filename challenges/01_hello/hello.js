
// Do not delete the code below 🙏

module.exports = {
  hello(name) {
    if (name === undefined) {
      return ('Hello Stranger')
    } else if (name === "") {
      throw "no empty strings allowed"
    }
    else {
      return ('Hello ' + `${name}`)
    }
  }
}
