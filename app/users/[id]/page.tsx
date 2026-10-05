import { fetchUserById } from "@/app/actions/users";
import { notFound } from "next/navigation";

const UserPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const user = await fetchUserById(id);
  if(user.error) {
    notFound()
  }

  return (
    <div>
      <h1>Single UserPage</h1>
      <p>{user.name}</p>
    </div>
  );
};

export default UserPage;
