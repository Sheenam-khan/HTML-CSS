function numString(){
  let start=prompt("enter character").valueOf().codePointAt(0);
  let end=prompt("enter last character").valueOf().codePointAt(0);
  let limit=prompt("enter number").valueOf();
  console.log(start);
  let arr=[];
  for(i=start;i<=end;i=i+2)
  {
arr.push(String.fromCharCode(i));
  }
  document.write(arr);
  console.log("["+arr.toString()+"]");
}
numString();