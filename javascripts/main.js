
import { makeBearForm, bearFormSubmitButtonEvent } from '../javascripts/components/bearForm.js';
import { userEnteredBearData } from '../javascripts/helpers/data/bearData.js'
import { showMeTheBearArray } from '../javascripts/helpers/data/bearData.js'
import { makeRiverCards } from '../javascripts/components/river.js'



const init = () => {
    makeBearForm();
    bearFormSubmitButtonEvent();  
    // bears();
    showMeTheBearArray();
    makeRiverCards();
};

init();