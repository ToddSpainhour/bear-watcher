
// import { makeBearForm, bearFormSubmitButtonEvent } from '../javascripts/components/bearForm.js';
// import { makeRiverCards } from '../javascripts/components/river.js'



//bearData
const bearArray = [
    {name: 'Billy the Bear', image: "https://vignette.wikia.nocookie.net/tier-zoo/images/5/57/Bear.jpg/revision/latest?cb=20190305130323"},
];


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
    submitBear.addEventListener('click', userEnteredBearData )
};







//copy userEnteredBearData from here and put in river. no just call the function there
const userEnteredBearData = () => {

    const userBearName = document.getElementById('bear-name-input-field').value;
    const userBearImage = document.getElementById('bear-image-input-field').value;
    console.log("the user entered " + userBearName + " " + userBearImage + " this is from your userEnteredBearData function in bearForm.js");
    // makeRiverCards(); 
    // const newBear = {name: userBearName, image: userBearImage};
    bearArray.push({name: userBearName, image: userBearImage});
    // makeRiverCards(bearArray);
    bearArray.forEach(makeRiverCards)
    // return newBear    
};




//river
const makeRiverCards = (arr) => {
    let domString = '';
    // const newBear =  getTheBears();

    if ( 1 === 1) {

domString +=   `<div class="card" style="width: 18rem;">`
domString +=   `<img src="${arr.image}" class="card-img-top" alt="...">`
domString +=   `<div class="card-body">`
domString +=   `<p class="card-text">${arr.name}</p>`
domString +=   `</div>`
domString +=   `</div>`
console.log('this is from within your makeRiverCards functionin river.js')
}
    printToDom('printRiverCardsHere', domString); 
    // makeRiverCards();
}


const events = () => {
    bearFormSubmitButtonEvent();

}

  


const init = () => {
    makeBearForm();
    events();
    // makeRiverCards();  
};

init();

