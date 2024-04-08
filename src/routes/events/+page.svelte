<script>
	// @ts-nocheck
	import * as db from '$lib/data_access.js'
	import { supabase } from '$lib/supabase.js';
	export let data;

	let Log = data.Log;
	let Student = data.Student;

	console.log('Student script section');

	async function filterByStudent(filter_id = 0) {
		//a variable for supabase
		let filtered = [];

		//if value is > than0 than get events from log selected
		//unless select * from Log where StudentID = filtered_id
		if (filter_id > 0) {
			filtered = await supabase.from('Log').select('*').eq('StudentID', filter_id);
		} else {
			filtered = await supabase.from('Log').select('*');
		}

		Log = filtered.data;
	}
	console.log('filterByStudent');
</script>

<!-- The HTML content of the page-->

<div class="container">
	<div class="row">
		<!-- Page Header -->
		<h2 class="mt-5 leading">Events Log from Supabase</h2>
	</div>
	<div class="row">
		<div class="col-sm-2">
			<!-- Page Body Left Column (menu) -->
			<div id="student_location" class="list-group">
				<!-- Course links -->
				<button on:click={filterByStudent} class="list-group-item list-group-item-action">
					All Student
				</button>
				{#each Student as Student}
					<button
						on:click={() => {
							filterByStudent(Number(Student.StudentID));
						}}
						class="list-group-item list-group-item-action">{Student.StudentName}</button
					>
				{/each}
			</div>
		</div>
		<!-- End computer col -->
		<div class="col-sm-10">
			<!-- Page Body Right Side (Content goes here) -->

			<!-- search box -->
			<form>
				<div class="row m-4">
					<div class="col-md-4 d-flex">
						<input
							type="text"
							class="form-control"
							name="search"
							placeholder="search Events"
						/>
					</div>
					<!-- submit button -->
					<div class="col-md-1">
						<button  class="btn btn-primary">Search</button>
					</div>
				</div>
			</form>

			<!--table events-->
			<div id="Student_tables">
				<!--log-->
				<table id="Log" class="table table-striped table-bordered table-hover">
					<thead>
						<tr>
							<th>Log ID</th>
							<th>Time</th>
							<th>Student ID</th>
							<th>Location ID</th>
						</tr>
					</thead>
					<tbody>
						{#each Log as Log}
							<tr>
								<td> {Log.LogID} </td>
								<td> {Log.created_at} </td>
								<td> {Log.StudentID} </td>
								<td> {Log.LocationID} </td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
		<!-- End events col -->
	</div>
	<!-- End Row -->
</div>

<!-- End Main Content-->

<style>
	.leading {
		color: #4a5759;
		font-weight: bold;
		font-size: xx-large;
		padding: 2rem;
	}
</style>
