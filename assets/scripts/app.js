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
    const enteredNumber = getUserNumber();

    if (
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' ||
        !enteredNumber
    ) {
        createAndWriteOutput('it\'s not allowed to input zero', '', '');
        return;
    }

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

addBtn.addEventListener('click', () => calculateResult('ADD'));
subtractBtn.addEventListener('click', () => calculateResult('SUBTRACT'));
multiplyBtn.addEventListener('click', () => calculateResult('MULTIPLY'));
divideBtn.addEventListener('click', () => calculateResult('DIVIDE'));
