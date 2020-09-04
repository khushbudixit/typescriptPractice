import { Employee}  from './class'
let lname : string = "virat";
console.log("my name is "+lname);
let age: number= 45;
console.log("the age is "+age);
age =25.6;
let valid: boolean=true; //default value of boolean is undefined

let employee : any;
employee= "khush"
employee = 23;
employee= true;

let unionType : number | number[];
unionType=10;


let emplist : Employee[]=[];
emplist.push({id : 1 , name: "khush",salary: 100});
emplist.push({id : 2 , name: "pari",salary: 200});

//emplist.forEach(function(employee1) {
    //console.log(employee1.id);
   // console.log(employee1.name);
    
//});

for (const emp in emplist) {
   console.log(emp);
}
//for (const id in emplist) {
  //  if (Object.prototype.hasOwnProperty.call(emplist, id)) {
    //    const element = emplist[id];
        
    //}
//}