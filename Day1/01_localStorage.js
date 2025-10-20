// localStorage

// 1. it's part of the web storage API -> introduce in HTML5.
// 2. Basically ek key-value database hai browser k andar.
// 3. Stored data = string-based, not objects or arrays(tu convert karta hai JSON.stringify se).
// 4. Works synchronously (blocking nature).
// 5. Persistent storage hai -> data tab close hone k baad bhi rehta hai.
// 6. Chrome 5.0mb ka data store karta hai approximately.


// setItem -> setItem("key", "value")
// getItem -> getItem("name")
// removeItem -> removeItem("name")
// clear -> DeleteAll()

// Note: setItem se hum value ko update bhi kar sakte hain
// example

localStorage.setItem("lastName", "Malik"); // yahan par value set hui first time

localStorage.setItem("lastName", "Ahmad"); // ab yahan par value update hui new nahi bani kyun ki already "lastName" naam ki key bani hui hai tabhi update ho rahi hai

// Note: jo key exist nahi karti us ko access karne pe null return hoga

// Difference btw  localStorage & sessionStorage
// 👉 localStorage = permanent
// 👉 sessionStorage = tab tak temporary