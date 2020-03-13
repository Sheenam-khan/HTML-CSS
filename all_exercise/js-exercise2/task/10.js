function dateDifference(dt1,dt2)
{
let diff=Math.floor(dt2.getTime()-dt1.getTime());
let day=1000*60*60*24;

let days=Math.floor(diff/day);
let month=Math.floor(days/31);
let years=Math.floor(month/12);
document.write("difference between dates is<br>"+days+"<br>"+"<br>"+month+"<br>"+days);
document.write("<br>8))solution:"+Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24)));
}

dateDifference(new Date("02/18/1999"),new Date("02/18/2020"));