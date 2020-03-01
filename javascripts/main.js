
// import { makeBearForm, bearFormSubmitButtonEvent } from '../javascripts/components/bearForm.js';
// import { makeRiverCards } from '../javascripts/components/river.js'



//bearData
const bearArray = [];


const getTheBears = () => {
    return bearArray
};



//util
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };








//bearForm
// let newBear = '';

const makeBearForm = () => {

    let domString = '';

    if ( 1 === 1) {

        domString += `<form class="col-md-4 bg-dark mx-auto">`

        domString +=    `<div class="form-group">`
        domString +=        `<input type="text" class="form-control" id="bear-name-input-field" aria-describedby="emailHelp" placeholder="Enter Bear Name">`
        domString +=            `</div>`

        domString +=    `<div class="form-group">`
        domString +=        `<input type="text" class="form-control" id="bear-image-input-field" placeholder="Enter Bear Image URL">`
        domString +=            `</div>`

        domString +=    `<button type="button" id="bear-info-submit-button" class="btn btn-secondary">Submit</button>`

        domString += `</form>`
        }

    printToDom('printBearFormHere', domString); 

};

const bearFormSubmitButtonEvent = () => {
    const submitBear = document.getElementById('bear-info-submit-button');
    submitBear.addEventListener('click', userEnteredBearData );
    // makeRiverCards(bearArray);
};







//copy userEnteredBearData from here and put in river. no just call the function there
const userEnteredBearData = (e) => {

    const userBearName = document.getElementById('bear-name-input-field').value;
    const userBearImage = document.getElementById('bear-image-input-field').value;
    // console.log("the user entered " + userBearName + " " + userBearImage + " this is from your userEnteredBearData function in bearForm.js");
    bearArray.push({name: userBearName, image: userBearImage});
    bearArray.forEach(makeRiverCards);
    console.log(bearArray)
    e.preventDefault();
    makeRiverCards(bearArray);  
};

//i called the make makeRiverCards function with an argument of bearArray
//i also changed all the makeRiverCard parameters to arr


//river
const makeRiverCards = (arr) => {
    let domString = '';
    for (let i = 0; i < arr.length; i++) {
    
//i stopped here after adding the [i] to each key value pair
    // domString +=   `<div class="row>`
    // domString +=   `<div class="row">`
    domString +=   `<div class="card">`
    domString +=            `<img src="${arr[i].image}" class="card-img-top" alt="...">`
    domString +=        `<div class="card-body col-6">`
    domString +=            `<p class="card-text">${arr[i].name}</p>`
    domString +=        `</div>`
    domString +=   `</div>`
    // domString +=   `</div>`


    console.log('this is from within your makeRiverCards functionin river.js')
    printToDom('printRiverCardsHere', domString);  
};
};


const events = () => {
    bearFormSubmitButtonEvent();
};

  


const init = () => {
    makeBearForm();
    events();
};



init();

