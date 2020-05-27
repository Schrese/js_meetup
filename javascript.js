const calc = () => {
    let op1 = Number(getOpVal('op1'));
    let op2 = Number(getOpVal('op2'));
    let op = Number(getOp('op'));

    let ans = doOp(op1, op, op2);
    console.log("Answer is ", ans);
    setAnswer(ans);
}

const getOpVal = (id) => {
    return document.getElementById(id).value;
}

const getOp = (selected) => {
    let select = document.getElementById(selected);
    return select.options[select.selectedIndex].value;
}

const doOp = (op1, op, op2) => {
    switch(op) {
        case 0: return op1 + op2;
        case 1: return op1 - op2;
        case 2: return op1 * op2;
        case 3: return op1 / op2;
    }
}

const setAnswer = (ans) => {
    document.getElementById('ans').innerText = ans;
}