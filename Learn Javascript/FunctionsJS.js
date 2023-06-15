console.log("This is a JS file");
// We create funcitons to do some repetative tasks
// exampple statemtn
let names = "Prabin"
let nam = "Ram"
let na = "Shyam"
let n = "Gandar"
// console.log(names + "is a good boy");
// console.log(nam + "is a good boy");
// console.log(na + "is a good boy");
// console.log(n + "is a good boy");

//Lets create a function for doing above tedious work

function GoodBoy(name){
    console.log(name + " is a good boy");
}

GoodBoy(names);
GoodBoy(nam);

//The above function dosent return anyting

function Sum3(a,b,c){
    let d = a + b + c;
    return d;
}

let sum = Sum3(1,2,3);
console.log(sum);
