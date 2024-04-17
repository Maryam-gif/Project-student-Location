<script>
    import { format_timestamp } from '$lib/utilities';

    export let data;
    
    const events = data.events;

    console.log(events);
</script>

<h2>Events details</h2>

<h4>Student</h4>
<div class="table-responsive-md">
	<table class="table table-striped">
		<tbody>
			<tr>
				<th>id</th>
				<td>Student[0].Student.StudentID</td>
			</tr>
			<tr>
				<th>name</th>
				<td>events[0].computers.name</td>
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