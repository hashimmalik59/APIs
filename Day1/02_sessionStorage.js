// sessionStorage

// 1. HTML5 web storage API ka part hai.
// 2. Browser k andar key-value pair data store karta hai (sirf string).
// 3. Temporary storage hai -> data sirf tab tak rehta hai jab tak tab open hai.
// 4. Tab close hote hi data delete ho jata hai
// 5. Har tab ka apna isolated sessionStorage hota hai (share nahi hota).

// setItem -> setItem("key", "value")
// getItem -> getItem("name")
// removeItem -> removeItem("name")
// clear -> DeleteAll()

// Note: setItem se hum value ko update bhi kar sakte hain
// example

localStorage.setItem("lastName", "Malik"); // yahan par value set hui first time
localStorage.setItem("age", "23");
localStorage.setItem("lastName", "Ahmad"); // ab yahan par value update hui new nahi bani kyun ki already "lastName" naam ki key bani hui hai tabhi update ho rahi hai

// Note: jo key exist nahi karti us ko access karne pe null return hoga

// Difference btw  localStorage & sessionStorage
// 👉 localStorage = permanent
// 👉 sessionStorage = tab tak temporary

// key -> (index)
localStorage.key(0) // "lastName"
localStorage.key(1) // "age"


let myData = {
    firstName: "Hashim",
    lastName: "Malik",
    age: 23,
    isStudent: true,
    address: {
        country: "Pakistan",
        city: "Peshawar"
    },
    technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "ReactJS", "TailwindCSS"],
    isDeveloper: true,
    languages: {
        a: "JavaScript",
    },
    frameworks: {
        a: "ReactJS",
        b: "TailwindCSS",
        c: "GSAP"
    },
    spouseName: null
}

console.log(myData);