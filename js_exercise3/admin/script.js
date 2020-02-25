let userlog = JSON.parse(localStorage.getItem('islogin') || '[]');
console.log(userlog);
let showUserName = document.querySelector('#showUserName');
showUserName.innerHTML = `${userlog.userName}`;

const courseImage = document.querySelector('.courseImage');
const courseUrl = document.querySelector('.courseUrl');
const courseName = document.querySelector('.courseName');
const addCourseBtn = document.querySelector('.addCourseBtn');

const checkbox = document.querySelector('.checkbox');
let table = document.querySelector('#table');

let select;
let currentCourse;

function authentication() {
    let islogin = JSON.parse(localStorage.getItem('islogin') || '[]');
    console.log(islogin);
    if (islogin == null || islogin == '') {
        console.log(islogin);
        window.location.href = "../signup/signin.html";
    }
}

authentication();

function logout() {
    console.log("Logout")
    localStorage.setItem('islogin', '');
    location.reload(true);
    window.location.href = "../signup/index.html";
}
//console.log(courseImage);

function addCourse() {
    let courses = JSON.parse(localStorage.getItem('courses')) || [];
    let courseid = courses.length > 0 ? courses[courses.length - 1].courseid + 1 : 1;
    let userObj = {
        "courseid": courseid,
        "courseImage": courseImage.value,
        "courseUrl": courseUrl.value,
        "courseName": courseName.value
    };
    console.log(userObj);
    courses.push(userObj);

    localStorage.setItem('courses', JSON.stringify(courses));

    courseCard();
}

function courseCard() {
    let courses = JSON.parse(localStorage.getItem('courses')) || [];
    let courceStr = document.querySelector('.adminrow')
    // let courceStr = '';
    courceStr.innerHTML = '';

    for (let course of courses) {
        courceStr.innerHTML += `
  <div class="col-sm-6 col-md-4 ">
  <div class="card " >
  <a href=${course.courseUrl} ><img class="card-img-top" height="220px" width="60px" src="${course.courseImage}"  ></a>
  <div class="card-body">
    <p class="card-text text-center">${course.courseName}</p>
    <button type="button" class="btn btn-primary  " data-toggle="modal" data-target="#studentModal" onclick="showStudent(${course.courseid})">Assign Courses</button>
  </div>
</div>
</div>`
    }


}
courseCard();






function showStudent(courseid) {
    let studentData = JSON.parse(localStorage.getItem('students'));
    table.innerHTML = '';
    for (let i = 0; i < studentData.length; i++) {
        console.log(i);

        table.innerHTML += `
    <tr>
    <td>${i + 1}</td>
    <td>${studentData[i].userName}</td>
    <td>${studentData[i].email}</td>
    <td><input type="checkbox" name="select" onclick="studentAssign()" value="${studentData[i].email}" class='checkbox'/></td>
  </tr>`

    }
    console.log(courseid);
    currentCourse = courseid;
    select = document.getElementsByName('select');
    console.log(select)
}


function studentAssign() {
    let students = JSON.parse(localStorage.getItem('students'));
    let courses = JSON.parse(localStorage.getItem('courses'));

    for (let selected of select) {
        if (selected.checked) {
            //console.log(selected.value);
            for (let student of students) {
                console.log(student.email, selected.value)

                if (student.email == selected.value) {
                    console.log(currentCourse);
                    student.courses.push(currentCourse);
                }
            }
        }

    }

    console.log(students);
    localStorage.setItem('students', JSON.stringify(students));

}


















if (addCourseBtn) {
    addCourseBtn.addEventListener('click', () => {
        addCourse();
    })
}





const modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
