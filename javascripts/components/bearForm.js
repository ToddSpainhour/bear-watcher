

// import { printToDom } from "../helpers/util.js";
// import { makeRiverCards } from "./river.js";
// import { getTheBears } from "../helpers/data/bearData.js"

let newBear = '';

const makeBearForm = () => {

    let domString= '';

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

}



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
    return newBear = {name: userBearName, image: userBearImage}     
};





 
// export { makeBearForm, bearFormSubmitButtonEvent, userEnteredBearData };  
