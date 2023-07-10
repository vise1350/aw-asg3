function ageInDays(person) {
    const fullName = person.firstName + " " + person.lastName;
    const ageInDays = person.age * 365;
  
    const log = () => {
      console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}`);
    };
  
    return log;
  }
  
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };
  
  const logFunction = ageInDays(person);
  logFunction(); // The person's full name is John Doe and their age in days is 10950
  