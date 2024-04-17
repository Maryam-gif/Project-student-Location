<nav id="desktop-nav">
	<div class="logo">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="65"
			height="60"
			fill="currentColor"
			class="bi bi-geo-alt"
			viewBox="0 0 16 16"
		>
			<path
				d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"
			/>
			<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
		</svg>Student Location
	</div>
	
	<div>
		<ul class="nav-links">
			<div class="dropdown">
				<button class="dropbtn"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="30"
						height="30"
						fill="currentColor"
						class="bi bi-menu-button-wide"
						viewBox="0 0 16 16"
					>
						<path
							d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"
						/>
						<path
							d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0M0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"
						/>
					</svg></button
				>
				<div class="dropdown-content">
					<li><a href="/about">About</a></li>
					<li><a href="/events">Event</a></li>
					<li><a href="/event_details">Event Details</a></li>
					<li><a href="/contact">Contact</a></li>
				</div>
			</div>
		</ul>
	</div>
</nav>

<slot />

<style>
	* {
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
		color: #4a5759;
		text-decoration: underline;
		text-underline-offset: 0.5rem;
		text-decoration-color: #f7e1d7;
	}
	.logo {
		color: #edafb8;
		font-size: 2.5rem;
		font-weight: 400;
		font-style: normal;
		padding-top: 2rem;
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
		background-color: #dedbd2;
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
		background-color: #4a5759;
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
