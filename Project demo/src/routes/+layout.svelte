<nav id="desktop-nav">
	<div class="logo">Student Portal</div>
	<div>
		<ul class="nav-links">
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<div class="dropdown">
				<button class="dropbtn"><li><a href="/">More</a></li></button>
				<div class="dropdown-content">
					<li><a href="/events">Event</a></li>
					<li><a href="/student">Student</a></li>
					<li><a href="/contact">Contact</a></li>
					<li><a href="/admin">Admin</a></li>
				</div>
			</div>
		</ul>
	</div>
</nav>
<slot />

<style>
	/*theme color
	3d5a80 light blue
	98c1d9 baby blue
	E0fbfc baby green
	Ee6c4d orange
	293241 navy s*/
	* {
		background-color: #3d5a80;
		padding: 1px;
	}
	nav,
	.nav-links {
		display: flex;
	}
	/*vh gives nav a size that is taken from the page*/
	nav {
		background-color: #3d5a80;
		justify-content: space-around;
		align-items: center;
		height: 4.5rem;
	}

	.nav-links {
		gap: 1rem;
		list-style: none;
		font-size: 1.5rem;
	}

	a {
		color: #181d25;
		text-decoration: none;
		text-decoration-color: white;
	}

	a:hover {
		color: #ee6c4d;
		text-decoration: underline;
		text-underline-offset: 0.5rem;
		text-decoration-color: #ee6c4d;
	}
	.logo {
		color: #ee6c4d;
		font-size: 2.5rem;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	}
	.logo:hover {
		cursor: default;
	}

	/**Drop button*/
	/* Dropdown Button */
	.dropbtn {
		background-color: #3d5a80;
		color: #181d25;
		padding: auto;
		font-size: 1.5rem;
		border: none;
	}

	/* The container <div> - needed to position the dropdown content */
	.dropdown {
		position: relative;
		display: inline-block;
	}

	/* Dropdown Content (Hidden by Default) */
	.dropdown-content {
		display: none;
		position: absolute;
		background-color: #181d25;
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
	}

	/* Links inside the dropdown */
	.dropdown-content a {
		color: black;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
	}

	/* Change color of dropdown links on hover */
	.dropdown-content a:hover {
		background-color: #ee6c4d;
	}

	/* Show the dropdown menu on hover */
	.dropdown:hover .dropdown-content {
		display: block;
	}

	/* Change the background color of the dropdown button when the dropdown content is shown */
	.dropdown:hover .dropbtn {
		background-color: transparent !important;
	}
</style>
