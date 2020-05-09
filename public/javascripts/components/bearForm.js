import printToDom from "../helpers/util.js"
import makeRiverCards from "../components/river.js"
import { bearArray } from "../helpers/data/bearData.js"


const makeBearForm = () => {

    let domString = '';

        domString += `<form class="col-md-4 bg-dark mx-auto pt-3 pb-3">`
        domString += `<div class="form-group">`
        domString += `<input type="text" class="form-control" id="bear-name-input-field" aria-describedby="emailHelp" placeholder="Enter Bear Name">`
        domString += `</div>`
        domString += `<div class="form-group">`
        domString += `<input type="text" class="form-control" id="bear-image-input-field" placeholder="Enter Bear Image URL">`
        domString += `</div>`
        domString += `<button type="button" id="bear-info-submit-button" class="btn btn-secondary btn-block">Submit</button>`
        domString += `</form>`
        printToDom('printBearFormHere', domString); 
        }

const bearFormSubmitButtonEvent = () => {
    const submitBear = document.getElementById('bear-info-submit-button');
    submitBear.addEventListener('click', userEnteredBearData );
};

const userEnteredBearData = (e) => {

    const userBearName = document.getElementById('bear-name-input-field').value;
    const userBearImage = document.getElementById('bear-image-input-field').value;
    bearArray.push({name: userBearName, image: userBearImage});
    // bearArray.forEach(makeRiverCards);
    e.preventDefault();
    makeRiverCards(bearArray);  
};

export { makeBearForm, bearFormSubmitButtonEvent, userEnteredBearData }
