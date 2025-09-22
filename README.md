
#### Create a README file to answer the following question-


#### 1) What is the difference between var, let, and const?

Answer 1: var,let and const these three are variables. Which serve different purpose. We don't use var that much nowadays, but if a variable initialized inside a function through var, then it can be accessed throughout the whole function, regardless of if or for blocks.

const variable doesn't do that, it's fixed in that block. Also const only takes fixed data, the data given to const variable can not be overwritten.

let also does not work outside it's block, but it's data can be changed and overwritten.


#### 2) What is the difference between map(), forEach(), and filter()? 

Answer 2: These three works with non-primitive data, and works with every single data of that array or object so do not need for loop to access every single element of non-primitive data.  If I take a array as an example,

 map() works with every data in an array and does different tasks, then returns the output as an array.

 forEach() also works with the every single data then does different tasks but does not return anything, so it is used for short and easy tasks like multiplying each data or addition etc.

 filter() works on every data in an array, but it searches data in that array, if found the data as the condition ,then it gives all the elements that suits the condition that it's given.


#### 3) What are arrow functions in ES6?
 
 Answer 3: Arrow functions in ES6 are also functions, just written in a different way. To write it, it doesn't need function key word, it can declared like a variable. then a first bracket is used after (=) to take parameter, then uses an arrow to start the function. that's why it's called arrow function.

 example: const getValue = () =>{
        console.log("value is: 30");
 }
 getValue();


#### 4) How does destructuring assignment work in ES6?

 Answer 4: Destructuring in ES6 is a method, to use the key in an object used as variables.
    example: const person = {name: "Ali", age: 30, job:"Teacher"}

     const {name,age,job} = person;

     console.log(name);   //output: Ali
         so the keys of the object can be used as variables.


#### 5) Explain template literals in ES6. How are they different from string concatenation?

 Answer 5: template literals in ES6 is vastly popular because of it's use case. it is used as (``), other than ("") this. 
 It is used in many cases, like multiple line string can be written inside it, the it can dynamically take values inside the string, that string concatenation can not do.

 example:
        const value = 30;
        console.log("The value:",value,"is correct")  //string concatenation
        console.log(`the value: ${value} is correct`) //template literals




