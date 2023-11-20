// function to multiply 2 values
function calcTripCost(distance, rate){
    return rate * distance;
};


// function to subtract 2 values
function calcCustomerChange(amountPaid, tripAmount){
    const amountOwe = parseInt(tripAmount.slice(1));
    return amountPaid - amountOwe;
};


// function to create entry object
function addEntry(distance, rate, cost){
    return {
        'distance': distance,
        'rate_km': rate,
        'total_cost': cost,
    };
};

export { calcTripCost, calcCustomerChange, addEntry };