// alert("SEND ME !")
let toggler=document.querySelector(".toggleIcon")
let nav_list=document.querySelector(".nav_list")
toggler.addEventListener("click",display)
function display()
{
    nav_list.classList.toggle("show")
}
//  function calculaton(){
//     let num1=Number(prompt("Enter your First number"))
//     let num2=Number(prompt("Enter your second number"))
//     let sum=num1+num2
//     let mul=num1*num2
//     console.log("Given the number:", num1,num2)
//     console.log("Given the Sum:", sum,"Given the mul:",mul)
//  }
//  calculaton()
//  calculaton()

// let arr=[222,454,445,99]
// arr.push(566,29194,245462)
// console.log(arr)

// let arr2=[222,454,445,99]
// arr2.unshift(566,29194,245462)
// console.log(arr2)

// let arr3=[222,454,445,99]
// arr3.pop()
// console.log(arr3)

// let arr4=[222,454,445,99]
// arr4.shift()
// console.log(arr4)