let fname = document.getElementsByName('fname')[0];
let mail = document.getElementsByName('mail')[0];
let password = document.getElementsByName('password')[0];
let cpassword = document.getElementsByName('cpassword')[0];


let userNameregex = /^[a-zA-Z ]{2,25}$/;
let mailregx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordregx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let cpasswordregx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let dataObj = []
let up = {}


const data = JSON.parse(localStorage.getItem('loginDetails'));
if(data.length >0 ){
    dataObj = [...data]
}else{
    dataObj = []
}


function changeHandler(e, values) {


    if (values === "fname") {
        if (userNameregex.test(e.target.value)) {
            up.fname = e.target.value
        } else {
            alert("Invalid Username")
        }
    }
    else if (values === "mail") {
        if (mailregx.test(e.target.value)) {
            up.mail = e.target.value
        } else {
            alert("Invalid mail")
        }
    }
    else if (values === "password") {
        if (passwordregx.test(e.target.value)) {
            up.pass = e.target.value
           
        } else {
            alert("Invalid password @$!%*?& ")
        }

    }
    else if (values === "cpassword") {
        if (cpasswordregx.test(e.target.value)) {
            up.cpass = e.target.value

            if (up.pass !== up.cpass) {
                alert("Password and Confirm Password do not match");
            }
        } else {
            alert("Invalid c password")
        }

    }
}

function clickHandler() {
    
    // console.log(up)
    if (Object.keys(up).length == 4) {
        console.log(dataObj)
        dataObj = [...dataObj,up]
        localStorage.setItem('loginDetails', JSON.stringify(dataObj))
        location.href = '../login/index.html'
    
    }
    mail.value = "";
    password.value = "";
    fname.value = "";
    cpassword.value = "";
    up={}

    



}




