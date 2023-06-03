const mainEl = document.getElementById('main');
import { createProfile } from "../04.Locked-Profile/creatingProfile.js";


async function solution(){
 
const url = 'http://localhost:3030/jsonstore/advanced/articles/list'

try {
    const response = await fetch(url);
    const data = await response.json();
    
    
    data.forEach(element => {
        
        const divElement = createProfile('div',false, false, mainEl,'accordion');
        const innerDiv = createProfile('div', false, false, divElement,'head');
        createProfile('span', false, `${element.title}`, innerDiv, false);
        const btn = createProfile('button', `${element._id}`, 'More', innerDiv, 'button');
        const extraDiv = createProfile('div', false, false, divElement);
        btn.addEventListener('click', setData);
        async function setData (e) {
            let id = e.target.id
            const url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`
            
            const req = await fetch(url);
            const res = await req.json();
            
            
            let pEl = createProfile('p', false,`${res.content}`, extraDiv, false)
            
        }
        
        
    });
    
}  catch (error) {
    console.log(err)
 }




} solution();

