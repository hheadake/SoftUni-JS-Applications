export function createProfile(element,atribute, text, appender, nameOfClass) {

    let el = document.createElement(element)

    if(text) {
        el.textContent = text
    }
    if(appender) {
        appender.appendChild(el)
    }
    if(atribute) {
        el.setAttribute('id', atribute)

    }
    if(nameOfClass) {
        el.className = nameOfClass
    }
return el;

}

export function createBtn(element, appender, typeOfEl, nameOfel, valueofEl) {

let el = document.createElement(element);

if(typeOfEl) {
    el.type = typeOfEl;
}
if(appender){
    appender.appendChild(el)
}

if(nameOfel) {
    el.name = nameOfel;
}
if(valueofEl) {
    el.value = valueofEl;
}

return el;


}



export const template = ()=> `
    <div class="profile">
        <img atribute="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="user1Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" id="unlocked" name="user1Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user1Username" value="" disabled readonly />
        <div class="user1Username">
            <hr>
            <label>Email:</label>
            <input type="email" name="user1Email" value="" disabled readonly />
            <label>Age:</label>
            <input type="text" name="user1Age" value="" disabled readonly />
        </div>
        
        <button>Show more</button>
    </div>



`