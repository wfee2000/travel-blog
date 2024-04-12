
export default async function Home() {

  console.log(await getUsers());

  return (
      <div>users</div>
  );

  async function getUsers() {
    return await fetch('http://localhost:3333/api/getAllUsers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response: Response) => {
      return response.json();
    });
  }
}
