export async function getUser(id: any) {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  return res.json();
}

export default async function UserPage({ params}) {
  const user = await getUser(params.id);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">{user.firstName} {user.lastName}</h1>
      <p>Age: {user.age}</p>
      <p>Gender: {user.gender}</p>
      <p>Email: {user.email}</p>
    </main>
  );
}
