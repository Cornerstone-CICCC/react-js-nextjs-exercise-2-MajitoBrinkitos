import UserCard from "./UserCard";

export async function getUsers() {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  return data.users;
}

export default async function UserList() {
  const users = await getUsers();

  return (
    <ul className="space-y-2">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  );
}
