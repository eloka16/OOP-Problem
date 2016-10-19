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


// Another class
function Employee(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    this.numLegs = 2;
}


// Another class
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
myCleaner.status; //should return single
myCleaner.numLegs //should return 2
myCleaner.isAlive //should return true 

//encapsulation
var employer = new Person('John','Smith',30);
john.returnBalance; //should be undefined since it is a private variable
var myBalanceMethod = john.askTeller();
var myBalance = myBalanceMethod();
myBalance; //should return 7500
