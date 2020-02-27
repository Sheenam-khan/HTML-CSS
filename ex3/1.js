//arr.slice(Math.max(arr.length-n,0));
let arr=[1,3,4,5];

function data_get(arr,n){
       
if(arr!=null && n==null) return "first element:"+arr[0]+"<br>"+"last element:"+arr[arr.length-1]+"<br>";
        
if(n>0) return arr.slice(0,n) +"<br>"+arr.slice(-n);
 
}
document.write(data_get(arr)); 
document.write(data_get(arr,2)); 