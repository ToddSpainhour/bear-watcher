import { printToDom } from "../helpers/util.js"
import { getTheBears } from "../helpers/data/bearData.js"



const makeRiverCards = () => {
    let domString= '';

    if ( 1 === 1) {

domString +=   `<div class="card" style="width: 18rem;">`
domString +=   `<img src="${bearData.userEnteredBearData}" class="card-img-top" alt="...">`
domString +=   `<div class="card-body">`
domString +=   `<p class="card-text">${bearData.userEnteredBearData}</p>`
domString +=   `</div>`
domString +=   `</div>`
console.log('inside your makeRiverCards function')
}
    util.printToDom('printRiverCardsHere', domString); 
}

// makeRiverCards();

export { makeRiverCards }