<nav id="desktop-nav">
	<div class="logo">Student Location</div>
	<div>
		<ul class="nav-links">
			<div class="dropdown">
				<button class="dropbtn"><li><a href="/">More</a></li></button>
				<div class="dropdown-content">
					<li><a href="/about">About</a></li>
					<li><a href="/events">Event</a></li>
					<li><a href="/contact">Contact</a></li>
				</div>
			</div>
		</ul>
	</div>
</nav>

<slot />

<style>
	*{
		margin: auto;
	}
	nav,
	.nav-links {
		display: flex;
	}
	/*vh gives nav a size that is taken from the page*/
	nav {
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
		color: #4A5759;
		text-decoration: underline;
		text-underline-offset: 0.5rem;
		text-decoration-color: #F7E1D7;
	}
	.logo {
		color: #EDAFB8;
		font-size: 2.5rem;
		font-weight: 400;
		font-style: normal;
		padding-left: 1rem;
		cursor: none;
		font-weight: bold;
	}
	.logo:hover {
		cursor: default;
	}

	/**Drop button*/
	/* Dropdown Button */
	.dropbtn {
		background-color: white;
		padding-top: 2rem;
		font-size: 1.7rem;
		border: none;
		font-weight: bold;
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
		background-color: #DEDBD2;
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
		background-color: #4A5759;
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
