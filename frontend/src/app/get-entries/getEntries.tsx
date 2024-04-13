
export default async function GetEntries() {
    let entries =  await fetch('http://localhost:3333/api/getAllEntries', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response: Response) => {
        return response.json();
    });

    return entries
}