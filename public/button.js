
function getValue(id) {

    return Number(document.getElementById(id).value);
}

function operationBool(id) {
    let temp = document.getElementById(id).checked;
    if (temp === 'on') {
        temp = true
    }
    else if (temp == 'off') {
        temp = false
    }
    return temp
}


function check() {
    error = ""
    flag = false
    const addOption = operationBool('additionOption')
    const addMin1 = getValue('additionMin1')
    const addMax1 = getValue('additionMax1')
    const addMin2 = getValue('additionMin2')
    const addMax2 = getValue('additionMax2')

    const subOption = operationBool('subtractionOption')
    const subMin1 = getValue('subtractionMin1')
    const subMax1 = getValue('subtractionMax1')
    const subMin2 = getValue('subtractionMin2')
    const subMax2 = getValue('subtractionMax2')

    const mulOption = operationBool('multiplicationOption')
    const mulMin1 = getValue('multiplicationMin1')
    const mulMax1 = getValue('multiplicationMax1')
    const mulMin2 = getValue('multiplicationMin2')
    const mulMax2 = getValue('multiplicationMax2')

    const divOption = operationBool('divisionOption')

    const timer = document.getElementById('timing').value;

    if (addOption === true) {
        console.log('add')
        if (addMin1 < 0 || addMin2 < 0) {
            error += 'Minimum value of addition must be greater than 0\n'
            flag = true
        }
        if (addMin1 > addMax1 || addMin2 > addMax2) {
            error += 'The minimum number for addition must be greater than the max\n'
            flag = true
        }
        if (addMax1 > 1000 || addMax2 > 1000) {
            error += 'The maximum possible number is 1000\n'
            flag = true
        }
    }

    if (subOption === true) {
        console.log('sub')
        if (subMin1 < 0 || subMin2 < 0) {
            error += 'Minimum value of subtraction must be greater than 0\n'
            flag = true
        }
        if (subMin1 > subMax1 || subMin2 > subMax2) {
            error += 'The minimum number for subtraction must be greater than the max\n'
            flag = true
        }
        if (subMax1 > 1000 || subMax2 > 1000) {
            error += 'The maximum possible number is 1000\n'
            flag = true
        }
    }

    if (mulOption === true) {
        console.log('mul')
        if (mulMin1 < 0 || mulMin2 < 0) {
            error += 'Minimum value of multiplication must be greater than 0\n'
            flag = true
        }
        if (mulMin1 > mulMax1 || mulMin2 > mulMax2) {
            error += 'The minimum number for multiplication must be greater than the max\n'
            flag = true
        }
        if (mulMax1 > 1000 || mulMax2 > 1000) {
            error += 'The maximum possible number is 1000\n'
            flag = true
        }
    }

    if (flag) {
        alert(error)
    } 
    let date = new Date();

    let before = date.getMilliseconds()

    let arr = createQuestions(addMin1, addMax1, addMin2, addMax2, addOption,
                    subMin1, subMax1, subMin2, subMax2, subOption,
                    mulMin1, mulMax1, mulMin2, mulMax2, mulOption, divOption, timer);

    let after = new Date();
    let something = after.getMilliseconds();
    console.log(arr)

    alert(before + '\n' + something)
    
}


function createQuestions(addMin1, addMax1, addMin2, addMax2, addOption,
                         subMin1, subMax1, subMin2, subMax2, subOption,
                         mulMin1, mulMax1, mulMin2, mulMax2, mulOption, divOption, timer) {
            let arr = []
            let count = 0;
            let addOp = -1;
            let subOp = -1;
            let mulOp = -1;
            let divOp = -1;
            let operations = addOption + subOption + mulOption + divOption;

            if (addOption === true) {
                addOp = count
                count += 1
                
            }
            if (subOption === true) {
                subOp = count
                count += 1
            }
            if (mulOption === true) {
                mulOp = count
                count += 1
            }
            if (divOption === true) {
                divOp = count
            }
            for (let i = 0; i < timer * 500; i++) {
                let op = Math.floor(Math.random() * operations)

                if (op === addOp) {
                    arr.push(questionAdd(addMin1, addMax1, addMin2, addMax2))
                } else if (op === subOp) {
                    arr.push(questionSub(subMin1, subMax1, subMin2, subMax2))
                } else if (op === mulOp) {
                    arr.push(questionMul(mulMin1, mulMax1, mulMin2, mulMax2))
                } else if (op === divOp) {
                    arr.push(questionDiv(mulMin1, mulMax1, mulMin2, mulMax2))
                }
            }

    
    return arr
}

function questionAdd(addMin1, addMax1, addMin2, addMax2) {
    let first = Math.floor(Math.random() * (addMax1 - addMin1 + 1)) + addMin1
    let second = Math.floor(Math.random() * (addMax2 - addMin2 + 1)) + addMin2
    let str = first + ' + ' + second
    let ans = first + second
    let ret = [str, ans]
    return ret

}

function questionSub(subMin1, subMax1, subMin2, subMax2) {
    let first = Math.floor(Math.random() * (subMax1 - subMin1 + 1)) + subMin1
    let second = Math.floor(Math.random() * (subMax2 - subMin2 + 1)) + subMin2
    let str = Math.max(first, second) + ' - ' + Math.min(first, second)
    let ans = Math.max(first, second) - Math.min(first, second)
    let ret = [str, ans]
    return ret
}

function questionMul(mulMin1, mulMax1, mulMin2, mulMax2) {
    let first = Math.floor(Math.random() * (mulMax1 - mulMin1 + 1)) + mulMin1
    let second = Math.floor(Math.random() * (mulMax2 - mulMin2 + 1)) + mulMin2
    let str = first + ' × ' + second
    let ans = first * second
    let ret = [str, ans]
    return ret
}

function questionDiv(divMin1, divMax1, divMin2, divMax2) {
    let first = Math.ceil(Math.random() * (divMax1 - divMin1)) + divMin1
    let second = Math.ceil(Math.random() * (divMax2 - divMin2)) + divMin2
    let ans = first * second 
    let str = ans + ' / ' + first
    let ret = [str, second]
    return ret
}

