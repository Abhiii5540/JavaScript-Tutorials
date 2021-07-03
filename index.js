// Ways to print in JavaScript

//  console.log("hello world");
// alert("hii , there");
// document.write("I have wriiten a document")

// JavaScript Console API

// console.log("hello world");
// console.warn("Warning ahead");
// console.error("Error ahead"); 

// JavaScript Variables 
var number1 = 56;
var number2 = 67;
// console.log(number1 + number2);

// Data Types in JavaScript

// Numbers
var num1 = 100;
var num2 = 345;

// Strings
var str1 = "Hello everyone";
var str2 = "My name is abhishek";
// console.log(str1);


// Objects
var marks = {
    abhiii: 89,
    ravi: 67,
    aaryan: 98,
}
// console.log(marks);

// Booleans
var a = true;
var b = false;
// console.log(a, b);

// Undefined ----- when no value is assign to variable or assigned ad undefined
// var und=undefined;
var und;
// console.log(und)

// Null values ----- when a variable is assigned null to it
var a = null;
// console.log(a)

/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/

var arr = [1, 2.56, "Abhii", true, 5];
// console.log(arr)
// console.log(arr[2])

// Operators in JavaScript

// ----Arithmetic Operators-----
var a = 100;
var b = 10;
// console.log("The value of a + b is ", a+b);
// console.log("The value of a - b is ", a-b);
// console.log("The value of a * b is ", a*b);
// console.log("The value of a / b is ", a/b);

// Assignment Operators
var c = b;
// c += 2;
// c -= 2; // c = c - 2;
// c *= 2;
// c /= 2;
// console.log(c);

// Comparison Operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operators

// Logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// Logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// Logical not
// console.log(!false);
// console.log(!true);

// Function in JavaScript

function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
// DRY = Do not repeat yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1, c2);

// Conditionals in JavaScript
/*
var age = 41;
// Single if statement
if(age > 18){
    console.log('You can drink rasna water');
}
// if - else statement
// if(age > 18){
//     console.log('You can drink rasna water');
// }
// else{
//     console.log('You cannot drink rasna water');
// }

age = 25;
// if-else Ladder
if(age > 32){
    console.log("You are not a kid");
}
else if(age >26){
    console.log("Bachhe nahi rahe");
}
else if(age >22){
    console.log("Yes Bachhe nahi rahe");
}
else if(age >18){
    console.log("18 Bachhe nahi rahe");
}
else{
    console.log("Bachhe rahe");
}
console.log("End of ladder");
*/

// Loops in JavaScript 
// ------------For loop ----------

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }

// For-each loop
// arr.forEach(function(element){
//     console.log(element);
// })
// const ac = 0;
// ac++;
// ac = ac +1;

// while Loop 
// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }

// Do-while loop 
// do{
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

// Methods in array 
let myArr = ["Girl", "Boy", 34, null, true];
// console.log(myArr.length);
// // myArr.pop();
// myArr.push("Abhiii")
//  myArr.shift()
// const newLen = myArr.unshift("Abhiii")
// console.log(newLen);
// console.log(myArr);

// String Methods in JavaScript
let str3 = "Hello everyone , Abhishek here";
// console.log(str3.length)
// console.log(str3.indexOf("good"))
// console.log(str3.lastIndexOf("good"))

// console.log(str3.slice(1,4))
d = str3.replace("Abhishek", "Aaryan");
// d = d.replace("good", "bad");
// console.log(d, str3)

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);
let elemCls = document.getElementsByClassName("container");
// console.log(elemCls);
// elemClass[0].style.background = "yellow";
elemCls[0].classList.add("bg-primary")
elemCls[0].classList.add("text-success")

// console.log(elem.innerHTML);
// console.log(elem.innerText); 

// console.log(elemCls[0].innerHTML);
// console.log(elemCls[0].innerText); 
tn = document.getElementsByTagName('div')
//   console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = "Hii everyone";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "hello there , bold here !!!";
tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); ---> removes an element

// Selecting using Query
// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)

// function clicked(){
//     console.log('The button was clicked')
// }
// window.onload = function(){
//     console.log('The document was loaded')
// }

// Events in JavaScript
// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Clicked on Container")
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse on Container")
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of Container");
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Mouse down when clicked on Container");
// })

// Arrow Functions --- (=> can be used instead of writing funtion ... It can be used to insert a function in between)
// function summ(a, b){
//     return a+b;
// }
summ = (a, b) => {
    return a + b;
}

logKaro = () => {
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval executed</b>"
    console.log("Hello,overhere !!!!")
}
// SetTimeout and setinterval
//  clr = setTimeout(logKaro, 2000);
//  clr = setInterval(logKaro, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// JavaScript localStorage
// localStorage.setItem('name', 'Abhishek') 
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();


// Template literals - Backticks
a = 34;
b = 67;
console.log(`this is my ${a} + ${b}`)