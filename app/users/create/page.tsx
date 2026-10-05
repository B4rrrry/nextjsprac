import CreateUserForm from "@/app/_components/CreateUserForm/CreateUserForm";
import { createUser } from '@/app/actions/users';

const CreateUserPage = () => {


  

  return (
    <div>
      <h1>Create user</h1>
      <CreateUserForm createUser={createUser} />
    </div>
  );
};

export default CreateUserPage;
