import { Suspense } from "react";
import UsersList from "../_components/UsersLists/UsersList";
import Search from "../_components/Search/Search";

export default async function UsersPage(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  console.log(searchParams, "params");
  return (
    <div>
      <h1 className="mb-2.5">Users</h1>
      <Search placeholder="Search..." />
      <Suspense key={query + currentPage} fallback="Loading users..">
        <UsersList query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}
