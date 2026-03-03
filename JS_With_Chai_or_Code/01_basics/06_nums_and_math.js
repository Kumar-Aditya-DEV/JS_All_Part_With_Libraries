const score = 400;
console.log(score);


const balance = new Number(100)
console.log(balance);


console.log(balance.toString());     // no. convert into string 
console.log(balance.toFixed(2));        // decimal ke bad kitni value rahegi

const otherNumber = 23.89231
console.log(otherNumber.toPrecision(3));  // gives round off value


const hundreds = 1000000
console.log(hundreds.toLocaleString());        // commas lag jate hai by international charts
console.log(hundreds.toLocaleString('en-IN'));    // indian chart


// *********************  MATHS ***************************
console.log(Math);
console.log(Math.abs(-4));       // value ko +ve bana deta hai
console.log(Math.round(4.6));      // gives 5
console.log(Math.ceil(4.6));      // gives 5
console.log(Math.floor(4.9));      // gives 4
console.log(Math.min(4, 3, 6, 8));     //gives min value   
console.log(Math.max(4, 3, 6, 8));     //gives max value   



console.log(Math.random());    // gives values betwen 0 to 1
console.log((Math.random() * 10) + 1);     // value 0 naa mile isi liyea +1 kiya
console.log(Math.floor(Math.random() * 10) + 1);    // gives round off lowest value


const min = 10;
const max = 20;
// imp hai niche wala
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

