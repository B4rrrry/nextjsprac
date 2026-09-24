import { revalidatePath } from "next/cache";

export const fetchUsers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const users = await fetch("http://localhost:3001/users");

  return users.json();
};

export const fetchUserById = async (id: string) => {
  const user = await fetch("http://localhost:3001/users/" + id);

  return user.json();
};

export const createUser = async (formData: FormData) => {
  "use server";
  console.log("----------------------------");
  console.log(formData, "formData");
  console.log("----------------------------");

  const newUser = await fetch("http://localhost:3001/users", {
    method: "POST",
    body: JSON.stringify({
      name: formData.get("name"),
      email: formData.get("email"),
    }),
  });
  revalidatePath("/users");
};

export const deleteUser = async (id: string) => {
  "use server";
  const deleteUser = await fetch(`http://localhost:3001/users/${id}`, {
    method: "DELETE",
  });
  revalidatePath("/users");
  console.log(deleteUser, "deleted");
};
