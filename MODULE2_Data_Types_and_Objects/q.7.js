// ● Turn the object into JSON and back Turn the user into JSON and then read it back into another variable.
// user = { name: "John Smith", age: 35};

user = { name: "John Smith", age: 35};
userJSON = JSON.stringify(user);
userBack = JSON.parse(userJSON);