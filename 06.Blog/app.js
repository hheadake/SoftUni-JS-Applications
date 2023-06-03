function attachEvents() {
    
const loadBtn = document.getElementById('btnLoadPosts');
const optionField = document.getElementById('posts');
const postBtn = document.getElementById('btnViewPost');
const appender = document.getElementById('post-comments');
let array = [];

loadBtn.addEventListener('click', async function getData() { 

const url = 'http://localhost:3030/jsonstore/blog/posts'

const request = await fetch(url);
const response = await request.json();

 for (const key in response) {
    
        const element = response[key];
        const option = createEl('option', `${element.id}`, `${element.title}`, optionField, false)
   
 }
    


});

    postBtn.addEventListener('click', getComments)

    async function getComments(e) {

        const url = 'http://localhost:3030/jsonstore/blog/comments'

        const request = await fetch(url);
        const response = await request.json();
        for (const key in response) {
    
            const element = response[key];
            array.push(element)
            
       
     }
        const target = optionField.value

        const match = array.find( x => x.postId === target)
      
         let div = createEl('div', false, `${match.text}`, appender, false);
        



    }
    


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