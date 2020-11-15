let A=[10,5,13,18,51];

function double(num) {
    num*=2;
    return num;
}

function double_array(A)
{
	let B=A.map(double);
  return B;
}

B=double_array(A);	
console.log(B);
