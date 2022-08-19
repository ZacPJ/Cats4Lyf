import 'cat-names';
import { faker } from '@faker-js/faker';
import { random } from 'cat-names';

function randomSex () {
    let sexnum = Math.ceil(Math.random()*2)
    if(sexnum === 1){
        return "Male"
    }else if (sexnum === 2) {
        return "Female"
    }
} 
function randomAge (upperAge) {
    return Math.ceil(Math.random()*upperAge)
}

function randomPrice () {
    let priceA = Math.ceil((Math.random()*(Math.ceil(Math.random()*100))*20))
    while (priceA<=100){
        priceA = Math.ceil((Math.random()*(Math.ceil(Math.random()*100))*20))
    }
        let priceB = Math.round(Math.random()*100)/100
    return priceA+priceB
}

let cat = {
    imgURL: "",
    name: "",
    sex: "",
    breed: "",
    location: "",
    age: "",
    price: "",
    basket: false,
    adjectives: {
        adj1: "",
        adj2: "",
        adj3: "",
    }
}

/*{storedCat.map((cat,index) => {
    return(*/
const fetchCat = async (setCat, setError) => {
    try{
const response = await fetch(`https://api.thecatapi.com/v1/breeds`)
    if (!response.ok){
        throw new Error (response.statusText)
    }
    let data = await response.json();
    data = data.filter(imgvar=> imgvar.image?.url!=null)
    console.log(data)

    const NewVar = data.map((cat)=>{
        return {
            name:random(),
            sex:randomSex(),
            breed:cat.name,
            location:faker.address.city(),
            age:randomAge(18),
            img:cat.image.url,
            price:randomPrice(),
            basket:false,
            adjectives:cat.temperament,
            description:cat.description
        }
    })
    setCat (NewVar)
} catch (err) {
    setError ('Could not fetch data')
    console.log (err.message)
}
}


export {fetchCat,cat}