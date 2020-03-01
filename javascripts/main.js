
import { makeBearForm, bearFormSubmitButtonEvent } from '../javascripts/components/bearForm.js';
// import { userEnteredBearData } from '../javascripts/helpers/data/bearData.js'
// import { showMeTheBearArray } from '../javascripts/helpers/data/bearData.js'
import { makeRiverCards } from '../javascripts/components/river.js'



const init = () => {
    makeBearForm();
    // showMeTheBearArray();
    bearFormSubmitButtonEvent();  
    // makeRiverCards();
};

init();

//i feel like the submit button event shouldn't be in the init. it might be reloading the page