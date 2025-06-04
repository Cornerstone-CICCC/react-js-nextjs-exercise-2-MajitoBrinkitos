import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UserList from "./components/UserList";

export default async function UsersPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">Users List</h1>
        <UserList />
      </section>
      <Footer />
    </main>
  );
}
