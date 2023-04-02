// objects.
var personslDetails ={
    firstName: 'Joe',
    age: 25,
    isMale: true,
    balance: 1000.28,
    dob: new Date(1996, 07, 01),
    address: {
        city: "Accra",
        postCode:  "AC123"
    }
};


// fetching.
console.log(personslDetails.address);
console.log(`\n${Object.keys(personslDetails)}`);
console.log(`\n${Object.values(personslDetails)}`);
console.log(`\n${JSON.stringify(personslDetails)}`); // converts JSON string