

export async function getUsers() {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  return data.users;
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id}>
            <a href={`/users/${user.id}`} className="text-blue-600 hover:underline">
              {user.firstName}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
