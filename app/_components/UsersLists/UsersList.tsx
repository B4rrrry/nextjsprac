import Link from "next/link";
import { FC } from "react";
import ShowEmailBtn from "../ShowEmailBtn/ShowEmailBtn";
import DeleteBtn from "../DeleteBtn/DeleteBtn";
import { deleteUser } from "@/app/actions/users";

type UsersListProps = {
  users: { id: string; name: string; email: string }[];
};

const UsersList: FC<UsersListProps> = (props) => {
  const { users } = props;

  return (
    <div>
      <p className="font-bold mb-3">Users</p>
      <ul>
        {users.map((user) => {
          const deleteUserWithId = deleteUser.bind(null, user.id);
          return (
            <li key={user.id} className="mb-2.5">
              <div className=" mb-1">
                <p>{user.name}</p>
                <ShowEmailBtn email={user.email} />
                <DeleteBtn deleteFunc={deleteUserWithId} />
              </div>
              <Link href={`/users/${user.id}`}>View</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersList;
