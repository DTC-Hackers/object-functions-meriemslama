// ****************************objects************************
// 1.Fix the attempts to access values in the person object:

var key = "name";
var person = {
  name: "Alyssa P. Hacker",
  age: 26,
  hometown: "somewhere",
};
person['age']; // => 26
person[key]; // => "Alyssa P. Hacker"
console.log(person['age'])
console.log(person[key])
//2.Write a function fullName that takes a person object as an argument,
// and returns that person's full name as a string. By person object, we mean 
//an object that has the structure of the object you created to represent yourself
// above, for example:
var alyssa = {
  name: {
    first: "Alyssa",
    middle: "P.",
    last: "Hacker",
  },
  age: 26,
};
var john = {
  name: {
    first: "john",
    last: "doe",
  },
  
};

function fullName(person) {
  if (!(person.name.middle in person))
      return person.name.first +" "+person.name.last
  else 
  return person.name.first +" "+person.name.middle+" "+person.name.last  
  // TODO: your code here
}

//console.log (fullName(john)); // => "Alyssa P. Hacker"

//   Your fullName function should work correctly regardless of whether or 
//not the person has a middle name -- if it doesn't produce the output shown 
//above when given the object {name: {first: "John", last: "Doe"}}, fix it so that 
//it does.

//3. We often deal with arrays of objects; below is an example of an array of 
//objects, where each object represents a person:
var people = [
  { name: { first: "Alyssa", middle: "P.", last: "Hacker" }, age: 26 },
  { name: { first: "Ben", last: "Bitdiddle" }, age: 34 },
  { name: { first: "Eva", middle: "Lu", last: "Ator" }, age: 40 },
  { name: { first: "Lem", middle: "E.", last: "Tweakit" }, age: 45 },
  { name: { first: "Louis", last: "Reasoner" }, age: 21 },
 
];
//i.   Add the object representing yourself to this array of people 
//(if your name key does not have the same "shape" as the ones above, make sure 
//you change it to look like these).
let meriem= { name: { first: "Meriem", last: "Slama" }, age: 20 }
people.push(meriem)
console.log(people)
// ii   .Write a function that, when passed an array of people (person objects) 
//as an argument, returns an array of their full names. Can you make use of your 
//fullName function here?//yes
function ArrayFullNames (people){
  var FullNames=[]
   for(var i=0;i<people.length ;i++){
    FullNames.push(fullName(people[i]))
    
   }
  return (FullNames)
}
console.log(ArrayFullNames(people))
// ii.   Write a function that finds the average age of the people array.
function AvregeOfArrayPerson(people){
  let avrege=0
  let sum=0
  for(var i=0;i<people.length ;i++){
    sum=sum+people[i]['age']
    
   }
   avrege=sum/people.length
   return avrege
}
console.log(AvregeOfArrayPerson(people))
// 4.Write a function countWords that, when given a string as an argument, 
//returns an object where keys are the words in the string, and values are the 
//number of occurrences of that word within the string:
function occurence(mot,s){

   return s.split(mot).length - 1
}

function countWords(s) {
  let obj={}
  let mots=[]
  let occ=0
  
  mots=s.split(" ")
  for(let i=0;i<mots.length;i++){
     occ=occurence(mots[i],s)
     obj[mots[i]]=occ
     occ=0
  }
  
return obj
  
}
console.log(countWords("hello hello"));
//countWords("helilo hello"); // => {"hello": 2}
console.log(countWords("Hello hello")); // => {"Hello": 1, "hello": 1}
console.log(countWords("The quick brown")); // => {"The": 1, "quick": 1, "brown": 1}
//5. Write a function select that accepts two arguments: an object and an array.
// The array should contain names of keys that will be selected from the object:
function select(obj, keys) {
  let obj1={}
   for(let i=0;i<keys.length;i++){
     if(keys[i] in obj)
      obj1[keys[i]]=obj[keys[i]];
      
   }
  return obj1
}

//console.log(select({ a: 1, b: 2, c: 3 }, ["a"])); // => {a: 1}
//console.log(select({ a: 1, b: 2, c: 3 }, ["a", "c"])); // => {a: 1, c: 3}
//console.log(select({ a: 1, b: 2, c: 3 }, ["a", "c", "d"])); // => {a: 1, c: 3}
// exercise N°3
// Write a function sumBy that accepts two arguments: an array of numbers and a 
//function. The function will be invoked upon each element in the array, and its 
//result will be used to compute the sum.
//
function square(num){
  return num*num
}
function cube(num){
  return num*num*num
}
function sumBy(numbers, f) {
  let s=0
  for(let i=0;i<numbers.length;i++)
  {
     s=s+f(numbers[i])
  }
  return s
}
let numbers = [1, 2, 3, 4];
console.log(sumBy(numbers, square)); // => 30
console.log(sumBy(numbers, cube)); // => 100
console.log(sumBy(numbers, function (number) {
  return number * 4;
}));
// => 40

//   exercise N°4
// Write a function doubleAll that takes an array of numbers as a parameter and 
//returns an array of all of those numbers doubled:
function doubleAll(numbers) {
 let double=[]
  for(let i=0;i<numbers.length;i++)
  {
     double.push(numbers[i]*2)
  }
  return double
}
console.log(doubleAll([1, 3, 10, 4, 7])); // => [2, 6, 20, 8, 14]
//   exercise N°5
// Write a function uppercaseAll that takes an array of strings as a parameter,
// and returns an array of all of those strings, but transformed to upper case. 
//You can use toUpperCase to convert a string to upper case.
"hello, world".toUpperCase(); // => "HELLO, WORLD"
function uppercaseAll(string){
  let s=[]
  for(let i=0;i<string.length;i++)
  {
     s.push(string[i].toUpperCase())
  }
  return s
}
let s=["hello, world"]
console.log(uppercaseAll(s))
//  exercise N°6
// 1.Write a function called evens that takes an array of numbers as a parameter, 
//and returns an array of only the even numbers in the parameter.
function evens(numbers){
  let even=[]
  for(let i=0;i<numbers.length;i++)
  {
     if(numbers[i]%2==0)
       even.push(numbers[i])
  }
  return even
}
let m=[1,2,3,4,5,6]
console.log(evens(m))

// 2.Write a function called multiplesOfThree that takes an array of numbers as 
//a parameter, and returns an array of only the numbers that are multiples of three.
function multiplesOfThree(numbers){
  let multiple=[]
  for(let i=0;i<numbers.length;i++)
  {
     if(numbers[i]%3==0)
       multiple.push(numbers[i])
  }
  return multiple
}
let f=[6,3,9,8,5]
console.log(multiplesOfThree(f))

// 3.Write a function called positives that takes an array of numbers as a 
//parameter, and returns an array of only the numbers that are positive.
function positives(numbers){
  let positive=[]
  for(let i=0;i<numbers.length;i++)
  {
     if(numbers[i]>=0)
       positive.push(numbers[i])
  }
  return positive
}
let p=[1,5,-5,0,-9]
console.log(positives(p))

// 4.Write a function called evenLength that takes an array of strings and
// returns an array of only the strings with an even length.
function evenLength(strings){
  let evenLength=[]
  for(let i=0;i<strings.length;i++)
  {
     if(strings[i].length %2==0)
     evenLength.push(strings[i])
  }
  return evenLength
}
let str=["hello","meriem","slama",]
console.log(evenLength(str))

// 5.At this point, you should notice a pattern; write a function called filter 
//that takes two parameters: an array and a function that, when invoked with an 
//argument, will return true or false. filter should return a new array of only the 
//elements for which the function returns true:


function filter(array, f) {
  let filter=[]
  for(let i=0;i<array.length;i++){
  if(f(array[i])===true){
    filter.push(array[i])
  }
}
return filter
}
console.log(filter([1, 2, 3, 4], function (x) {
  return x % 2 === 0; // x is even?
})); // => [2, 4]
//   exercise N°7
// Use filter to write/rewrite:

// odds

// positives
console.log(filter([1, 2, -3, 4], function (x) {
  return x >= 0; 
}));
// negatives
console.log(filter([1, 2, -3, 4], function (x) {
  return x < 0; 
}));
// evenLength
console.log(filter(["hello","meriem","slama"], function (x) {
  return x.length %2 ==0; 
}));
// largerThanSix (given an array of numbers, returns those larger than 6)
console.log(filter([1, 8, -3, 7], function (x) {
  return x >6 ; 
}));
// exercise N°7
// Using filter, write a function startsWithChar that accepts two parameters: 
//an array of strings, and a character (e.g. "a"), and returns an array of only 
//the strings that start with that character:
function startsWithChar(strings, character) {
  return filter(strings, function (x) {
    return x[0]==character  
  })
}
var words = "the quick brown fox jumps over the lazy dog".split(" ");
console.log(startsWithChar(words, "q")); // => ["quick"]
console.log(startsWithChar(words, "t")); // => ["the", "the"]
let string=["hello","meriem","slama"]
console.log(startsWithChar(string, "m"))
