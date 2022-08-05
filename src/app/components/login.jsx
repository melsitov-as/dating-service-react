import React, { useState } from 'react';

const Login = () => {
	const [email, setEmail] = useState('');
	const handleChange = (e) => {
		setEmail(e.target.value);
		console.log(e.target.value);
	};
	return (
		<>
			<form action=''>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						id='email'
						value={email}
						onChange={handleChange}></input>
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
