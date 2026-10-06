import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcrypt";

async function getUser(name: string) {
  const user = await fetch(`http://localhost:3001/users?name=${name}`, {
    method: "GET",
  });

  const users = await user.json();
  return users[0] ?? null;
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ name: z.string(), password: z.string() })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const { name, password } = parsedCredentials.data;
          const user = await getUser(name);

          if (!user) {
            return null;
          }

          //const passwordMatch = await bcrypt.compare(password, user.password);
          const passwordMatch = await password === user.password ? true : false;
          console.log(passwordMatch,'------------match')
          if (passwordMatch) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
});
