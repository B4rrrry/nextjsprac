export async function GET() {
  const users = await fetch("http://localhost:3001/users").then(res => res.json());

  return Response.json({
    users
  })
}