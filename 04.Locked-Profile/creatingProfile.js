export function createProfile(element,src, text, appender, nameOfClass) {

    let el = document.createElement(element)

    if(text) {
        el.textContent = text
    }
    if(appender) {
        appender.appendChild(el)
    }
    if(src) {
        el.src = src

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