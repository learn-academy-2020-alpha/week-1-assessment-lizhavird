// ASSESSMENT 1: INTRO TO JAVASCRIPT TESTING WITH JEST
// Coding practical questions

// To set up the testing environment run the following commands in terminal
// $ npm -g install yarn
// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.
//was unable to run jest on my windows--none of tests have been tested 
describe("addThemup", () => {
  test ("takes two numbers(num1 & num2) and returns the sum of num1 & num2", () => {
    expect(addThemUp(num1,num2)).toEqual(num1+num2)
  })
})

// --------------------1b) See the test fail. THEN write the code to make the test pass.

var num1 =5
var num2 =6
var addThemup= () => {
  return [num1 + num2]
}

console.log(addThemup())



// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.
//The area of a triange is the base times the height divided by two
describe("triangleArea", () => {
  test ("takes the base & height of a triangle and returns the area.", () => {
    expect(triangleArea)).toEqual(b*h/2)
  })
})



// --------------------2b) See the test fail. THEN write the code to make the test pass.

var base=5
var height =5
var triangleArea= () => {
  return base * height / 2
}

console.log(triangleArea())
