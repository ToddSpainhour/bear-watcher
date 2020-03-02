
import printToDom from "../helpers/util.js"





const makeRiverCards = (arr) => {
    let domString = '';
    for (let i = 0; i < arr.length; i++) {
    

    domString +=   `<div class="card">`
    domString +=            `<img src="${arr[i].image}" class="card-img-top" alt="...">`
    domString +=        `<div class="card-body col-6">`
    domString +=            `<p class="card-text">${arr[i].name}</p>`
    domString +=        `</div>`
    domString +=   `</div>`

    printToDom('printRiverCardsHere', domString);  
};
};

export default makeRiverCards