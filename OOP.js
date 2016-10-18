/*A person class
* that has attribute
* fist and last name, bankBalance
* with prototype Employee 
* and cleaner
*
*/

//original classes

function Person(firstname,lastname,numLegs) {
   this.firstname = firstname;
   this.lastname = lastname;
   this.numLegs = numLegs;
   this.isAlive = true;
   
   //private variable
   var bankBalance = 7500;
  
  //private method
   var returnBalance = function() {
      return bankBalance;
   };
       

   this.askTeller = function() {
       return returnBalance;
   };
}

function Employee(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    this.numLegs = 2;
}

function Cleaner(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    this.status = "single";
}

// set up prototype chain
Employee.prototype = new Person();
Cleaner.prototype = new Employee();

var myCleaner = new Cleaner("Esther","Jules");

//inheritance
console.log(myCleaner.status); //should print single
console.log(myCleaner.numLegs) //should print 2
console.log(myCleaner.isAlive) //should print true 

//encapsulation
var employer = new Person('John','Smith',30);
console.log(john.returnBalance); //should be undefined since it is a private variable
var myBalanceMethod = john.askTeller();
var myBalance = myBalanceMethod();
console.log(myBalance); //should print 7500
