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

// Add commas to a numbers
const addCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// exports the functions to be used in other files
module.exports = { stringToNumber, addCommas };

