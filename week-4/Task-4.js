function person() 
{
			let _salary= 1000;
			return function getSecretSalaryInfo()
      {
				return _salary;
			}
}

		let stoleSalaryInfo = person();
		console.log(stoleSalaryInfo()); //принтира 1000


