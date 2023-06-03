function attachEvents() {
    
const loadBtn = document.getElementById('btnLoadPosts');
const optionField = document.getElementById('posts');
loadBtn.addEventListener('click', async function getData() { 

const url = 'http://localhost:3030/jsonstore/blog/posts'

const request = await fetch(url);
const response = await request.json();
const data = Object.keys(response)



 for (const key in response) {
    
        const element = response[key];
        const option = createEl('option', `${element.id}`, `${element.title}`, optionField, false)

    

    
 }
    


});













}

attachEvents();

function createEl(element,value, text, appender, nameOfClass) {

    let el = document.createElement(element)

    if(text) {
        el.textContent = text
    }
    if(appender) {
        appender.appendChild(el)
    }
    if(value) {
        el.value = value

    }
    if(nameOfClass) {
        el.className = nameOfClass
    }
return el;

}