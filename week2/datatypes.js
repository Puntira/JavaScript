const people = ["Aaron","Mel","John"];
const one =1;
const str ="Hello World";
const b =true;
const empolyee ={
    firstName: "Anirach",
    lastName: "Mingkhean",

};
function sayHello(person){
    console.log("Hello "+ person.firstName);
}

console.log(typeof people);
console.log(typeof sayHello)
console.log(empolyee instanceof Array);
sayHello(empolyee);

