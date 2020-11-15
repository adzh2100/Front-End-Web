let A=[10,5,13,18,51];

function less_than10(A)
{
	return A.some(num => num<10);
}

console.log(less_than10(A));
