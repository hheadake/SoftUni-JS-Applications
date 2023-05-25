import { createProfile } from "../04.Locked-Profile/creatingProfile.js";
import { createBtn } from "../04.Locked-Profile/creatingProfile.js";

const unlockBtn = document.getElementById('unlocked');
const showMoreBtn = document.querySelector('button');
const mainElement = document.getElementById('main')
showMoreBtn.addEventListener('click', lockedProfile)
function lockedProfile(){
   
  if (unlockBtn.checked == true) {

    makingRequest('http://localhost:3030/jsonstore/advanced/profiles')
    
    
}


async function makingRequest(url) {
      
  let response = await fetch(url);
  let data = await response.json()
  
  for (const key in data) {
    
    const profileDiv = createProfile('div', false, false, mainElement, 'profile')
    createProfile('img', false, './iconProfile2.png', profileDiv, 'userIcon')
    createProfile('label', 'Lock', false, profileDiv, false)
    const input = createBtn('input', profileDiv, 'radio', 'user1Locked', 'lock')
    createProfile('label',profileDiv, 'Unlocked', false, profileDiv, false)
    createBtn('input', profileDiv, 'radio', 'user1Locked', 'unlock')
    createProfile('label',profileDiv, 'Username', false, profileDiv, false)
    createBtn('input', profileDiv, 'text', 'user1userName', `${data[key].username}`)
    createProfile('label',profileDiv, 'Email:', false, profileDiv, false)
    createBtn('input', profileDiv, 'email', 'user1Email', `${data[key].email}`)
    createProfile('label',profileDiv, 'Age:', false, profileDiv, false)
    createBtn('input', profileDiv, 'email', 'user1Age', `${data[key].age}`)
    createBtn('button', profileDiv, false, false, false)
    
  }
}








}













