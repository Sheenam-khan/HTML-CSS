function month(date)
{
monthlist=["january","february","March","april","May","June",
"July","august","september","october","november","december"];

document.write(monthlist[date.getMonth()]);
}
month(new Date("1/3/2020"));