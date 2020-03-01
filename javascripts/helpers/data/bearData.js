import { userEnteredBearData } from '../../components/bearForm.js'




const bearArray = [
    {name: 'Billy the Bear', image: "https://vignette.wikia.nocookie.net/tier-zoo/images/5/57/Bear.jpg/revision/latest?cb=20190305130323"}
];




const addTheBears = () => {
bearArray.push(userEnteredBearData)
}




const getTheBears = () => {
    return bearArray
}




export { getTheBears }
