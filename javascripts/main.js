//hot to import multiple functions?
// import makeBearForm from '../javascripts/components/bearForm.js';
import { makeBearForm, bearFormSubmitButtonEvent, userEnteredBearData } from '../javascripts/components/bearForm.js';



const init = () => {
    makeBearForm();
    bearFormSubmitButtonEvent();    
};

init();