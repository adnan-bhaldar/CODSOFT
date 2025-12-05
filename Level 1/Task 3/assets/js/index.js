
let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';

for (let item of buttons) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        handleInput(buttonText);
    });
}

document.addEventListener('keydown', (e) => {

    let key = e.key;

    if (key >= '0' && key <= '9' || key === '.') {
        handleInput(key);
    }

    else if (key === '+' || key === '-' || key === '/' || key === '%' || key === '(' || key === ')') {
        handleInput(key);
    }

    else if (key === '*' || key === 'x') {

        handleInput('X');
    }

    else if (key === 'Enter' || key === '=') {
        e.preventDefault(); buttons
        handleInput('=');
    }

    else if (key === 'Escape' || key === 'Delete') {
        handleInput('C');
    }

    else if (key === 'Backspace') {
        e.preventDefault();

        screen.value = screen.value.slice(0, -1);
        screenValue = screenValue.slice(0, -1);
    }
});

function handleInput(input) {

    if (input === '=') {
        try {
            if (screenValue === "") {
                screen.value = "";
                return;
            }

            let result = eval(screenValue);
            screen.value = result;

            screenValue = result.toString();

        } catch (error) {
            screen.value = "Error";
            screenValue = "";
        }
    }

    else if (input === 'C') {
        screenValue = "";
        screen.value = screenValue;
    }

    else if (input === 'X') {
        screen.value += 'X';

        screenValue += '*';
    }

    else {
        screenValue += input;
        screen.value = screenValue;
    }
}