const addTwoDigits = (number) => {
    const inputString = [...String(number)]
    const total = inputString.reduce((accum, current) => Number(accum) + Number(current) ) 
    console.log(total)
}

addTwoDigits(123456789)
