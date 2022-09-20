import React from 'react';
import clipart2 from '../public/clipart2.png'

function Register() {
  return (
    <div class="container2">
	<div class="form-container2 sign-up-container2">
		<form action="#">
			<h1>Register</h1>
            <input type="username" placeholder = "Username" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign Up</button>
		</form>
	</div>
	<div class="overlay-container2">
		<div class="overlay2">
		<img src= "/clipart2.png" height="270" width= "350" class = "image-background2" />
		</div>
	</div>
</div>

  );
}

export default Register;