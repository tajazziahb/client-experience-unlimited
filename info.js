import supabase from "./config.js";

export async function getContact() {
    let {data, error} = await supabase
        .from('experience_unlimited')
        .select('*')

    return data;
}

export async function addContact(newContact = {}) {
    try {
        // Insert the new contact into the "experienced_unlimited" table
        let {data, error} = await supabase
            .from('experience_unlimited')
            .insert(newContact);

        // console.log(newContact)

        if (error) {
            throw error;
        }

        return data;

    } catch (error) {
        console.log("Error adding contact:", error);
        return {error:error.message};
    }
}

