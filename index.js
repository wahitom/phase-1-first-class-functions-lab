// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers){
    return drivers.slice(0, 2);
}
//console.log(returnFirstTwoDrivers())
function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num1){
    return function(fareMultiply){
        
        return num1 * fareMultiply;
    }
}
//console.log(createFareMultiplier())

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers)
}

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers))