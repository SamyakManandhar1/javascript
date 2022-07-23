//ARRAYS 
//Creating arrays

const numbers = [11, 10, 55, 65, 23, 7]
const mixed = [22, 'apple', true, undefined, null, new Date()];

let val;

// check if it is and array and length of array
val = numbers.length;
val = Array.isArray(numbers);

//get single value
val = numbers[0];

//insert
numbers[3] = 100;

//add and remove value at end
numbers.push(111);
numbers.pop();

//add and remove value at first
numbers.unshift(52)
numbers.unshift(42)
// numbers.shift();

//Splice
numbers.splice(2,3)


// Find
function morethan50(num){
  return num > 50;
}

val = numbers.find(morethan50);

console.log(val);
console.log(numbers);