import './login.scss'

import logo from '../../asssets/logo.svg'
export default function Login() {
	return (
		<div className='login'>
			<div className='top'>
				<div className='wrapper'>
					<img className='logo' src={logo} alt='' />
				</div>
			</div>
			<div className='container'>
				<form>
					<h1>Sign In</h1>
					<label htmlFor='email'>Username</label>
					<input id='email' type='email' placeholder='Email or phone number' />
					<label htmlFor='password'>PAssword</label>
					<input id='password' type='password' placeholder='Password' />
					<button className='loginButton'>Sign In</button>
					<span>
						New to Netflix? <b>Sign up now.</b>
					</span>
					<small>
						This page is protected by Google reCAPTCHA to ensure you're not a
						bot. <b>Learn more</b>.
					</small>
				</form>
			</div>
		</div>
	)
}
