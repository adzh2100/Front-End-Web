let A=[10,5,13,18,51];

function slice(A)
{
	return A.slice(A.length-2,A.length);
}

let B=slice(A);
console.log(B);
