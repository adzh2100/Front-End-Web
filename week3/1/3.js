let A=[10,5,13,18,51];

function get_even(A)
{
 let B=A.filter(num => num%2==0);
 return B;
}

let B=get_even(A);
console.log(B);
