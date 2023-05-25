function attachEvents() {
const input = document.getElementById('location')
const btnElement = document.getElementById('submit')
const currentDiv = document.getElementById('current')
const threeDaysDiv = document.getElementById('upcoming')
const divElement = document.getElementById('forecast')
const symbols = {
    Sunny: '☀',
    'Partly sunny': '⛅',
    Overcast: '☁',
    Rain: '☂',
    degrees: '°',
  };

btnElement.addEventListener('click', getData)
async function getData() {

    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
    const res = await fetch(url);
    const data = await res.json()
    const findCity = data.find((x) => x.name == input.value);

    const conditions = await getCurrentConditions(findCity);
    const forecast = await getThreeDayForecast(findCity);
    
    
    let condition = conditions.forecast.condition
    let degrees = symbols.degrees
    let low = conditions.forecast.low 
    let high = conditions.forecast.high
    let name = conditions.name

    let firstDiv = document.createElement('div')
    firstDiv.classList.add('forecasts')
     currentDiv.appendChild(firstDiv)
   
    
    let symbolSpan = createElement('span', symbols[condition], firstDiv)
    symbolSpan.classList.add('symbol')
    let span = document.createElement('span')
    span.classList.add('condition')
    firstDiv.appendChild(span)
    let nameSpan = createElement('span', name, span)
    nameSpan.classList.add('forecast-data')
    let degreesSpan = createElement('span', `${low}${degrees}/${high}${degrees}`, span)
    degreesSpan.classList.add('forecast-data')
    let conditionSpan = createElement('span',condition,span)
    conditionSpan.classList.add('forecast-data')





















    
   
    divElement.style.display = 'block'
   



}




}

async function getCurrentConditions(city) {
    const url = `http://localhost:3030/jsonstore/forecaster/today/${city.code}`;
    const res = await fetch(url);
    const condition = await res.json();

    return condition;
  }

  async function getThreeDayForecast(city) {
    const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${city.code}`;
    const res = await fetch(url);
    const forecast = await res.json();

    return forecast;
  }

function createElement (type, text, appender) {
    const result = document.createElement(type);
    result.textContent = text
    
    appender.appendChild(result);
    return result;




}

attachEvents();