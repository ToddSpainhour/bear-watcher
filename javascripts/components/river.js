// import { getTheBears } from "../helpers/data/bearData.js"
// import { userEnteredBearData, bearFormSubmitButtonEvent} from "../components/bearForm.js"
// import { printToDom } from "../helpers/util.js"

//figure out how to connect the data from userEnteredBearData to the river cards area below

const makeRiverCards = () => {
    let domString= '';
    const newBear =  getTheBears();


    if ( 1 === 1) {

domString +=   `<div class="card" style="width: 18rem;">`
domString +=   `<img src="${getTheBears.name}" class="card-img-top" alt="...">`
domString +=   `<div class="card-body">`
domString +=   `<p class="card-text">${getTheBears.image}</p>`
domString +=   `</div>`
domString +=   `</div>`
console.log('this is from within your makeRiverCards functionin river.js')
}
    printToDom('printRiverCardsHere', domString); 
    // makeRiverCards();
}



// export { makeRiverCards }