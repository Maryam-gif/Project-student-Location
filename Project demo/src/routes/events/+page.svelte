<script>
	// @ts-nocheck
	import {supabase} from '$lib/supabase.js'
	export let data;

	let Log = data.log;
	let Student = data.Student;
	let Location = data.Location;
	let Building = data.Building;
	let Course = data.Course;

	async function filterByStudentName(filter_id = 0){

		let filtered = [];


		if (filter_id > 0){
			filtered = supabase.from('Student').select('*').eq('StudentID', filter_id);
		} else {
			filtered = await supabase.from('Student').select('*');
		}

		Log = filtered.data;
	}
</script>

<!-- The HTML content of the page-->

<div class="row">
	<!-- Page Header -->
	<h2 class="mt-5">Events Log from Supabase</h2>
</div>
<div class="row">
	<div class="col-sm-2">
		<!-- Page Body Left Column (menu) -->
		<div id="Log" class="list-group">
			<!-- log links -->
			<button on:click={filterByStudentName} class="list-group-item list-group-item-action">All Student</button>
			{#each Student as Student}
				<button class="list-group-item list-group-item-action">{Student.StudentName}</button>
			{/each}
		</div>
	</div>
	<!-- End computer col -->
	<div class="col-sm-10">
		<!-- Page Body Right Side (Content goes here) -->

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
<!-- End Main Content-->
