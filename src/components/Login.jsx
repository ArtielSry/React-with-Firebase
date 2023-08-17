import { useState } from 'react';
import style from './login.module.css';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';

import firebaseApp from '../credencials.js';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword
} from 'firebase/auth';
const auth = getAuth(firebaseApp);

function Login() {
	const [login, setLogin] = useState(false);

	const activeClassName = login ? style.active : style.inactive;
	

	const handlerSubmit = async e => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;

		if (login) {
			await createUserWithEmailAndPassword(auth, email, password);
		} else {
			signInWithEmailAndPassword(auth, email, password);
		}
	};

	return (
		<div className={style.center}>
		<div className={activeClassName}>
			<div className={style.containerForm}>
				<h1>{login ? 'Create account' : 'Sign in to planing'}</h1>
				<form className={style.form} onSubmit={handlerSubmit}>
					<div className={style.formInput}>
						<label><PersonOutlineOutlinedIcon/></label>
						<input
							type='email'
							placeholder='Email'
							id='email'
							required
						></input>
					</div>
					<div className={style.formInput}>
						<label><HttpsOutlinedIcon/></label>
						<input
							type='password'
							placeholder='Password'
							id='password'
							minLength='9'
							required
						></input>
					</div>
					<small>{login ? 'Minimun 8 characteres for password' : ''}</small>
					<button className={style.btn}>{login ? 'SIGN UP' : 'SIGN IN'}</button>
					
				</form>
			</div>
			<div className={style.containerChange}>
				<h2>{ login ? 'Welcome Back!': 'Hello Friend!'}</h2>
				<p>{login ? 'Login with your email and star planning!' : 'Discover the best way to organize your plans!'}</p>
				<button className={style.btnChange} onClick={() => setLogin(!login)}>
					{login
						? 'SIGN IN'
						: `REGISTER NOW`}
				</button>
			</div>
		</div>
		</div>
	);
}

export default Login;
