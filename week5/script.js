const myName = "Cecile";
const uni = "RMIT";
const myStudentRecord = {
  name: "Cecile",
  id: 12345,
  city: "Melbourne",
};
console.log(myStudentRecord.name);
const isItEvening = true;
const isItRaining = false;
const myAddress = `mit Uiversity 124
latrobe st
melbourne is ${myName}'s address`;
console.log(myAddress);
const myDetails = `hello, I am ${myName}, I work for ${uni}`;
console.log(myDetails);
const student1 = "Iris";
const student2 = "Sarah";
const student3 = "Jack";
const student4 = "Leona";

let students = ["Malleus", "Vil", "Ruggie", "Leona", "Jack"];
// console.log("hello", students[0]);
// console.log("hello", students[1]);
console.log("array size", students.length);
for (let i = 0; i < students.length; i++) {
  console.log("value of i", i);
  console.log("hello", students[i]);
}
// let ids = [12, 13, 14, 15];
// console.log(ids[2]);
// let score = 58;
// if (score > 80) {
//   console.log("hey you got HD");
// } else if (score <= 80 && score > 70) {
//   console.log("hey you D");
// } else if (score <= 70 && score > 50) {
//   console.log("hey u passed");
// } else if (score < 50) {
//   console.log("go die");
// }
let shoppingCart = [
  { name: "T-shirt", price: 20 },
  { name: "Sneakers", price: 80 },
  { name: "jeans", price: 50 },
  { name: "Backpack", price: 30 },
];
console.log("shopping array size", shoppingCart.length);
let cartTotal = 0;
for (let i = 0; i < shoppingCart.length; i++) {
  cartTotal = cartTotal + shoppingCart[i].price;
  console.log("total so far", cartTotal);
}
