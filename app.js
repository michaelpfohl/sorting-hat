'use strict';

let studentNames = [];

const initialButtonClick = () => {
    document.querySelector('#initial-button').addEventListener('click', buildForm);
}

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
}

const buildForm = () => {
    let domString = `<form id="student-form">
                        <h1>Enter First Year's Name:</h1>
                        <div class="form-row align-items-center">
                            <div class="col-auto">
                                <label class="sr-only" for="inlineFormInput">Name</label>
                                <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Student Name">
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
    document.querySelector('#student-form').addEventListener('click', resetForm);
    document.querySelector('#sort-button').addEventListener('click', getName);
    document.querySelector('#sort-button').addEventListener('click', buildCard);
}

const expelButtonClick = () => {
    document.querySelector('#cards').addEventListener('click', expelStudent);
}

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
        if (studentNames[i].name) {
            domString += `<div class="card m-3" style="width: 30%;">
                        <div class="card-body ${studentNames[i].house}">
                            <h5 class="card-title">${studentNames[i].name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${studentNames[i].house}</h6>
                            <button id="${i}" type="button" class="btn btn-danger">Expel</button>
                        </div>
                    </div>`
            document.querySelector('#inlineFormInput').style.border = 'none';    
        } else {
            document.querySelector('#inlineFormInput').style.border = '2px red solid';
        }
    }
    printToDom('#cards', domString);
    expelButtonClick();
    cardColors();
}

const resetForm = () => {
    document.querySelector('#student-form').reset();
}

const expelStudent = (e) => {
    const ctype = e.target.type;
    const target = e.target.id;

    if (ctype === 'button'){
        studentNames.splice(target, 1);
        buildCard();
    }
}

const cardColors = () => {
    for (let i = 0; i < studentNames.length; i++){
        if (studentNames[i].house === 'Gryffindor'){
            document.querySelector('.Gryffindor').classList.add("Gryffindor");
        } else if (studentNames[i].house === 'Slytherin') {
            document.querySelector('.Slytherin').classList.add("Slytherin");
        } else if (studentNames[i].house === 'Hufflepuff'){
            document.querySelector('.Hufflepuff').classList.add("Hufflepuff");
        } else if (studentNames[i].house === 'Ravenclaw'){
            document.querySelector('.Ravenclaw').classList.add("Ravenclaw");
        }
    }
}

const init = () => {
    initialButtonClick();
}

init();
