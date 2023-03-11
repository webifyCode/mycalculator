$(function() {

  class Calculator {
    constructor(previousOperandElement, currentOperandElement) {
      this.previousOperandElement = previousOperandElement;
      this.currentOperandElement = currentOperandElement;
      this.clear();
    }
//clear display
    clear() {
      this.previousOperand = '';
      this.currentOperand = '';
      this.operation = undefined;
    }
// delete a character
    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
//append a character
    appendCharacter(character) {
      if (character === '.' && this.currentOperand.includes('.')) return;
      this.currentOperand = this.currentOperand.toString() + character.toString();
    }
//choose operation
    chooseOperation(operation) {
      if (this.currentOperand === '') return;
      if (this.previousOperand !== '') {
        this.compute();
      };
      this.operation = operation;
      this.previousOperand = this.currentOperand;
      this.currentOperand = '';
    }
//compute expression
    compute() {
      let computation;
      const prev = parseFloat(this.previousOperand),
       current = parseFloat(this.currentOperand);
      if (isNaN(prev) || isNaN(current)) return;
      switch (this.operation) {
        case '+':
          computation = prev + current;
          break;

        case '-':
          computation = prev - current;
          break;

        case 'x':
          computation = prev * current;
          break;

        case '÷':
          computation = prev / current;
          break;
        
        default:
          return

      }
      
      this.currentOperand = computation;
      this.operation = undefined;
      this.previousOperand = ''
    }
    //add commas to appropriate numbers
    getDisplayNumber (number) {
      const stringNumber = number.toString(),
        integerDigits = parseFloat(stringNumber.split('.')[0]),
        decimalDigits = stringNumber.split('.')[1];
      let integerDisplay;
      if (isNaN(integerDigits)) {
        integerDisplay = '';
      } else {
        integerDisplay = integerDigits.toLocaleString('en', {
          maximumFractionDigits: 0
        });
      }
        
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay;
      };
      
      
    }

    updateDisplay() {
      this.currentOperandElement.innerText = this.getDisplayNumber(this.currentOperand);
      if (this.operation != null) {this.previousOperandElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`} else {
      this.previousOperandElement.innerText = this.previousOperand;
      }
    }
  }

  const numbers = document.querySelectorAll('[data-number]'),
    operations = document.querySelectorAll('[data-operation]'),
    del = document.querySelector('[data-delete]'),
    equals = document.querySelector('[data-equals]'),
    reset = document.querySelector('[data-reset]'),
    previousOperandElement = document.querySelector('[data-previous-operand]'),
    currentOperandElement = document.querySelector('[data-current-operand]');

  const calculator = new Calculator(previousOperandElement, currentOperandElement);

  numbers.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendCharacter(button.innerText);
      calculator.updateDisplay();
    })
  });

  operations.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText);
      calculator.updateDisplay();
    })
  });

  equals.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
  });

  reset.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
  });
  
  del.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
  })

  
});
