let rows=document.querySelector('.studentrow');
let userlog = JSON.parse(localStorage.getItem('islogin'));
console.log(userlog);
let showUserName = document.querySelector('#showUserName');
showUserName.innerHTML = `${userlog.userName}`;




function authentication() {
  let islogin = JSON.parse(localStorage.getItem('islogin') || '[]');
  console.log(islogin);
  if (islogin == null || islogin == '') {
      console.log(islogin);
      window.location.href = "../signup/signin.html";
  }
}




function logout() {
    console.log("Logout")
    localStorage.setItem('islogin', '');
    location.reload(true);
    window.location.href = "../signup/index.html";
}

adminTostudentAssign();

function adminTostudentAssign(){
    let islogin=JSON.parse(localStorage.getItem('islogin'));
    let courses = JSON.parse(localStorage.getItem('courses'));
    console.log(courses);
   
console.log(islogin);
    
rows.innerHTML='';
 
for(let i=0;i< islogin.courses.length;i++){
    console.log(islogin.courses[i]);

    rows.innerHTML += `
    <div class="col-sm-6 col-md-4 ">
    <div class="card " >
    <a href="${courses[islogin.courses[i]-1].courseUrl}" ><img class="card-img-top"  height="250px" width="300px" src="${courses[islogin.courses[i]-1].courseImage}"></a>
    <div class="card-body">
      <p class="card-text text-center">${courses[islogin.courses[i]-1].courseName}</p>
      </div>
    </div>
  </div>`
}
}
 