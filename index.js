const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); 
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); 
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function(integer) {
    return function(fare) {
        return fare * integer;
    };
};

const fareQuadrupler = createFareMultiplier(4);
console.log(fareQuadrupler(10));
const fareDoubler = createFareMultiplier(2);

console.log(fareDoubler(10));
const fareTripler = createFareMultiplier(3);

console.log(fareTripler(10));
const selectDifferentDrivers = function(drivers, selectFunction) {
    return selectFunction(drivers);
};

console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); 

console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers)); 
