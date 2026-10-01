import { cacheLife, revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type PaginatedResponse<T> = {
  first: number | null;
  prev: number | null;
  next: number | null;
  last: number | null;
  pages: number;
  items: number;
  data: T[];
};

export const fetchUsers = async <T>(
  query: string,
  currentPage: number,
): Promise<PaginatedResponse<T>> => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const params = new URLSearchParams({
    _page: String(currentPage),
    _per_page: "5",
  });

  if (query.trim()) {
    params.set("name:contains", query.trim());
  }

  const response = await fetch(
    `http://localhost:3001/users?${params.toString()}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.status}`);
  }

  return response.json();
};

export const fetchUserById = async (id: string) => {
  "use cache";
  cacheLife("hours");
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
  redirect("/users");
};

export const deleteUser = async (id: string) => {
  "use server";
  const deleteUser = await fetch(`http://localhost:3001/users/${id}`, {
    method: "DELETE",
  });
  revalidatePath("/users");
};
