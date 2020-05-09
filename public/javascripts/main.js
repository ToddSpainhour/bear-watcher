import { makeBearForm, bearFormSubmitButtonEvent } from "./components/bearForm.js"

const events = () => {
    bearFormSubmitButtonEvent();
};

const init = () => {
    makeBearForm();
    events();
};

init();
