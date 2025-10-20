// JSON.stringify() & JSON.parse()

// JSON.stringify() => yeh object, array wale data ko string(text) format mein convert karta hai.
// JSON.parse() => yeh string()text object, array wale format mein convert karta hai.

let myData = {
    name: "Hashim",
    age: 23,
    isStudent: true,
    isDeveloper: true,
    technolgies: ["JavaScript", "Typescript", "ReactJS", "TailwindCSS"],
    address: {
        country: "Pakistan",
        city: "Peshawar"
    }
}

console.log(myData);

let str = JSON.stringify(myData);
console.log(`Stringify:`, str);

let objArr = JSON.parse(str)
console.log(`Parse:`, objArr);