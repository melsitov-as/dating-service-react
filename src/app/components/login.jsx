import React from 'react';

const Login = () => {
	return (
		<>
			<form action=''>
				<div>
					<label htmlFor='email'>Email</label>
					<input type='text' id='email'></input>
				</div>
				<div>
					<label htmlFor='email'>Пароль</label>
					<input type='password' id='password'></input>
				</div>
			</form>
		</>
	);
};

export default Login;
