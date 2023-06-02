const mainEl = document.getElementById('main');
import { createProfile } from "../04.Locked-Profile/creatingProfile.js";

async function solution(){
 
const url = 'http://localhost:3030/jsonstore/advanced/articles/list'

const response = await fetch(url);
const data = await response.json();

data.forEach(element => {

    const divElement = createProfile('div',false, false, mainEl,'accordion')
    const innerDiv = createProfile('div', false, false, divElement,'head')
    createProfile('span', false, `${element.title}`, innerDiv, false)




});















} solution();