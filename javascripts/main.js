
// import { makeBearForm, bearFormSubmitButtonEvent } from '../javascripts/components/bearForm.js';
// import { makeRiverCards } from '../javascripts/components/river.js'

import { makeBearForm, bearFormSubmitButtonEvent } from "../javascripts/components/bearForm.js"


const events = () => {
    bearFormSubmitButtonEvent();
};


const init = () => {
    makeBearForm();
    events();
};


init();


