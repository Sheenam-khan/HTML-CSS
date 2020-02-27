const users=[{id:1,name:"w",age:14},
{id:2,name:"r",age:15},
{id:3,name:"s",age:19},
{id:4,name:"q",age:17},{id:6,name:"p",age:18}
];

// users.sort();
// //users.reverse();

// let arrangeByName=users.filter(element=>{
 
//     return document.write(element.name+"<br>");
// });

   // console.log(arrangeByName);
 
    users.sort((a,b)=> {
    return a.age-b.age;}
);


users.sort((a,b)=>{
    let x=a.name.toLowerCase();
    let y=b.name.toLowerCase();
    if(x<y){return 1;}
    if(x>y){return -1; }
    return0;
});
for(i=0;i<users.length;i++){
    document.write();
    document.write(users[i].name+users[i].age+"<br>");
}
//document.write(JSON.stringify(users));