import supabase from "./config.js";

export async function getContact() {
    let {data, error} = await supabase
        .from('experience_unlimited')
        .select('*')

    return data;
}

export async function addContact(newContact = {}){

}