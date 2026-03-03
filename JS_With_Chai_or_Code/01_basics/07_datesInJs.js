//  Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);    // object


let myCreatedDate = new Date(2025, 0, 22);
console.log(myCreatedDate.toDateString());    // month 0 se start hote hai js me

let myCreatedDate2 = new Date(2025, 0, 22, 5, 3);
console.log(myCreatedDate2.toLocaleString());    // ye time bhi show kaarega

let myCreatedDate3 = new Date("2025-01-11");
console.log(myCreatedDate3.toDateString());    

let myCreatedDate4 = new Date("01-11-2025");
console.log(myCreatedDate4.toLocaleString());    // month 0 se start hote hai js me


let myTimeStamp = Date.now()     // current details batiyega
console.log(myTimeStamp);
console.log(myCreatedDate4.getTime());       // current time in sec
console.log(Math.floor(Date.now() / 1000));



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);   // month batiyega
console.log(newDate.getDate());   // date batiyega



newDate.toLocaleString('default', {
  weekday : "long",
  timeZone : ""
})       // iske andar jo tum define karoge wo object define karoge jiss se app iske sath bahut kuch kr sakte ho
