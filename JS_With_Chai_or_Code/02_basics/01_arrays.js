//  array

const myArr = [0, 1, 2, 3, 4, 5];
const myHerows = ["marvel", "DC"];

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0]);
console.log(myArr2[2]);



// Array methods
myArr.push(6);  //add in last of array
myArr.pop();      // remove last value of array
myArr.unshift(9);      //  add in the starting of array  
myArr.shift();      //  remove start value of array


console.log(myArr.includes(9));   // ye value include hai ya nii and output will be show in booleann value
console.log(myArr.indexOf(3));   //  3 mera 3rd index pr hai ye bata raha hai or agar jo value exist nii hui to fir output me -1 milega

const newArr = myArr.join();   // ye hamare array ko string me convert kr deta hai or iska type bhhi string hai 
console.log(myArr);
console.log(newArr);




// slice, splice

console.log("A pr hamari original array hai -> ", myArr);

const myn1 = myArr.slice(1, 3)  // include 1 to 2 not 3
console.log(myn1);
console.log("B pr hm slice use kr rahe hai ->  ", myArr);



const myn2 = myArr.splice(1, 3);  // ye original array me se exact value remove kr deta hai mltb 1 se 3 tk ki value remove kr dega or yaha pr mai index ki bat nii kr raha 
console.log("C pr hm splise use kr rahe hai ->  ", myArr); 
console.log(myn2);
