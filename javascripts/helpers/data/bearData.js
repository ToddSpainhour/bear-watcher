// import userEnteredBearData from "../data/

const bearArray = [];

const showMeTheBearArray = () => {
    console.log(bearArray)
}

const userEnteredBearData = (e) => {

    const userBearName = document.getElementById('bear-name-input-field').value;
    const userBearImage = document.getElementById('bear-image-input-field').value;

    bearArray.push({name: userBearName, image: userBearImage})
    console.log("this is from within your userEnteredBearData in the bearData.js file")
    console.log(userBearName + " " + userBearImage)
    // console.log("hello" + bearArray.push({name: userBearName, image: userBearImage}));
    showMeTheBearArray();
    e.preventDefault();
    // return   
}



const bears = () => {
console.log("from inside your bear function" + bearArray);
}

export { userEnteredBearData };
export { bears };
export { bearArray }
export { showMeTheBearArray }
