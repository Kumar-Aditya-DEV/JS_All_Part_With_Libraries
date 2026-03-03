const name  = "Aditya "
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hellow my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hiteshhc')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName.__proto__);        // ye empty object dikh raha hai but hai nii


console.log(gameName.length);
console.log(gameName.toUpperCase());      // original value change ni hui hai
console.log(gameName.charAt(2));    // kon si posn pr hai
console.log(gameName.indexOf('t'));   // ye bataiega t kon s numer pr hai
const newString = gameName.substring(0,4);
console.log(newString);     // 0 to 3 k value pirnt karega 

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);


const newStringOne = "  aditya  ";
console.log(newString);
console.log(newString.trim());      //remove spaces


const url = "https://aditya.com/aditya%20kumar"
url.replace("%20", "-");
console.log(url);

console.log(url.includes("hii"));      // return bool value

console.log(gameName.split("-"));


