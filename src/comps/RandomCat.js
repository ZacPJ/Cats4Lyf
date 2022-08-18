import 'cat-names';
import { faker } from '@faker-js/faker';
import { random } from 'cat-names';

function randomSex () {
    let sex = Math.ceil(Math.random()*2)
    if(sex = 1){
        return "Male"
    }else if (sex = 2) {
        return "Female"
    }
} 
function randomAge () {
    return Math.ceil(Math.random()*20)
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
    name: random(),
    sex: randomSex(),
    breed: faker.animal.cat(),
    location: faker.address.city(),
    age: randomAge(),
    price: randomPrice(),
    basket: false,
    adjectives: {
        adj1: faker.word.adjective(),
        adj2: faker.word.adjective(),
        adj3: faker.word.adjective(),
    }
}
console.log(cat)
console.log(cat.adjectives.adj1)
