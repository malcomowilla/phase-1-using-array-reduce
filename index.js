const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


const totalBatteries = batteryBatches.reduce(function(acc, element) {
    return acc + element
}, 0)
// // Code your solution here
// // const products = [
// //   { name: 'Shampoo', price: 4.99 },
// //   { name: 'Donuts', price: 7.99 },
// //   { name: 'Cookies', price: 6.49 },
// //   { name: 'Bath Gel', price: 13.99 }
// // ];

// // function getTotalPrice(myProducts) {
// //     let totalPrice = 0

// //     for (const product of myProducts) {
// //         totalPrice += product.price
// //     }

// //     return totalPrice
// // }

// // console.log(getTotalPrice(products))

// const couponLocations = [
//   { room: 'Living room', amount: 5 },
//   { room: 'Kitchen', amount: 2 },
//   { room: 'Bathroom', amount: 1 },
//   { room: 'Master bedroom', amount: 7 }
// ];

// function reduce(coupons, cb, initialValue) {
//     let totalAmount = initialValue;
//     for (const coupon of coupons) {
//         totalAmount = cb(totalAmount, coupon)

//     }

//     return totalAmount
// }


// function calculateCoupons(total_amount, couponLocation) {
//     return total_amount + couponLocation.amount
// }

// console.log(reduce(couponLocations, calculateCoupons, 0 ))



// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 }

// ]


// function reduce(peoples, cb, initialValue) {
//     let totalAge = initialValue
//     for (const person of peoples) {
//         totalAge = cb(totalAge, person)
//     }

//     return totalAge;
// }

// function findTotalAge(currentValue, personObject) {
//  return currentValue + personObject.age
// }


// console.log(reduce(people,findTotalAge, 0))


// const students = [
//   { name: "John", discipline: "Dance" },
//   { name: "Sarah", discipline: "Visual" },
//   { name: "Michael", discipline: "Music" },
//   { name: "Jane", discipline: "Theater" },
//   { name: "David", discipline: "Dance" }
// ];


// const showcases = {
//   "Dance": [],
//   "Visual": [],
//   "Music": [],
//   "Theater": [],
//   "Writing": []
// }


// const studentSorter = {
//   showcaseAssign: function(studentName) {
//     const student = students.find(s => s.name === studentName);
//     return showcases[student.discipline];
//   }
// };



// const roster = students.reduce((showcases, student) => {
//   const showcase = studentSorter.showcaseAssign(student.name);
//   showcase.push(student.name);
//   return showcases;
// }, showcases);

// console.log(roster);
// // const arr = [1, 2, 3, 4, 5]


// // console.log(arr.reduce(function (acc, val) {
// //     acc[val] = val * 2
// //     return acc;
// // }, {}))

// // const products = [
// //   { name: "Apple", price: 1.99, quantity: 10 },
// //   { name: "Banana", price: 0.99, quantity: 5 },
// //   { name: "Orange", price: 2.49, quantity: 3 }
// // ];
// // const totalValue = products.reduce(function (acc, product) {
// //     return {
// //         value: acc.value + (product.price * product.quantity)

// //     }
// // }, {value: 0})


// // console.log(totalValue)





















































