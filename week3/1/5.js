let A=[10,5,13,18,51];
function div(num)
{
	if(num%3===0) return num;
}
function canDivide(A)
{
	let B=A.filter(div);
  return B;
}

let B=canDivide(A);
console.log(B);
