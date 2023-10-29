

// Do not delete the code below 🙏

module.exports = {
    add(parameter1, parameter2) {
        if (parameter1 !== undefined && parameter2 !== undefined) {
            return parameter1 + parameter2;
        } else if (parameter1 !== undefined && parameter2 === undefined) {
           return parameter1 * 2;
        } else if (parameter1 === undefined && parameter2 !== undefined) {
            return parameter2 * 2;
        } else if (parameter1 === undefined && parameter2 === undefined)
            throw ('you need to call the functions with 2 arguments')
    }
}
