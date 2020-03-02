import { makeBearForm, bearFormSubmitButtonEvent } from "../javascripts/components/bearForm.js"


const events = () => {
    bearFormSubmitButtonEvent();
};


const init = () => {
    makeBearForm();
    events();
};


init();


