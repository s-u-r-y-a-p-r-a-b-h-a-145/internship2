function subract1(a,b){
    return a-b
}

var subract2=function(a,b){
    return a-b
}

var subract3=(a,b)=>{
    return a-b
}

var subract4=(a,b)=>a-b

console.log(subract1(5,2))
console.log(subract2(5,2))
console.log(subract3(5,2))
console.log(subract4(5,2))

//Higher order Fuctions
function fun1(){
    
    console.log("Executing funtion1")
   
}
function fun2(a){
    a()
    console.log("Execting function2")
}
fun2(fun1)

//Fuction as Return Value

function  multiplyBy(factor){
    return function(num){
        return num*factor
    }
}

var res=multiplyBy(5)
console.log(res)        //output:[Function (anonymous)]

function multiplyBy(factor){
    return function(num){
        return num*factor
    }
}

var res=multiplyBy(5)
var finalresult=res(2)
console.log(finalresult)  

//uisng arrow functions
var multiplyBy=(factor)=>{
    return (num)=>{
        return num*factor
    }
}

var res=multiplyBy(5)
var finalresult=res(2)
console.log(finalresult)   

console.log(multiplyBy(5)(5))

//HigherOrderFunction 
var sub=(factor)=>(num)=>num-factor
console.log(sub(8)(5))

//----------------------------------------------------//Strings//-------------------------------------------------------------

var x="Tony"
console.log(x)


var x=`Tony
Sri 
abc`//multiline
console.log(x)

var firstname="Tony"
var lastname="Stark"
var fullname=${firstname} ${lastname}
console.log(fullname)

let name="John"
let age="25"

let greeting=Hello, my name is ${name} and I am ${age} years old;
console.log(greeting.length)
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.split("a"))
console.log(greeting.substring(0,5))

//Task 1
function fullname(name){
    return name
}
function countWords(str){
    var words=str.split(' ');
    return words.length
}
let name1=fullname("Mukund Vardharajan")
let name2=name1.toUpperCase().split(" ")
let Firstname=name2[0]
let lastname=name2[1]
console.log(`First Name:${Firstname} 
Last Name:${lastname}`)
console.log(countWords(name1))

 //---------------------------------------------//Arrays//-----------------------------------------------------------------

let fruits=['apple','banana','orange']
let numbers=new Array(10,20,30,40)

console.log(fruits)
console.log(numbers)
//ADD Elements

fruits.push('BlueBerry')
fruits.unshift('Grapes')
numbers.push(3)
numbers.push(5)

console.log("After Adding...")
console.log(fruits)
console.log(numbers)

//Remove Elements

fruits.pop('BlueBerry')
fruits.shift('Grapes')
numbers.pop(3)
numbers.shift(5)


console.log(fruits)
console.log(numbers)

fruits.reverse()
numbers.reverse()
console.log(fruits)
console.log(numbers)
//---------------------------------------------------------//Scope//------------------------------------------------------------------
//Global Scope

var x=10;

function testScope(){
    console.log(x);
}
console.log(x)
testScope()

//Local Scope

var x=10;

function testScope(){
    var a=20 //local Scope
    console.log('x=',x)
    console.log('a=',a)
}
console.log(x)
testScope()

//Block Scope

var x=10;

function testScope(){
    var a=20 //local Scope
    console.log('In Function x=',x)
    console.log('In function a=',a)
    if(a>10){
        let b=5
        console.log('Inside if b=',b)
    }
    //console.log('In Function   b=',b)
}
console.log(x)
testScope()

//Lexical Scope
function outer(){
    let message="Hello!";

    function inner(){
        console.log(message)
    }
    inner()
}
outer()

//Task 2


function outer(){
    var variable1=1
   console.log(variable1)
    function middle(){
        var variable2=2
        console.log(variable1)
        console.log(variable2)
            function inner(){
               
                var variable3=3
                console.log(variable1)
                console.log(variable2)
                console.log(variable3)
            }inner()
    }middle()
}
outer()

//-------------------------------------------------Hoisting-------------------------------------------------------------------
let x
console.log(x)
x=10

foo()//Function Declaration
function foo(){
    console.log("Hello World!")
}

bar()//Function Expression
var bar=function(){
    console.log("Hello World..")
}

//Reassingment
var y=20
let x=10
const x1=30

y=25
x=15
x1=32

console.log(y)
console.log(x)
console.log(x1)

console.log(true+"true")

console.log(1*false)
console.log(1==='1')

console.log('START')
setTimeout(()=>{
    console.log('inside')
} ,0)
console.log('END')
