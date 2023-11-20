import entries from './script.js';

// handle display trip cost to DOM
function handleDisplayTripCost(tripCost){
    const tripCostEl = document.querySelector("[data-trip-cost]");
    return tripCostEl.textContent = "R" + tripCost;
};


// handle display customer change to DOM
function handleDisplayCustomerChange(change){
    const changeEl = document.querySelector("[data-customer-change]");
    return changeEl.textContent = "R" + change;
};


function handleDisplayEntries(){
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = "";

    entries.forEach(entry => {
        const rowEl = document.createElement('tr');

        const distanceData = document.createElement('td');
        const rateData = document.createElement('td');
        const costData = document.createElement('td');

        distanceData.textContent = entry.distance + "Km";
        rateData.textContent = "R" + entry.rate_km + "/Km";
        costData.textContent = entry.total_cost;

        rowEl.append(distanceData, rateData, costData);

        tableBody.append(rowEl);
    });
};

export { handleDisplayTripCost, handleDisplayCustomerChange, handleDisplayEntries };