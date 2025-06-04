import Link from "next/link";

export default function UserCard({ user }) {
  return (
    <li>
      <Link href={`/users/${user.id}`} className="text-blue-600 hover:underline">
        {user.firstName}
      </Link>
    </li>
  );
}
