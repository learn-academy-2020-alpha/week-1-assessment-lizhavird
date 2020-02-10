ASSESSMENT 1: INTRO TO JAVASCRIPT
Coding practical questions

Please read all questions thoroughly
Psuedo coding is highly recommended

--------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// 212 f = boiling point

var temp1 = 35
var temp2 = 350
var temp3 = 212

function testTemp1() {


  if
    (temp1 < 212) {
      return `${temp1} is below boiling point`
  }  else if
    (tempt1 ===212) {
      return `${temp1} is at boiling point`
  }
  else if(temp1> 212) {
      return `${temp1} is above boiling point`}
}
function testTemp2() {
      if
        (temp2 < 212) {
          return `${temp2} is below boiling point`
      }  else if
        (temp2 ===212) {
          return `${temp2} is at boiling point`
      }
      else if(temp2>212) {
          return `${temp2} is above boiling point`}

}

function testTemp3() {
      if
        (temp3 < 212) {
          return `${temp3} is below boiling point`
      }  else if
        (temp3 === 212) {
          return `${temp3} is at boiling point`
      }
      else if(temp3 > 212) {
          return `${temp3} is above boiling point`}

}
var temp1 = 35
var temp2 = 350
var temp3 = 212

console.log(testTemp1())
console.log(testTemp2())
console.log(testTemp3())




--------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]


const mult5 = (array) => {
  let newArr = []
  for(let i=0; i<array.length; i++){
    newArr.push(array[i] * 5)
  }
  return newArr
}

console.log(mult5(myNumbers1))






--------------------3) Create a function that multiplies each number in the array by 5 using map.
Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2].map(function(x) { return x * 5; });

console.log(myNumbers2)

--------------------4) Create a function that removes all the vowels from a string.
Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

// need help with this problem

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

var spltstring = stringWithVowels1.split('')
var spltstring2 = stringWithVowels2.split('')

removeVowels = (array) => {

  let noVowels = array.filter value (!===) "a","e","i","o","u")
  return noVowels
}
console.log(removeVowels(stringWithVowels1))


--------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
Copy and paste or rewrite the function. Use the test variables provided below.

var notAString1 = true
var notAString2 = 42




--------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


var toonimals = [
  {name: "Itchy", animal: "mouse"},
  {name: "Stimpy", animal: "cat"},
  {name: "Daffy", animal: "duck"},
  {name: "Scratchy", animal: "cat"},
  {name: "Ren", animal: "dog"},
  {name: "Felix", animal: "cat"}]


var animal = toonimals.filter(value => value.animal === "cat")
console.log(animal)

--------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
Expected output: "Itchy" "Daffy" "Ren"

// not sure how to phrase the return value

var toonimals = [
  {name: "Itchy", animal: "mouse"},
  {name: "Stimpy", animal: "cat"},
  {name: "Daffy", animal: "duck"},
  {name: "Scratchy", animal: "cat"},
  {name: "Ren", animal: "dog"},
  {name: "Felix", animal: "cat"}]

var { name, animal } = toonimals

let nonCats=toonimals.filter(val=>{
  return val.animal !=== "cat"
})

console.log(nonCats)
