/*
    Variable Types
*/
function variableTypes() {
    let myVar = 'DLSU LSCS'; // String
    console.log("String: " + myVar);

    myVar = 10; // Number 
    console.log("Number: " + myVar);

    myVar = true; // Boolean
    console.log("Boolean: " + myVar);

    myVar = ["DLSU LSCS", 1, true]; //Array
    console.log("Array: " + myVar);

    myVar = {
        name: "DLSU LSCS",
        age: 49,
        printName: function() {
            return "My name is " + this.name;
        }
    }; //Object
    console.log("Object: " + myVar);
}
// variableTypes();

/*
    Operators
*/
function operators() {
    let var1 = 10; 
    let var2 = 2; 
    console.log(var1 + var2); // 12 
    console.log(var1 - var2); // 8
    console.log(var1 * var2); // 20
    console.log(var1 / var2); // 5
    console.log(0 == '0') // True, == performs type conversion
    console.log(0 === '0') // False, === doesn't perform type conversion
}
// operators();

/*
    Conditional blocks
*/
function conditionals(score) {
    if (score >= 94) {
        return "Wooh Quatro";
    } else if (score < 94 && score >=90) {
        return "Pwede na 3.5";
    } else {
        return "Bawi nalang next time";
    }   
}
// console.log(conditionals(95));

/*

*/
function loops() {
    let arr = [1,2,3,4,5];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    let person = {
        firstName: "Vincenzo",
        lastName: "Cassano"
    }; 
    for (key in person) {
        console.log(person[key]);
    }
}
// loops();

/*
    Main difference between let and var is their scoping rules
*/
function declarationDifferences() {
    var foo = "Foo";
    let bar = "Bar";
  
    console.log(foo, bar); // Foo Bar
  
    {
      var moo = "Mooo"
      let baz = "Bazz";
      console.log(moo, baz); // Mooo Bazz
    }
  
    console.log(moo); // Mooo
    console.log(baz); // ReferenceError
}
// declarationDifferences();