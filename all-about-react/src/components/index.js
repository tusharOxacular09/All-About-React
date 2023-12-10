let obj = {
    email : "tushar",
    password: "tushaqqq"
}

// spread operator
// let arr = [1, 2, 3, 4, 5, 6]
// let newArr = [...arr, 12, 13 , 14]
// console.log(...newArr);

let newObj = {...obj, age: 12, email: "subodh"}
console.log(newObj);