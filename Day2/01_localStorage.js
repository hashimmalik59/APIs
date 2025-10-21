// localStorage()

// Concepts: only string data ko store karo -> JSON.stringify() aur JSON.parse() use karna zaroori.

// setItem()
// getItem()
// removeItem()
// clearAll()

// Storage limit 5MB

// same origin policy

// Code Practice:
const user = { name: "Hashim", age: 23 };
localStorage.setItem("user", JSON.stringify(user));

const storedUser = JSON.stringify(user);
console.log(storedUser);

// 🎯 Mini Task:
// ● Ek small “user info saver” banao jisme naam input karne pe wo localStorage mein save
// ho, aur reload pe auto show ho.

///////////////////// Practice ///////////////////////

// localStorage.setItem("name", "Hashim"); // setting value
// localStorage.getItem("name"); // getting value
// localStorage.setItem("name", "Ahmad"); // updating value
// localStorage.removeItem("name"); // removing value
// localStorage.clear(); // removing all values

sessionStorage.setItem("fullName", "Hashim Malik");