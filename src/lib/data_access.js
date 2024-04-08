import {supabase} from './supabase.js'

//import all Building
export async function get_all_building(){
    const result = await supabase
        .from("Building")
        .select("*");

    if (result.error){
    console.log(`get all building: ${result.error}`);
    }
    
    return result.data;
}


//import all course
export async function get_all_course(){
    const result = await supabase
        .from("Course")
        .select("*");

    if (result.error){
    console.log(`get all course: ${result.error}`);
    }
    
    return result.data;
}

//import all Location
export async function get_all_location(){
    const result = await supabase
        .from("Location")
        .select("*");

    if (result.error){
    console.log(`get all Location: ${result.error}`);
    }
    
    return result.data;
}


//import all Log
export async function get_all_log(){
    const result = await supabase
        .from("Log")
        .select("*");

    if (result.error){
    console.log(`get all log: ${result.error}`);
    }
    
    return result.data;
}


//import all course
export async function get_all_student(){
    const result = await supabase
        .from("Student")
        .select("*");

    if (result.error){
    console.log(`get all student: ${result.error}`);
    }
    
    return result.data;
}
