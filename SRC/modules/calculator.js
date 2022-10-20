const values = [5, "+" , 4, "*", 3]

const formatEquation = (...cValues) => {
    let indexes = []
    let finalEquation = []
    let index
    EquationLoop:
        while (finalEquation.length !== cValues.length) {
            index = cValues.findIndex((value) => value === "*" || value === "/")
            console.log(index)
            if (index === -1) {
                console.log(index)
                index = finalEquation.findIndex((value) => value === "+" || value === "-")
                console.log(index)
                if (index === -1) {
                    cValues.shift()
                    continue EquationLoop
                }
            }
            console.log(index)
            parseFloat(index)
            indexes.push(index)
            if (!finalEquation[index -1] === cValues[index -1] || index -1 >= -1) {
                finalEquation.push(cValues[index - 1])
            }
            finalEquation.push(cValues[index])
            if (!finalEquation[index + 1] === cValues[index + 1] || index + 1 <= cValues.length) {
                finalEquation.push(cValues[index + 1])
            }
            
            return finalEquation
    }
}   

        console.log(formatEquation(...values))