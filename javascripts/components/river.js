import { printToDom } from "../helpers/util.js"
import { bearArray } from "../helpers/data/bearData.js"

const makeRiverCards = () => {
    let domString= '';

    if ( 1 === 1) {

domString +=   `<div class="card" style="width: 18rem;">`
domString +=   `<img src="https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&w=1000&q=80" class="card-img-top" alt="...">`
domString +=   `<div class="card-body">`
domString +=   `<p class="card-text">${bearArray.name}</p>`
domString +=   `</div>`
domString +=   `</div>`
console.log('inside your makeRiverCards function')
}
    printToDom('printRiverCardsHere', domString); 
}

export { makeRiverCards }