

import { printToDom } from "../helpers/util.js"
import { userEnteredBearData } from "../helpers/data/bearData.js"


const bearFormSubmitButtonEvent = () => {
    const submitBear = document.getElementById('bear-info-submit-button');
    submitBear.addEventListener('click', userEnteredBearData )

}

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

        domString +=    `<button type="submit" id="bear-info-submit-button" class="btn btn-secondary">Submit</button>`

        domString += `</form>`
        }

    printToDom('printBearFormHere', domString); //do i need to call it differently since i'm importing it?S

}

 //do i need to export a different way?
export { makeBearForm, bearFormSubmitButtonEvent, /*userEnteredBearData*/ };  
