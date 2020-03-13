
const userName = document.querySelector('.user');
const email = document.querySelector('.email');
const pass1 = document.querySelector('.pass1');
const pass2 = document.querySelector('.pass2');
const role = document.getElementsByName('role');

let spanu = document.getElementById('spanu');
let spane = document.getElementById('spane');
let spanp1 = document.getElementById('spanp1');
let spanp2 = document.getElementById('spanp2');
let spanr = document.getElementById('spans');

const signUpbtn = document.querySelector('.signUpbtn');
const loginBtn = document.querySelector('.loginBtn');

const loginEmail = document.querySelector('.loginEmail');
const loginPass = document.querySelector('.loginPass');



let studentlog = JSON.parse(localStorage.getItem('students') || '[]');
let adminlog = JSON.parse(localStorage.getItem('admin') || '[]');

localStorage.setItem('authentication', false);

let authentication = JSON.parse(localStorage.getItem('authentication'));
 
//console.log(authentication);
function signUp() {
    let type;
    console.log(email.value);
    if (userName.value == '') {
        spanu.innerHTML = 'please enter username';

    } else if (email.value == '') {
        spane.innerHTML = "please enter email";

    } else if (pass1.value == '' && pass1.value.length < 10) {
        spanp1.innerHTML = "please enter password";

    } else if (pass1.value != pass2.value) {
        spanp2.innerHTML = "password not matched";

    }
    else {
        console.log(userName.value, email.value, role.value, pass1.value);
        console.log(role);
        let alreadyEmail = false;
        role.forEach(select => {
            if (select.checked) {
                if (select.value === 'student') {
                    type = 'student'
                } else {
                    type = 'admin'
                }
            }
        })


        console.log(type);
        let admin = JSON.parse(localStorage.getItem("admin") || '[]');
        let students = JSON.parse(localStorage.getItem("students") || '[]');
        admin.forEach(user => {
            if (user.email == email.value) {
                alreadyEmail = true;
            }
        })
        students.forEach(user => {
            if (user.email == email.value) {
                alreadyEmail = true;
            }
        })

        if (!alreadyEmail) {
            let userObj = {
                "userName": userName.value,
                "email": email.value,
                "role": type,
                "password": pass1.value,
                "courses": []
            };
            console.log(userObj);


            if (userObj["role"] == 'admin') {

                admin.push(userObj);
                localStorage.setItem('admin', JSON.stringify(admin));
                window.location.href = "./signin.html";
            }

            else {
                students.push(userObj);
                localStorage.setItem('students', JSON.stringify(students));
                window.location.href = "./signin.html";
            }


            console.log(students, admin);
            userName.value = '';
            email.value = '';
            pass1.value = '';
            pass2.value = '';
            role.value = '';
        }
        else {
            spane.innerHTML = "email already exist";

        }
    }


}

function login() {
    let students = JSON.parse(localStorage.getItem('students') || '[]');
    console.log(studentlog);
    let admin = JSON.parse(localStorage.getItem('admin') || '[]');
    //console.log(userlog);
    role.forEach(select => {
        if (select.checked) {
            if (select.value === 'student') {
                type = 'student'
            } else {
                type = 'admin'
            }
        }
    })

    if (type == 'student') {
        students.forEach(log => {
            console.log(log);
            if (log.email === loginEmail.value && log.password === loginPass.value) {
                localStorage.setItem('islogin', JSON.stringify(log));
                console.log(" user valid");
                localStorage.setItem('authentication', true);
                window.location.href = "../students/studentdashboard.html";

                

            }

        })
    }
    else {
        admin.forEach(log => {
            console.log(log);
            if (log.email === loginEmail.value && log.password === loginPass.value) {
                localStorage.setItem('islogin', JSON.stringify(log));
                console.log("valid");
                localStorage.setItem('authentication', true);
                window.location.href = "../admin/admindash.html";
                 
            }

        })
    }



}

// function authenticate() {
//     for (let student of students) {
//         for (let course of courses) {
//          if(!student.courses.length==course.length){
//              window.location.href="../student/studentdashboard.html";
//          }
            
//         }
//     }
// }


if (signUpbtn) {
    signUpbtn.addEventListener('click', () => {
        signUp();
    })
}
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        login();
    })
}