import {addContact} from "../info.js";
import supabase from "../config.js";
import confetti from "canvas-confetti";

const formEl = document.querySelector('#add-contact')

document.querySelector('#add-contact').addEventListener('submit', async function (event) {
    event.preventDefault();

    // Get the values from the form
    const firstName = document.querySelector('#firstName').value;
    console.log(firstName)
    const lastName = document.querySelector('#lastName').value;
    console.log(lastName)
    const email = document.querySelector('#email').value;
    console.log(email)
    const city = document.querySelector('#city').value;
    console.log(city)
    const state = document.querySelector('#state').value;
    console.log(state)
    const phoneNumber = document.querySelector('#phone').value;
    console.log(phoneNumber)
    const message = document.querySelector('#message').value;
    console.log(message)

    // Create an object with this data
    const newContact = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        state_province: state,
        phone_number: phoneNumber,
        message: message
    };

    const {data, error} = await supabase
        .from('experience_unlimited')
        .insert(newContact);

    if (error) {
        console.error('Error submitting contact:', error.message);
    } else {
        triggerConfetti();
        console.log('Contact successfully submitted:', data);
    }

    // Call your function to add the post
    const response = await addContact(newContact);
    console.log(response); // Log the result (either success or error)

    // Reset the form after adding the post
    formEl.reset();

    // Function to trigger confetti effect
    function triggerConfetti() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: {y: 0.6}
        });
    }

    // Function to clear input fields
    function clearInputFields(selectors) {
        selectors.forEach(selector => {
            const element = document.querySelector(`#${selector}`);
            if (element) {
                element.value = '';
            }
        });
    }
});
