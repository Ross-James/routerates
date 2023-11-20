import { calcTripCost, calcCustomerChange, addEntry } from './func.js';
import { handleDisplayTripCost, handleDisplayCustomerChange, handleDisplayEntries } from './handlers.js';


let entries = [];


// EVENT LISTENERS
const tripCostForm = document.getElementById("tripCostForm");
const customerChangeForm = document.getElementById("customerChangeForm");
const saveEntryBtn = document.getElementById("saveEntryBtn");


tripCostForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const distanceVal = document.querySelector("[data-distance]").value;
    const rateVal = document.querySelector("[data-rate]").value;

    const total = calcTripCost(distanceVal, rateVal);

    return handleDisplayTripCost(total);
});


customerChangeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const tripAmount = document.querySelector("[data-trip-cost]").textContent;
    const paidAmount = document.querySelector("[data-customer-paid]").value;

    const customerChange = calcCustomerChange(paidAmount, tripAmount);

    return handleDisplayCustomerChange(customerChange);
});


saveEntryBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const entryDistance = document.querySelector("[data-distance]").value;
    const entryRate = document.querySelector("[data-rate]").value;
    const entryCost = document.querySelector("[data-trip-cost]").textContent;

    const newEntry = addEntry(entryDistance, entryRate, entryCost);

    entries.push(newEntry);

    return handleDisplayEntries();
});


export default entries;