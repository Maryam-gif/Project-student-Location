<script>
	function printName() {
   console.log("Hello");
 }
</script>

<form method="post" class="form-inline" action="/student">
	<label for="name">Student Name:</label>
	<input type="name" id="name" placeholder="Enter Student Name" name="name" />
	<label for="id">Student  ID:</label>
	<input type="id" id="id" placeholder="Enter Student ID" name="id" />
	<button on:click={printName} type="submit">Enter</button>
</form>

<style>
	* {
		box-sizing: border-box;
	}

	.form-inline {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
	}

	.form-inline label {
		margin: 5px 10px 5px 0;
	}

	.form-inline input {
		vertical-align: middle;
		margin: 5px 10px 5px 0;
		padding: 10px;
		background-color: #fff;
		border: 1px solid #ddd;
	}

	.form-inline button {
		padding: 10px 20px;
		background-color: dodgerblue;
		border: 1px solid #ddd;
		color: white;
		cursor: pointer;
	}

	.form-inline button:hover {
		background-color: royalblue;
	}

	@media (max-width: 800px) {
		.form-inline input {
			margin: 10px 0;
		}

		.form-inline {
			flex-direction: column;
			align-items: stretch;
		}
	}
</style>
