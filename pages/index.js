import clipart1 from '../public/clipart1.png'

import React, { useContext } from "react";

import { Context } from "../context";

import { useRouter } from "next/router";

import axios from "axios";


export default function Login() {
    const { username, setUsername, secret, setSecret } = useContext(Context);
  
    const router = useRouter ();

    function onSubmit(e) {
        e.preventDefault();
    
        if (username.length === 1 || secret.length === 1) return;
    
        axios
          .put(
            "https://api.chatengine.io/users/",
            { username, secret },
            { headers: { "Private-Key": "4b7dd358-c049-4a2a-adf2-fafad6e3eb05" } }
          )
    
          .then((r) => {
            router.push("/chats");
          });
      }

  return (
    <div class="container1">
	<div class="form-container1 sign-in-container1">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
			<h1>Sign in</h1>
			<input
              type="email"
              placeholder="Email"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
			<input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
			<a href="#">Forgot your password?</a>
			<button type="submit" className="submit-button"> Sign In  </button>
		</form>
	</div>
	<div class="overlay-container1">
		<div class="overlay1">
		<img src= "/clipart1.png" height="300" width= "350" class = "image-background1" />
		</div>
	</div>
</div>

  );
}
