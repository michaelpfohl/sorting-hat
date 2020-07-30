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
    document.querySelector('#sort-button').addEventListener('click', getName);
}

let studentNames = [];

const getName = () => {
    const name = document.querySelector('#inlineFormInput').value;
    return studentNames.push(name);
}

const init = () => {
    initialButtonClick();
}

init();
