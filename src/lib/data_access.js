// @ts-nocheck
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
export async function get_all_log(order_col = 'LogID', order_dir = true) {
	const result = await supabase
		.from('Log')
		.select('*, Student(StudentName), Location(RoomName)')
		.order(order_col, { ascending: order_dir });

	if (result.error) {
		console.log(`get all log: ${result.error}`);
	}

	return result.data;
}

//import all course
export async function get_all_student() {
	const result = await supabase
		.from('Student')
		.select('*')
		.order('StudentName', { ascending: true });

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
		.from('Log')
		// select Student table through Log table - requires valid one-many setup
		.select('*, Student(StudentName), Location(RoomName)')
		.or(
			`LocationID.ilike.%${search_text}%,StudentName.ilike.%${search_text}%,RoomName.ilike.%${search_text}%`
		)
		.order('created_at', { ascending: true });

	// log errors
	if (result.error) {
		console.log(`get all search events error: ${result.error}`);
	}

	// return data
	return result.data;
}

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
		console.log(`delete all events error: ${result.error}`);
		return false;
	}

	// no error
	return true;
}

export async function get_event_by_id(LogID) {
	const result = await supabase.from('Log').select('*, Student(*)').eq('LogID', LogID);

	// log errors
	if (result.error) {
		console.log(`get all events by id error: ${result.error}`);
	}

	//return data
	return result.data;
}