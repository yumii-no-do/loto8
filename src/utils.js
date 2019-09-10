export const checkResult = (firstField, firstFieldSize, secondField, secondFieldSize) => {

    const correctFirstField = getRandomSelect(firstField.length, 0, firstFieldSize);
    const correctSecondField = getRandomSelect(secondField.length, 0, secondFieldSize);

    const correctFirstNumber = getCorrect(firstField, correctFirstField)
    const correctSecondNumber = getCorrect(secondField, correctSecondField)

    return correctFirstNumber >= 3 && correctSecondNumber === 1

}

export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getCorrect = (verifiableArr, correctArr) => verifiableArr.reduce((summ, value, index) => {
    return correctArr.indexOf(value) !== -1 ? ++summ : summ
}, 0)

export const getRandomSelect = (size, min = 0, max = 10) => Array(...Array(size)).map(() => getRandomInt(min, max - 1))