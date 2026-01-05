// Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString()); // full date and time// toString is a method
console.log(myDate.toDateString()); // only date
console.log(myDate.toLocaleString()); // date and time based on locale
console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23); // year, month (0-11), date
// let myCreatedDate = new Date(2023, 0, 23, 13, 3); // year, month (0-11), date, hour, minute
let myCreatedDate = new Date("2023-01-14"); // YYYY-MM-DD
// let myCreatedDate = new Date("01-14-2023"); // MM-DD-YYYY
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();

console.log(myTimeStamp); //can be used as id in some ojbects
console.log(myCreatedDate.getTime()); //used for comparison between dates

// console.log(new Date(1673654400000).toDateString());//converting timestamp to date
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString("default", {
  weekday: "long",
});
