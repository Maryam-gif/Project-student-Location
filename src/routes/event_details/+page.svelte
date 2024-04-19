<script>
	// @ts-nocheck

	import { format_timestamp } from '$lib/utilities';

	export let data;

	const events = data.events;

	let Log = data.Log;
	console.log(events);
</script>

<div class="container">
	<h2>Events details</h2>

	<h4>Student</h4>
	<div class="table-responsive-md">
		<table class="table table-striped">
			<tbody>
				<tr>
					<th>Student ID: </th>
					<td>Log.StudentID</td>
				</tr>
				<tr>
					<th>Student Name: </th>
					<td>events[0].Student.StudentName</td>
				</tr>
				<tr>
					<th>description</th>
					<td>events[0].computers.description</td>
				</tr>
				<tr>
					<th>location</th>
					<td>events[0].computers.location</td>
				</tr>
				<tr>
					<th>created</th>
					<td>format_timestamp(events[0].computers.created_at)</td>
				</tr>
			</tbody>
		</table>
	</div>

	<h4>Log</h4>
	<div class="table-responsive-md">
		<table class="table table-striped">
			<tbody>
				<tr>
					<th>Log ID:</th>
					<td>events[0].LogID</td>
				</tr>
				<tr>
					<th>Time: </th>
					<td>format_timestamp(events[0].created_at)</td>
				</tr>
				<tr>
					<th>Student ID:</th>
					<td>events[0].StudentID</td>
				</tr>
				<tr>
					<th>Location ID:</th>
					<td>events[0].LocationID</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<style>
	.container{
		padding: 5rem;
	}
</style>