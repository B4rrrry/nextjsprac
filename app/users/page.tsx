import { Suspense } from "react";
import UsersList from "../_components/UsersLists/UsersList";
import { fetchUsers } from "../actions/users";

export default async function UsersPage() {
  const usersRes = await fetchUsers();
  console.log(usersRes);
  return (
    <div>
      <h1>Users</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <UsersList users={usersRes} />
      </Suspense>
    </div>
  );
}
