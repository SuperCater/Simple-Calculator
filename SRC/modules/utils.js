// Convert strings to numbers
const stringToNumber = (str) => {
    if (typeof str === 'object') { // This will cause issues if a regular object is passed and not an array.
        for (let i = 0; i < str.length; i++) {
            str[i] = Number(str[i])
        }
    } else {
        str = Number(str)
    }

    return str
}

// lowercase
const lowerCase = (str) => {
    return str.toLowerCase()
}

// Add commas to a number
const addCommas = (num) => {
    return num.toLocaleString()
}

// exports the functions to be used in other files
module.exports = { stringToNumber, addCommas, lowerCase };

