let arr=new Array();
arr.push(new Date);
console.log(arr);

arr.push(new Date(2018,11,8));
arr[1].setHours(21);
console.log(arr);

function getDaysInMonth(date)
{
	return new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
}

function completeDays(date)
{
	return [getDaysInMonth(date),date.getDay()];
}

function DateToString(date)
{
	let day=date.getDate();
  let month=date.getMonth()+1;
  let year=date.getFullYear();
  return day+"."+month+"."+year;
}

function HourToString(date)
{
	let hour=date.getHours();
  let minute=date.getMinutes();
  let second=date.getSeconds();
  
  if(hour<=9)
  {
  hour="0"+hour;
  }
  
  if(minute<=9)
  {
  minute="0"+minute;
  }
  
  if(second<=9)
  {
    second="0"+second;
  }
  
	return hour+":"+minute+":"+second;  
}

function getDay(date) {
    switch (date.getDay()) {
        case 0 :
            return "неделя";
        case 1:
            return "понеделник";
        case 2:
            return "вторник";
        case 3:
            return "сряда";
        case 4:
            return "четвъртък";
        case 5:
            return "петък";
        case 6:
            return "събота";
    }
}
let daysarr=arr.map(completeDays);

console.log(daysarr);


let thirdarray=new Array(arr.length);
arr.forEach(function (date,index)
{
	thirdarray[index]="Дата: "+ DateToString(date)+ ", час: "+HourToString(date) + ", "+ getDay(date) + ", " + getDaysInMonth(date) + " дни";
})

console.log(thirdarray);
