let string_chop=function(str,n)
{
while(n>0){
//return str.substr(0,n);
return str.match(new RegExp('.{1,' + n + '}', 'g'));

}
}
document.write(string_chop("RapidopsSolution",2));