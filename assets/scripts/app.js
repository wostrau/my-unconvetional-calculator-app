const defaultResult = 0;

let currentResult = defaultResult;

const getUserNumber = () => parseInt(userInput.value);

const add = () => {
    const enteredNumber = getUserNumber();
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult, calcDescription);
};

addBtn.addEventListener('click', add);
