document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');   
    const previousTypedNumber = typedNumberField.value;
    
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
            document.getElementById('show-result').value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
        else if (number == '+' || number == '-' || number == '/' || number == '*' || number == '.') {
            const newTypedNumber = previousTypedNumber + number;
            typedNumberField.value = newTypedNumber;
        }
        else if (number == "=") {
            var result;
            try {
                result = eval(previousTypedNumber);
            } catch (error) {
                result = "Expression error";
            }
            document.getElementById('show-result').value = result;
        }

    }
    else {
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
})


