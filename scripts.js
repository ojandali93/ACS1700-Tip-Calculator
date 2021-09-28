const billInput = document.getElementById('bill-input')

const tipIncrement = document.getElementById('tip-increment')
const tipInput = document.getElementById('tip-selector')
const tipDecrement = document.getElementById('tip-decrement')

const peopleIncrement = document.getElementById('people-increment')
const peopleInput = document.getElementById('people-selector')
const peopleDecrement = document.getElementById('people-decrement')

const tipOutput = document.getElementById('tip-output')
const totalOutput = document.getElementById('total-output')

billInput.addEventListener('input', update)

tipIncrement.addEventListener('click', incrementTip)
tipInput.addEventListener('input', update)
tipDecrement.addEventListener('click', decrementTip)

peopleIncrement.addEventListener('click', incrementPeople)
peopleInput.addEventListener('input', update)
peopleDecrement.addEventListener('click', decrementPeople)

function update(e){
    let bill = parseFloat(billInput.value)
    let percentTip = parseFloat(tipInput.value) / 100
    let people = parseInt(peopleInput.value)
    let billTotal = bill + (bill * percentTip)
    let tip = (bill * percentTip) / people
    
    tipOutput.innerHTML = "$" + tip.toFixed(2) + ((people > 1) ? ' per person' : '')
    totalOutput.innerHTML = billTotal.toFixed(2)
}

function incrementTip(e){
    let currentTip = parseFloat(tipInput.value) + 1;
    tipInput.value = currentTip++;
    update();
}

function decrementTip(e){
    if(parseFloat(tipInput.value) > 0){
        let currentTip = parseFloat(tipInput.value) - 1;
        tipInput.value = currentTip++;
        update();
    }
}

function incrementPeople(e){
    let currentPeople = parseFloat(peopleInput.value) + 1;
    peopleInput.value = currentPeople++;
    update();
}

function decrementPeople(e){
    if(parseFloat(peopleInput.value) > 0){
        let currentPeople = parseFloat(peopleInput.value) - 1;
        peopleInput.value = currentPeople++;
        update();
    }
}