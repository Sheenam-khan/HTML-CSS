
let apps = [{id:34,name:'M',another:'thing'},{id:37,name:'My',another:'things'}];
document.write(apps)
 
apps.splice(0,1);
apps.splice(0,0,{id:36,name:"k",another:'things'});

for(i=0;i<apps.length;i++){
    console.log(apps[i]);
    //document.write(apps[i]);    
}