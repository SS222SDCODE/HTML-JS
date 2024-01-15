//alert("asdfbhjkv")
//input field identification

let fname = document.getElementById('fname')
let mail = document.getElementById('mail')
let pwd = document.getElementById('pwd')
let cpwd = document.getElementById('cpwd')

//Error field identification


let err = document.getElementById('errFname')
let err1 = document.getElementById('errMail')
let err2 = document.getElementById('errPwd')
let err3 = document.getElementById('errCpwd')



const regMail = RegExp('^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$')
const regPwd = RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,15}$')
const regFname= RegExp('^[A-Z] {1} [a-z] {1,19}$')

fname.addEventListener('input', nameChecking)
mail.addEventListener('input', mailChecking)
pwd.addEventListener('input',pwdChecking)
cpwd.addEventListener('input',cpwdChecking)

function nameChecking() {
    let data = fname.value
    console.log("value in full name input :", data)
    if (data.length < 1)
        errFname.innerHTML = " * required field"
    else if(!regFname.test(data))
    errFname.innerHTML="Wrong Pattern"
    else
        errFname.innerHTML = ""

}
function mailChecking() {
    let data = mail.value
    // console.log("value in Email input :", data)
    if(data.length<1){
        errMail.innerHTML="*Required Field"
    }else if(!regMail.test(data)){
        errMail.innerHTML="Wrong Pattern"
    }else{
        errMail.innerHTML=""
    }
}
  function pwdChecking(){
    let data=pwd.value
    //console.log("value in Email input :",data)
    if(data.length<1){
        errPwd.innerHTML="*Required Field"
    }else if(!regPwd.test(data)){
        errPwd.innerHTML="Wrong Pattern"
    }else{
        errPwd.innerHTML=""
    }
}

function cpwdChecking(){
    pwdData=pwd.value
    cpwdData=cpwd.value
    //console.log()
    if(cpwdData.length<1){
        errCpwd.innerHTML="*required field"
        errCpwd.style.color="red"

    }else if(cpwdData!=pwdData){
        errCpwd.innerHTML="* Password mismatched"
        errCpwd.style.color="red"

    }else{
        errCpwd.innerHTML="* Password matched"
        errCpwd.style.color="green"
    }
}