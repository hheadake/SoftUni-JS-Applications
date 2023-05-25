import { createProfile } from "../04.Locked-Profile/creatingProfile.js";

function solve() {
const label = document.querySelector('#info span')
const departBtn = document.getElementById('depart')
const arriveBtn = document.getElementById('arrive')
let stop = {
    next: 'depot'
};


  async function depart() {
    const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`
    const response = await fetch (url);

    departBtn.disabled = true
    stop = await response.json()

    label.textContent = `Next stop ${stop.name}`

    arriveBtn.disabled = false

    }

    function arrive() {
        departBtn.disabled = false
        arriveBtn.disabled = true
        label.textContent = `Arriving at ${stop.name}`


    }

    return {
        depart,
        arrive
    };
}

let result = solve();