
let array1=[1,2,3,4,5,6,7];
let array2=[2,4,4,5,6,8,9];
function unionAnddifference(){
  let concat=[...array1, ...array2];
  let un=[...new Set(concat)];
    document.write("union of 2 arrays:"+un+"<br>");

let difference = array1.filter(x=>!array2.includes(x));
document.write("difference of 2 arrays:"+difference);
}
unionAnddifference();