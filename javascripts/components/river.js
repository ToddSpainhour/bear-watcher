
import printToDom from "../helpers/util.js"





const makeRiverCards = (arr) => {
    let domString = '';
    for (let i = 0; i < arr.length; i++) {
    
    domString +=    `<div class="col-md-3 bg-light mt-5 mr-3 ml-3"`
    domString +=   `<div class="card">`
    domString +=            `<img src="${arr[i].image}" class="card-img-top mt-2 rounded" alt="...">`
    domString +=        `<div class="card-body">`
    domString +=            `<h3 class="card-text text-center">${arr[i].name}</h3>`
    domString +=        `</div>`
    domString +=   `</div>`

    printToDom('printRiverCardsHere', domString);  
};
};

export default makeRiverCards