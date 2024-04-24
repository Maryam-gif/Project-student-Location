// @ts-nocheck
import * as db from '$lib/data_access.js';

export async function load({ fetch, params }) {
	let events;

	if (params.LogID) {
		events = await db.get_event_by_id(params.LogID);
	}

	if (events) {
		return {
			events: events
		};
	}

	return {
		error: 'Error loading'
	};
} console.log("page.js for event details")


