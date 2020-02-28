

import { printToDom } from "../helpers/util.js"



const makeBearForm = () => {
    let domString= '';

    if ( 1 === 1) {

        domString += `<form class="col-md-4 bg-dark mx-auto">`

        domString +=    `<div class="form-group">`
        domString +=        `<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Bear Name">`
        domString +=            `</div>`

        domString +=    `<div class="form-group">`
        domString +=        `<input type="text" class="form-control" id="Image URL" placeholder="Enter Bear Image URL">`
        domString +=            `</div>`

        domString +=    `<button type="submit" class="btn btn-secondary">Submit</button>`

        domString += `</form>`
        }

    printToDom('printBearFormHere', domString); //do i need to call it differently since i'm importing it?S

}


export default makeBearForm;  