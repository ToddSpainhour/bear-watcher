const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };
  
const fromUtil = () => {
    console.log('hello from deep within yourutil.js file. this means your util is exporting')
}

  export { fromUtil };