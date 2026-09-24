import { createUser } from "@/app/actions/users";

const CreateUserPage = () => {
  return (
    <div>
      <h1>Create user</h1>
      <form action={createUser}>
        <label htmlFor="">
          <input type="text" name="name" id="name" placeholder="name" />
        </label>
        <label htmlFor="">
          <input type="text" name="email" id="email" placeholder="email" />
        </label>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default CreateUserPage;
