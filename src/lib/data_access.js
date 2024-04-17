import { supabase } from './supabase.js';

//import all Building
export async function get_all_building() {
	const result = await supabase.from('Building').select('*');

	if (result.error) {
		console.log(`get all building: ${result.error}`);
	}

	return result.data;
}

//import all course
export async function get_all_course() {
	const result = await supabase.from('Course').select('*');

	if (result.error) {
		console.log(`get all course: ${result.error}`);
	}

	return result.data;
}

//import all Location
export async function get_all_location() {
	const result = await supabase.from('Location').select('*');

	if (result.error) {
		console.log(`get all Location: ${result.error}`);
	}

	return result.data;
}

//import all Log
export async function get_all_log() {
	const result = await supabase.from('Log').select('*');

	if (result.error) {
		console.log(`get all log: ${result.error}`);
	}

	return result.data;
}

//import all course
export async function get_all_student() {
	const result = await supabase.from('Student').select('*');

	if (result.error) {
		console.log(`get all student: ${result.error}`);
	}

	return result.data;
}

// Search events
// uses .or and ilike to search multiple columns
// @ts-ignore
export async function search_events(search_text) {
	const result = await supabase
		.from('Student')
		// select StudentID from Log table - requires valid one-many setup
		.select('*')
		.or(`StudentID.ilike.%${search_text}%, LogID.ilike.%${search_text}%`);

	// log errors
	if (result.error) {
		console.log(`get all events error: ${result.error}`);
	}

	// return data
	return result.data;
}

// @ts-ignore
export async function get_event_by_id(id) {
	const result = await supabase
		.from('Log')
		.select('*, Student(*)')
		.eq('id', id);

	if (result.error) {
		console.log(`get all events error: ${result.error}`);
	}

	return result.data;
} console.log("this pages is for id");


//delete button code for the events
// @ts-ignore
// delete event - no data returned by supabase
export async function delete_event_by_id(LogID) {

    const result = await supabase
	.from('Log')
    // select computer name from computers table - requires valid one-many setup  
	.delete()
    .eq('LogID', LogID);

    // log errors
    if (result.error) {
        console.log(`get all events error: ${result.error}`);
        return false;
    }

    // no error
    return true;
}
