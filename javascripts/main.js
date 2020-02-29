//hot to import multiple functions?
// import makeBearForm from '../javascripts/components/bearForm.js';
import { makeBearForm, bearFormSubmitButtonEvent, /*userEnteredBearData*/ } from '../javascripts/components/bearForm.js';
import { userEnteredBearData } from '../javascripts/helpers/data/bearData.js'
import { bears } from '../javascripts/helpers/data/bearData.js'
import { bearArray } from '../javascripts/helpers/data/bearData.js'



const init = () => {
    makeBearForm();
    bearFormSubmitButtonEvent();  
    bears();
};

init();