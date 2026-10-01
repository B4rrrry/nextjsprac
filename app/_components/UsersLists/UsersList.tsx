import Link from "next/link";
import ShowEmailBtn from "../ShowEmailBtn/ShowEmailBtn";
import DeleteBtn from "../DeleteBtn/DeleteBtn";
import { deleteUser, fetchUsers } from "@/app/actions/users";
import Pagination from "../Pagination/Pagination";

type UsersListProps = {
  query: string;
  currentPage: number;
};

type User = { id: string; name: string; email: string };

const UsersList = async (props: UsersListProps) => {
  const { query, currentPage } = props;
  const usersRes = await fetchUsers<User>(query, currentPage);
  console.log(usersRes, "usersRes");
  return (
    <div>
      <p className="font-bold mb-3">Users</p>
      <ul className="flex">
        {usersRes.data.map((user) => {
          const deleteUserWithId = deleteUser.bind(null, user.id);
          return (
            <li key={user.id} className="mb-2.5 border-2 mr-4 p-4">
              <div className=" mb-1">
                <p>Name:{user.name}</p>
                <ShowEmailBtn email={user.email} />
                <DeleteBtn deleteFunc={deleteUserWithId} />
              </div>
              <Link href={`/users/${user.id}`}>View</Link>
            </li>
          );
        })}
      </ul>
      <Pagination pages={usersRes.pages} />
    </div>
  );
};

export default UsersList;
