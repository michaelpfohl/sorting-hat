'use strict';

const initialButtonClick = () => {
    document.querySelector('#initial-button').addEventListener('click', buildForm);
}

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
}

const buildForm = () => {
    let domString = `<form>
                        <h1>Enter First Year's Name:</h1>
                        <div class="form-row align-items-center">
                            <div class="col-auto">
                                <label class="sr-only" for="inlineFormInput">Name</label>
                                <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Student Name" required>
                            </div>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-primary mb-2" id="sort-button">Sort!</button>
                            </div>
                        </div>
                    </form>`
    printToDom('#form', domString);
    sortButtonClick();
}

const sortButtonClick = () => {
    document.querySelector('#sort-button').addEventListener('click', getName);
    document.querySelector('#sort-button').addEventListener('click', buildCard);
}

const expelButtonClick = () => {
    document.querySelector('#cards').addEventListener('click', expelStudent);
}

let studentNames = [];

const getName = () => {
    const name = document.querySelector('#inlineFormInput').value;
    studentNames.push({name: name, house: getHouse()});
}

const getHouse = () => {
    const houseNames = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
    let randomHouse = houseNames[Math.floor(Math.random() * houseNames.length)];
    return randomHouse;
}

const buildCard = () => {
    let domString = '';
    
    for (let i = 0; i < studentNames.length; i++){
        domString += `<div class="card m-3" style="width: 30%;">
                        <div class="card-body">
                            <h5 class="card-title">${studentNames[i].name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${studentNames[i].house}</h6>
                            <button id="${i}" type="button" class="btn btn-danger">Expel</button>
                        </div>
                    </div>`
    }
    printToDom('#cards', domString);
    expelButtonClick();
}

const expelStudent = (e) => {
    const ctype = e.target.type;
    const target = e.target.id;

    if (ctype === 'button'){
        studentNames.splice(target, 1);
        buildCard();
    }
}

const init = () => {
    initialButtonClick();
}

init();
