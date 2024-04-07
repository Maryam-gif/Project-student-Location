// @ts-nocheck
import { supabase } from './supabase.js';


export async function get_all_log(){

    const result = await supabase
    .from('Log')
    .select("*")   // Get all columns of the table Students
    .order('LogID', { ascending: true});

    //error log
    if(result.error) {
        console.log(`Error: ${result.error}`); 
    }

    return result.data;
}

//get all Building
export async function get_all_building(){

    const result = await supabase
    .from('Building')
    .select("*")   // Get all columns of the table Students
    .order('BuildingID', { ascending: true});

    //error log
    if(result.error) {
        console.log(`Error: ${result.error}`); 
    }

    return result.data;
}

//get all courses
export async function get_all_Courses(){

    const result = await supabase
    .from('Course')
    .select("*")   // Get all columns of the table Students
    .order('CourseID', { ascending: true});

    //error log
    if(result.error) {
        console.log(`Error: ${result.error}`); 
    }

    return result.data;
}

//getting all student
export async function get_all_Student(){

    const result = await supabase
    .from('Student')
    .select("*")   // Get all columns of the table Students
    .order('StudentID', { ascending: true});

    //error log
    if(result.error) {
        console.log(`Error: ${result.error}`); 
    }

    return result.data;
}

//getting all location
export async function get_all_Location(){

    const result = await supabase
    .from('Location')
    .select("*")   // Get all columns of the table Students
    .order('LocationID', { ascending: true});

    //error log
    if(result.error) {
        console.log(`Error: ${result.error}`); 
    }

    return result.data;
}




// Search events
// uses .or and ilike to search multiple columns
export async function search_events(search_text) {
    const result = await supabase
	.from('Student')
    // select computer name from computers table - requires valid one-many setup  
	.select('*, Student(StudentID)')
    .or (`StidentID.ilike.%${search_text}%,level.ilike.%${search_text}%`)
	.order('timestamp', { ascending: true });

    // log errors
    if (result.error) {
        console.log(`get all events error: ${result.error}`);
    }

    // return data
    return result.data;
    
}