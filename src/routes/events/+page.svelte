<script>
	// @ts-nocheck
	import { writable } from 'svelte/store';
	import * as db from '$lib/data_access.js';
	import { supabase } from '$lib/supabase.js';
	import { format_timestamp } from '$lib/utilities.js';
	export let data;

	let events = writable([...data.Log]);

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
	console.log(Log);

	let search_text = '';

	//search event
	async function search_events() {
		if (search_text == '') {
			alert('invalid search');
			return false;
		}
		const result = await db.search_events(search_text);

		$events = result;
	}

	// Handle delete button events
	async function delete_event(id = 0) {
		if (isNaN(id)) {
			alert(`cannot delete event with invalid ID`);
			return false;
		}

		if (confirm(`Permanently deleting product with ID= ${id}\n\nAre you sure?`)) {
			const result = await db.delete_event_by_id(LogID);
			alert(`Event with id ${id} deleted`);
		}
		return true;
	}

	//  keep track of sort directions for each col
	const table_sort = {
		LogID: false,
		created_at: false,
		StudentID: false,
		LocationID: false
	};

	//sorting the tables or columns
	async function sort_by_col(col) {
		let db_sort_col = col;

		// reverse current sort direction for this col
		// i.e. reverse the current order
		table_sort[col] = !table_sort[col];

		const sorted = await db.get_all_log(db_sort_col, table_sort[col]);

		$events = sorted;

		// output to the  browser console
		console.log(`${col} : ${table_sort[col]}`);
	}
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
							bind:value={search_text}
							class="form-control"
							name="search"
							placeholder="search Events"
						/>
					</div>
					<!-- submit button -->
					<div class="col-md-1">
						<button on:click={search_events} class="btn c1">Search</button>
					</div>
				</div>
			</form>

			<!--table events-->
			<div id="log_events">
				<!--log-->
				<table id="Log" class="table table-striped table-bordered table-hover">
					<thead>
						<tr>
							<th class="click-text" on:click={() => sort_by_col('LogID')}
								><i class={table_sort['LogID'] ? 'bi bi-sort-down' : 'bi bi-sort-up'}></i>Log ID</th
							>
							<th class="click-text" on:click={() => sort_by_col('created_at')}
								><i class={table_sort['created_at'] ? 'bi bi-sort-down' : 'bi bi-sort-up'}
								></i>Time</th
							>
							<th class="click-text" on:click={() => sort_by_col('StudentID')}
								><i class={table_sort['StudentID'] ? 'bi bi-sort-down' : 'bi bi-sort-up'}
								></i>Student ID</th
							>
							<th>Location ID</th>
						</tr>
					</thead>
					<tbody>
						{#each Log as Log}
							<tr>
								<td><a href="/event_details/{Log.LogID}">{Log.LogID}</a></td>
								<td>{format_timestamp(Log.created_at)}</td>
								<td> {Log.StudentID} </td>
								<td> {Log.LocationID} </td>
								<td
									><button
										on:click={() => delete_event(Log.LogID)}
										class="btn btn-sm btn-outline-danger"
									>
										<span class="bi bi-trash" />
									</button>
								</td>
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
	.c1 {
		background-color: #edafb8;
	}
	.c1:hover {
		background-color: #4a5759;
	}
</style>
