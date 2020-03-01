

import { printToDom } from "../helpers/util.js";
import { makeRiverCards } from "./river.js";



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
//changed above button type to button instead of submit
        domString += `</form>`
        }

    printToDom('printBearFormHere', domString); //do i need to call it differently since i'm importing it?S

}



const bearFormSubmitButtonEvent = () => {
    const submitBear = document.getElementById('bear-info-submit-button');
    submitBear.addEventListener('click', userEnteredBearData )
    
    // e.preventDefault();
}

const userEnteredBearData = () => {

    const userBearName = document.getElementById('bear-name-input-field').value;
    const userBearImage = document.getElementById('bear-image-input-field').value;
    console.log("the user entered " + userBearName + " " + userBearImage);
    return {name: userBearName, image: userBearImage}
    // bearArray.push({name: userBearName, image: userBearImage});
    //find a way to expot this instead of pushing it?
    // const newBear = bearData.bearArray.push({name: userBearName, image: userBearImage})
    // makeRiverCards();
    // console.log(newBear+ " this is from inside the userEntered BearDataevent")
}

// const newBear = () => {

// }

// const bearArray = [];
 
export { makeBearForm, bearFormSubmitButtonEvent, userEnteredBearData };  
