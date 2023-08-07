let key = prompt("Enter Your First Name")
let value = prompt("Enter Your Last Name")

localStorage.setItem(key,value)

console.log(`Person's Fullname : ${key} ${localStorage.getItem(key)}`)