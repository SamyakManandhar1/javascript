const person = { 
  firstName: 'steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@gmail.com',
  address:{
    city:'ktm',
    state:'bagmati'
  },
  getBirthYear: function(){
    return 2022 - this.age;
  }
}

let val;

val = person;
val = person.firstName;
val = person.age;
val = person.address.city;
val = person.getBirthYear();


console.log(val); 
