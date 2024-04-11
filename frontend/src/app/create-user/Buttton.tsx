"use client"

export default function uploadUser(e) {

    e.preventDefault();
    var formData = new FormData(e.target);
    const form_values = Object.fromEntries(formData);

    console.log('form values', form_values.name)
    console.log('form values', form_values.username)

    fetch('http://localhost:3333/createUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            username: form_values.username,
            password: form_values.password,
            name: form_values.name,
            email: form_values.email
        })
    })
        .then(response => {
            // Handle response here
            console.log('Response:', response);
        })
        .catch(error => {
            // Handle errors here
            console.error('Error:', error);
        });
}