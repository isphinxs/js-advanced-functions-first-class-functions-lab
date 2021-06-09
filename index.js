// Code your solution in this file!

// // const returnFirstTwoDrivers = function(drivers) {
// //     return drivers.slice(0, 2);
// }
const returnFirstTwoDrivers = drivers => drivers.slice(0, 2);

// const returnLastTwoDrivers = function(drivers) {
//     return drivers.slice(-2);
// }
const returnLastTwoDrivers = drivers => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// function createFareMultiplier(multiplier) {
//     return function(fare) {
//         return fare * multiplier
//     }
// }
const createFareMultiplier = multiplier => { return fare => fare * multiplier };

// const fareDoubler = function(fare) {
//     return createFareMultiplier(2)(fare);
// }
const fareDoubler = fare => createFareMultiplier(2)(fare);

// const fareTripler = function(fare) {
//     return createFareMultiplier(3)(fare);
// }
const fareTripler = fare => createFareMultiplier(3)(fare);

// function selectDifferentDrivers(drivers, func) {
//     return func(drivers);
// }
const selectDifferentDrivers = (drivers, func) => func(drivers);