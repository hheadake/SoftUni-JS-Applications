function lockedProfile() {
   

let unlockBtn = document.getElementById('unlocked');
let showMoreBtn = document.querySelector('button');

async function makingRequest(url) {

    let response = await fetch(url);
    let data = await response.json()
    console.log(Object.values(data))



}






showMoreBtn.addEventListener('click', () => {
if (unlockBtn.checked == true) {

makingRequest('http://localhost:3030/jsonstore/advanced/profiles')



}



})













}