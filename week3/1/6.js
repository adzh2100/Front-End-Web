let A=[10,5,13,18,51];

const reducer=(accomulator, current_value) => accomulator+current_value;

function calculate(A)
{
	return A.reduce(reducer);
}

console.log(calculate(A));


