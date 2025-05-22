// console.log('hello');

// window.alert('Hello!');

// document.getElementById("myH1").textContent = 'Hello';
// we use let over here to define varibales and their values assigned .

//     let age = 23;
// console.log('You are ${age} years old');// use ${varibale-name} to print anything.

// let x;
// x = window.prompt('Whats your age'); // takes user input . Always takes string input .
// console.log(x);

// // Number() , String() and Boolean() is used to convert to int (numbers) , strings and boolean respectively.

// let r = Number(Math.random());
// console.log(r);

// checked = property that determines the checked state of an html checkbox or radio button element

// let y = document.getElementById(y);
// if (y.checked) {
//     console('yes it is checked')
// }

// let x = "1234567890";
// x = x.padStart(15, "0");// 000001234567890 . add 5 zeros at the start of string.
// console.log(x);

// x = x.slice(0, 5); //12345 . same as substring.
// x = x.slice(-1); // index starts from end . i.e. from 9 and print 0

// == -> comapres if values are equal
//     === -> comapres if values & data types are equal

// function add(x, y) {
//     let result = x + y;
//     return result;
// }

// let ans = add(4, 6);
// console.log(ans);

// let x = [5, 7, 9];
// console.log(x[1]);
// x.push(10);//adds 10 at the last
// x.pop();//removes the last element.
// x.unshift(2);//adds 2 at the beginning of the array.

// for (let i of x) {
//     console.log(i);
// }

// //spread operator(...) = allows an iterable such as an array or string to be expanded into seperate elements(unpacks the elements).
// let num = [1, 2, 3, 4, 5]; so it will be divided into anothers arrays like['1', '2', '3', '4', '5']
// let max = Math.max(...num);
// let min = Math.min(...num);
// console.log(max, min);

// s = "ABHI"
// sp = [...s] // ['A','B','H','I'].

// rest(...rest) = bundles seperate elements into an arrays.opp pf spread.
// function sum(...num) {
//     let ans = 0;
//     for (i of num) {
//         ans += i;
//     }
//     return ans;
// }

// const answer = sum(1, 3, 4, 6, 7);
// console.log(answer);

// callback = function that is passed as an argument to another function, and is executed after the completion of some operation
// for eg : if we need to display sum result only after getting the vaalues and adding it, we can use it and tell callback to display data when added.
// function sum(callback, x, y) {
//     let r = x + y;
//     callback(r);
// }
// function displayR(r) {
//     console.log(r);
// }
// sum(displayR, 4, 8);

// .Map()= accepts a callback and appiles that function to each element of an array and then return a new arrays
// let x=[1,2,3,4,5];
// let r=x.map(square);//so map will call square function and will splly same function to each element of x array and  give its sqaure in a new arrays 
// console.log(r);

// function square(num){
//     return num*num;
// }

// .filter = creates a new array by filtering a new arrays
// let x=[1,2,3,4,5];
// let r=x.filter(isEven);//so map will call square function and will splly same function to each element of x array and  give its sqaure in a new arrays 
// console.log(r);

// function isEven(num){
//    if (num%2==0)
//     return true;
//     else
//     return false;
// }

// .reduce = reduce the element of an Array to a single value

// let num=[1,2,3,4,5];
// let result=num.reduce(sum);//so map will call square function and will splly same function to each element of x array and  give its sqaure in a new arrays 
// console.log(result);

// function sum(result,number){ // here x will behave like last element and y will behave like next element .
//     return result+number; //case1: 1+2=3 , case2:3+2=5 and so on 
// }

// let num=[1,2,3,4,5];
// let result=num.map(function(element)
// {
//         return Math.pow(element,2);
//  });//basically we are passing function as a argument of a map function. 
// console.log(result);

// Arrow function : (parameters) => some code 
// const hello = (x,y) => {console.log('Hello ${x}')
//                         console.log('You are ${y} years old')};

// hello("Abhi",24);

// const person = {
//     fname:"abhishek",
//     lname:"Kumar",
//     age:24,
//     isEmployeed:true,
//     sayHello: ()=> console.log("Hi!there"),
// }
// console.log(person.fname);
// console.log(person.sayHello());

// this : doesn't work with arrow func.
// const person = {
//     fname:"abhishek",
//     lname:"Kumar",
//     age:24,
//     isEmployeed:true,
//     sayHello: function(){console.log('Hi!there ${this.fname}')},
// }
// console.log(person.fname);
// console.log(person.sayHello());

// constructors : we can use constructor keyword too to define it 
// function person(first, age, eye) {
//   this.name = first;
//   this.age = age;
//   this.eye = eye;
// }
// const p1 = new person("abhi",24,"black");
// console.log(p1.name);

// classes : Use the keyword class to create a class.
// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   displayCar(){
//     console.log('name and year of car : ${name} of ${year}');
//   }
// }

// const myCar1 = new Car("Ford", 2014);
// const myCar2 = new Car("Audi", 2019);

// myCar1.displayCar();

// static : Static class methods are defined on the class itself. If class name is person , then we can access static lass /varibles using class anme only . eg. person.static_class or person.static_var
// class Car {
//   constructor(name) {
//     this.name = name;
//   }
//   static hello(x) {
//     return "Hello!!" + x.name;
//   }
// }

// const obj = new Car("Ford");
// obj.hello;// this will give error as hello is a static methofd , we need to acess it using class
// console.log(Car.hello(obj));

// super():The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return 'I have a ' + this.carname;
//   }
// }

// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ', it is a ' + this.model;
//   }
// }

// class date extends Car {
//   constructor(brand, year) {
//     super(brand);
//     this.year = year;
//   }
//   whatYear() {
//     return this.present() + ', it is a ' + this.year + ' model car';
//   }
// }

// obj = new date("Ford", 2014);
// console.log(obj.whatYear());

// setter and getter function : set ang get keyword is used . _varname is used to declare private varibale name
// class R {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     get a() {
//         return this.width * this.height;
//     }

//     set a(value) {
//         console.log("Area cannot be set directly.");
//     }
// }

// const rect = new R(10, 5);
// console.log(rect.a);
// rect.a = 60;

// // with private propery _balance
// class B {
//     _balance; // Private property

//     constructor(balance) {
//         this._balance = balance;
//     }

//     get balance() {
//         return this._balance;
//     }

//     set balance(amount) {
//         if (amount < 0) {
//             console.log("Balance cannot be negative!");
//         } else {
//             this._balance = amount;
//         }
//     }
// }

// const acc = new B(1000);
// console.log(acc.balance);
// acc.balance = -500;  // "Balance cannot be negative!"

// destructuring = extract values from arrays and objects and then assign them to varibales in a convient way
                    // [] - for array destructuring
                    // {} - for object destructuring

//let x=1;
// let y=2;
// [x,y]=[y,x];
// console.log(x,y);

// let a=[15,25,67,89,78];
// [a[0],a[4]] = [a[4],a[0]];
// console.log(a);

// const person ={
//     fname:"ABhi",
//     lname:"Kumar",
//     age:24,
// }

// const person2 ={
//     fname:"Aaryan",
//     lname:"Kumar",
//     age:20,
//     job:true,
// }

// const {fname,lname,age,job=false}=person;
// console.log(fname,lname,age);

// nested objects:
// const person ={
//     fname:"Abhi",
//     lname:"Kumar",
//     age:24,
//     address : {
//         street : "rajiv nagar",
//         city : "Patna",
//         state: "Bihar",
//     }
// }
// console.log(person.fname);
// console.log(person.lname);
// console.log(person.age);
// console.log(person.address.state);


// .sort = sort elements in lexicographic order 
//  let a=[3,10,6,8,1,9,5];
//  a.sort((a,b) => a-b);//sort in icreasing order
//  a.sort((a,b) => b-a);//sort in revsrse order
//  console.log(a);

// synchronous = executes line by line consecutively in a sequential manner . Code that wait for an opeartion to complete

// asynchronous = allow multiple operation to be perfomed simultaneously . eg- I/O operation , network requests , fetching data )
                  //handles with : callbacks , promises , Async/Await

// setTimeout(() => console.log("Task 1"),3000);

// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");

//DOM = The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web. 
        // the DOM represents an HTML document in memory and how to use APIs to create web content and applications.

// const x = document.getElementById("section1");
// console.log(x);

// const x = document.getElementsByClassName("container")
// console.log(x);

// const x = document.getElementsByTagName("h1");
// console.log(x);

// const x = document.querySelector(.container);// gives first element or null
// console.log(x);

// const x = document.querySelectorAll(.container);// gives nodelist of all first element
// console.log(x);

// const p = document.getElementById("myP");

// function changecolor(event){
//     event.target.style.backgroundVolor = "tomato";
// }
// p.addEventListener("click",changecolor);

// Nodelist = static collection of html elements by (id,class,element)
            // Can be created by using QuerySelectorAll()
            // Silimar to array bit doesn't have map , filter, reduce.
            // It wont update automatically reflect changes 

// let buttons = document.querySelectorAll(".mybtns");
// buttons.forEach(button =>{
//     button.style.backgroundColor="green";
//     button.textContent+="i";
// })

// buttons.forEach(button =>{
//     button.addEventListner("mouseover",event => {
//         event.textContent+='n';
//     })
// })

// add an Element
// const newButton = document.createElement("button");
// newButton.textContent="Button 5";
// newButton.classList="mybtns";
// document.body.appendChild(newButton);
// buttons = document.querySelectorAll(".mybtns");//have to explicity add same class as others as to be added into nodelist.
// console.log(buttons);

//classList = it is used to interact with an element's list of classes .
// we can add / remove etc using this . Ig we have to addd hover or enbaled class to js , we ca use classlist element to add here direclty .

// let buttons = document.querySelectorAll(".mybtns");
// buttons.addEventListner("mouseover" ,event =>{
//     event.target.classList.toggle("hover");
// })
// or we can directly add using classlist prop
// let buttons = document.querySelectorAll(".mybtns");
// buttons.forEach(button =>{
//     button.classList.add("enabled");
// })

// callback hell = situation in js where callbacks are nested within other callbacks to the degree where the code is difficult to read.
                //    Old patterns to handle asynnchronous functions.
                //    Uses promises + async/await to avoid callback Hell.

//Promise = an obj. that manges asynchronous operations. Wrap a Promise obj. around {asynchronous code}
//          "I promise to return a value " . PENDING -> RESOLVED or REJECTED 
//           new Promise ((resolve,reject) => {asynchronous code})

/*
function fetchData() {
    //commenting to handle callback hell and return promise obj.
    // setTimeout(() =>{
    //     console.log('Data fetched');
    //     callback();
    // },1500);   

    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const datafetched = true;
            if(datafetched){
                resolve('Data fetched');
            }
            else{
                reject("Data not fetched");
            }
        
    },1500);  
    })

}

function processData() {
    // setTimeout(() =>{
    //     console.log('Data processed');
    //     callback();
    // },2500);  
 return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const dataprocessed = true;
            if(dataprocessed){
                resolve('Data processed');
            }
            else{
                reject("Data not processed");
            }
        
    },2500);  
    })
}

function displayData() {
//    setTimeout(() =>{
//         console.log('Data displayed');
//         callback();
//     },500);  

     return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const datadisplayed = true;
            if(datadisplayed){
                resolve('Data displayed');
            }
            else{
                reject("Data not displayed");
            }
        
    },1500);  
    })
}

// Callback Hell 
// fetchData(() => {
//     processData(() =>{
//         displayData(() => console.log("All done!"));
//     });
// });

// fetchData().then(value => console.log(value));
// processData().then(value => console.log(value));
// displayData().then(value => console.log(value));

// or we will use method chaining to call above function and handle callback hell.
fetchData().then(value => {console.log(value); return processData()})
            .then(value => {console.log(value); return displayData()})
            .then(value => {console.log(value); console.log("All done!")})
            .catch(error => console.error(error));
*/

//  Async = makes a function return a promise.
//  Await = makes an async func. wait for a promise.
//  Allows uh to write asynchronous code in synchronous manner.
//  async doesn't have resolve or reject parametrs and everything after await is placed in an event queue.

/*
function fetchData() { 

    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const datafetched = true;
            if(datafetched){
                resolve('Data fetched');
            }
            else{
                reject("Data not fetched");
            }
        
    },1500);  
    })

}

function processData() {
 return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const dataprocessed = true;
            if(dataprocessed){
                resolve('Data processed');
            }
            else{
                reject("Data not processed");
            }
        
    },2500);  
    })
}

function displayData() {

     return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const datadisplayed = true;
            if(datadisplayed){
                resolve('Data displayed');
            }
            else{
                reject("Data not displayed");
            }
        
    },1500);  
    })
}
// commenting as we will introduce a async function in which we will add code in synchronous manner .
// fetchData().then(value => {console.log(value); return processData()})
//             .then(value => {console.log(value); return displayData()})
//             .then(value => {console.log(value); console.log("All done!")})
//             .catch(error => console.error(error));

async function doThings() {
    const fetchDataRslt = await fetchData();
    console.log(fetchDataRslt);

     const processDataRslt = await fetchData();
    console.log(processDataRslt);

     const displayDataRslt = await fetchData();
    console.log(displayDataRslt);

    console.log("All done !");
}

doThings();
*/

// JSON = (JavaScript Object Notaation) data-interchange fromat.
            // Used for exchanging data b/w server and a web application.
            // JSON file as an obj. ({key:value}) or an array ([val1,val2,va3])
            // JSON.stringify() = converts a JS obj. to a JSON string.
            // JSON.parse() = converts a JSON string to a JS object.

// const names = ["Abhi","Aaryan","Ayush","Saloni"];
// const jsonString = JSON.stringify(names);
// console.log(jsonString);

// const people = [{
//     "name": "Abhi",
//     "age" : 30,
//     "isEmployed" : true,
//     "hobbies" : ["cricket","bgmi","badmintion"]
// },

// {
//     "name": "Aaryan",
//     "age" : 20,
//     "isEmployed" : true,
//     "hobbies" : ["cri","cod","tennis"]
// },

// {
//     "name": "Saloni",
//     "age" : 25,
//     "isEmployed" : true,
//     "hobbies" : ["shop","candy","kitchen"]
// }
// ]
// const jsonString = JSON.stringify(people);
// console.log(jsonString);

// const person = {
//     "name": "Abhi",
//     "age" : 30,
//     "isEmployed" : true,
//     "hobbies" : ["cricket","bgmi","badmintion"]};
// const jsonString = JSON.stringify(person);
// console.log(jsonString);

// const jsonNames ='["Abhi","Aaryan","Ayush","Saloni"]';
// const json = JSON.parse(jsonNames);
// console.log(json);

//Fetch = The fetch() function in JavaScript is a modern API for making network requests.
        // It can fetch various resources like JSON data, HTML, images, and more from a server. 
// basic syntax = fetch(url, options)
                // .then(response => response.json())
                // .then(data => console.log(data))
                // .catch(error => console.error('Error:', error));

//to fetch any json file .it return a promise.
// fetch("people.json")
//     .then(response => response.json())
//     .then(value => console.log(value))

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then(response => (console.log(response)))
      .catch(error => console.log(error));