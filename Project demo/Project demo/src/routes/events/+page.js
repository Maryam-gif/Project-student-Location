// importing the client unstance 
import * as db from '$lib/data_access.js';

export async function load({fetch, params}) {

    const Log = await db.get_all_log();

    const Student = await db.get_all_student();

    console.log(Student);
    //return data to page
    if (Log && Student) {
        return {
            Log: Log,
            Student: Student
        };
    }


    //incase of return
    return {
        error: 'error occured'
    };
}