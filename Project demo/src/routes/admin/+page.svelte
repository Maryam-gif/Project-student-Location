
<form action="" target="_blank" method="post">
	<div class="container">
		<label for="uname"><b>Username</b></label>
		<input type="text" placeholder="Enter Username" name="uname" required />

		<label for="psw"><b>Password</b></label>
		<input type="password" placeholder="Enter Password" name="psw" required />

		<button type="submit">Login</button>
		<label>
			<input type="checkbox" name="remember" /> Remember me
		</label>
	</div>
</form>

<style>
	/* Bordered form */
	form {
		border: 3px solid #f1f1f1;
	}

	/* Full-width inputs */
	input[type='text'],
	input[type='password'] {
		width: 100%;
		padding: 12px 20px;
		margin: 8px 0;
		display: inline-block;
		border: 1px solid #ccc;
		box-sizing: border-box;
	}

	/* Set a style for all buttons */
	button {
		background-color: #f44336;
		color: white;
		padding: 14px 20px;
		margin: 8px 0;
		border: none;
		cursor: pointer;
		width: 100%;
	}

	/* Add a hover effect for buttons */
	button:hover {
		opacity: 0.8;
	}

	/* Extra style for the cancel button (red) */
	/* Add padding to containers */
	.container {
		padding: 16px;
	}
</style>
