`strict`

let firstelement = ``;
let secondelement = ``;
let operator = ``;
let textBox = ``

const text = document.querySelector(`.text`);
const clear = document.getElementById(`clear`);
const backspace = document.getElementById(`backspace`);
const zero = document.getElementById(`zero`);
const one = document.getElementById(`one`);
const two = document.getElementById(`two`);
const three = document.getElementById(`three`);
const four = document.getElementById(`four`);
const five = document.getElementById(`five`);
const six = document.getElementById(`six`);
const seven = document.getElementById(`seven`);
const eight = document.getElementById(`eight`);
const nine = document.getElementById(`nine`);
const plus = document.getElementById(`plus`);
const subtract = document.getElementById(`subtract`);
const multiply = document.getElementById(`multiply`);
const divide = document.getElementById(`divide`);
const equal = document.getElementById(`equal`);

clear.addEventListener(`click`, findelement);
backspace.addEventListener(`click`, findelement);
zero.addEventListener(`click`, findelement);
one.addEventListener(`click`, findelement);
two.addEventListener(`click`, findelement);
three.addEventListener(`click`, findelement);
four.addEventListener(`click`, findelement);
five.addEventListener(`click`, findelement);
six.addEventListener(`click`, findelement);
seven.addEventListener(`click`, findelement);
eight.addEventListener(`click`, findelement);
nine.addEventListener(`click`, findelement);
plus.addEventListener(`click`, findOperator);
divide.addEventListener(`click`, findOperator);
subtract.addEventListener(`click`, findOperator);
multiply.addEventListener(`click`, findOperator);
equal.addEventListener(`click`, operate)



function transformElement(numberString) {
    switch (numberString) {
        case `zero`:
            return 0
            break
        case `one`:
            return 1
            break
        case `two`:
            return 2
            break
        case `three`:
            return 3
            break
        case `four`:
            return 4
            break
        case `five`:
            return 5
            break
        case `six`:
            return 6
            break
        case `seven`:
            return 7
            break
        case `eight`:
            return 8
            break
        case `nine`:
            return 9
        default:
            return console.error();
    }
}

function transformOperator(operaterString) {
    switch (operaterString) {
        case `plus`:
            return "+"
            break
        case `subtract`:
            return "-"
        case `divide`:
            return "/"
            break
        case `multiply`:
            return "*"
        default:
            return console.error();
    }
}

function findOperator(e) {
    operator = transformOperator(e.srcElement.id)
    textBox = `${firstelement} ${operator} ${secondelement}`;
    text.textContent = textBox;
    console.log(operator)
}

function findelement(e) {

    if (operator.length <= 0) {
        firstelement += transformElement(e.srcElement.id);
        textBox = firstelement
    } else if (operator) {
        secondelement += transformElement(e.srcElement.id)
        textBox = `${firstelement} ${operator} ${secondelement}`;
    }
    text.textContent = textBox;
}



function operate() {
    if (firstelement && secondelement && operator) {
        let ans = eval(`${firstelement}${operator}${secondelement}`)
        text.textContent = ans
    }
}