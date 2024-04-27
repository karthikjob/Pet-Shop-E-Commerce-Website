// function clickHandler(){
//      var a = document.getElementsByClassName('text')[0];

// }
// function changeHandler(event){
//     console.log(event.target.value)
// }

// const data = JSON.parse(sessionStorage.getItem('loginDetails'))
// console.log(data)
const reg={

}

let mail= document.getElementsByName('mail')[0];
let password = document.getElementsByName('password')[0];







function changeHandler(e,name){
    if(name==="mail"){
        reg.gmail=e.target.value
    }else{
        reg.pas=e.target.value
    }
    
}




function clickHandler(){
    console.log(reg)
    mail.value = "";
    password.value = "";
    login()
}

  
function login() {
    let data = JSON.parse(localStorage.getItem("loginDetails"));
   const result =  data.some(function(user){
        return (user.mail === reg.gmail && user.pass === reg.pas);  
    })
    if (result) {
        console.log("sdf")
       console.log( sessionStorage.key('loginstatus'))
        sessionStorage.setItem("loginStatus",true);
        location.href = '../index.html'
    } else {
        alert("Invalid email or password. Please try again.");
        sessionStorage.setItem("loginStatus",false);
    }
  
}



