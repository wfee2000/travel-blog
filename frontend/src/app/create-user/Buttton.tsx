"use client"

export default function uploadUser(e) {

    e.preventDefault();
    var formData = new FormData(e.target);
    const form_values = Object.fromEntries(formData);

    console.log('name: ', form_values.name)
    fetch('http://localhost:3333/api/createUser', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
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