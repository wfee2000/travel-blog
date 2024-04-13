"use client"

export default async function uploadEntry(e) {

    e.preventDefault();
    var formData = new FormData(e.target);
    const form_values = Object.fromEntries(formData);

    let image = form_values.image as File;

    let fileString: string;

    const toBase64 = file => new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });

    let content = [];

    if(form_values.text as string){
        content.push({
            type: "text",
            content: form_values.text as string,
        });
    }

    if(form_values.link as string){
        content.push({
            type: "link",
            content: form_values.link as string,
        });
    }

    if(form_values.coordinates as string){
        content.push({
            type: "coordinates",
            content: form_values.coordinates as string,
        });
    }

    if (image){
        fileString = await toBase64(image);

        content.push({
            type: "image",
            content: fileString,
        });
    }

    fetch('http://localhost:3333/api/createEntry', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: form_values.title,
            description: form_values.description,
            creationDate: new Date(),
            editDates: [],
            impressionCount: 0,
            contents: content,
            commentsAllowed: !!form_values.comments,
            blogCategory: form_values.category,
            author_un: form_values.author,
            comments: []
        })
    })
        .then(response => {
            alert('entry uploaded');
        })
        .catch(error => {
            alert('something went wrong');
        });
}