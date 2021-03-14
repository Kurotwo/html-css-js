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
        age: 49
    }; //Object
    console.log("Object: " + myVar);
}

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

/*
    Conditional blocks
*/
function conditionals(number) {
    if (number > 100) {
        console.log("Number is greater than 100");
    } else if (number == 100) {
        console.log("Number is equal to 100");
    } else {
        console.log("Number is less than 100");
    }
    return number;
}

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
  
declarationDifferences();