const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

const OPERATION_ADD = 'ADD';
const OPERATION_SUBTRACT = 'SUBTRACT';
const OPERATION_MULTIPLY = 'MULTIPLY';
const OPERATION_DIVIDE = 'DIVIDE';

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
    const enteredNumber = getUserNumber();

    if (
        calculationType !== OPERATION_ADD &&
        calculationType !== OPERATION_SUBTRACT &&
        calculationType !== OPERATION_MULTIPLY &&
        calculationType !== OPERATION_DIVIDE ||
        !enteredNumber
    ) {
        createAndWriteOutput('it\'s not allowed to input zero', '', '');
        return;
    }

    const initialResult = currentResult;
    let mathOperator;

    switch (calculationType) {
        case OPERATION_ADD:
            currentResult += enteredNumber;
            mathOperator = '+';
            break;
        case OPERATION_SUBTRACT:
            currentResult -= enteredNumber;
            mathOperator = '-';
            break;
        case OPERATION_MULTIPLY:
            currentResult *= enteredNumber;
            mathOperator = '*';
            break;
        case OPERATION_DIVIDE:
            currentResult /= enteredNumber;
            mathOperator = '/';
            break;
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
};

const calculate = () => {

};

addBtn.addEventListener('click', calculateResult.bind(this, OPERATION_ADD));
subtractBtn.addEventListener('click', calculateResult.bind(this, OPERATION_SUBTRACT));
multiplyBtn.addEventListener('click', calculateResult.bind(this, OPERATION_MULTIPLY));
divideBtn.addEventListener('click', calculateResult.bind(this, OPERATION_DIVIDE));
