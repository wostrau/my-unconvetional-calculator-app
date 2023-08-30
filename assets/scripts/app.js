const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

const getUserNumber = () => parseInt(userInput.value);

const createAndWriteOutput = (operator, resultBeforeCalc, calcNumber) => {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
};

const writeToLog = (operationIdentifier, prevResult, operationNumber, newResult) => {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
};

const calculateResult = (calculationType) => {
    if (
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE'
    ) return;

    const enteredNumber = getUserNumber();
    const initialResult = currentResult;
    let mathOperator;

    switch (calculationType) {
        case 'ADD':
            currentResult += enteredNumber;
            mathOperator = '+';
            break;
        case 'SUBTRACT':
            currentResult -= enteredNumber;
            mathOperator = '-';
            break;
        case 'MULTIPLY':
            currentResult *= enteredNumber;
            mathOperator = '*';
            break;
        case 'DIVIDE':
            currentResult /= enteredNumber;
            mathOperator = '/';
            break;
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
};

const add = () => calculateResult('ADD');
const subtract = () => calculateResult('SUBTRACT');
const multiply = () => calculateResult('MULTIPLY');
const divide = () => calculateResult('DIVIDE');

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
