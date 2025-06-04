export async function getUser(id) {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  return res.json();
}

export default async function UserModal({ params }) {
  const user = await getUser(params.id);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold">{user.firstName} {user.lastName}</h2>
        <p>ID: {user.id}</p>
        <a href="/users" className="text-red-600 hover:underline mt-4 inline-block">Close</a>
      </div>
    </div>
  );
}
