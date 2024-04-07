// @ts-nocheck
//importing clinet from suparbase
import { supabase } from '$lib/supabase';

export async function load({ fetch, params }) {
	const Log = await supabase.from('Log').select('*');
	const Student = await supabase.from('Student').select('*');
	const Location = await supabase.from('Location').select('*');
	const Building = await supabase.from('Building').select('*');
	const Course = await supabase.from('Course').select('*');

    if (Log && Student) {
        return{
            log: Log.data,
        	Student: Student.data
        }
    }

    //error
    return {
        error: 'error occured'
    }
}
