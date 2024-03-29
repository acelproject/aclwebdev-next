import { login, loginWithGoogle } from "@/lib/firebase/services";
import { compare } from "bcrypt";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        const user: any = await login({ username });
        if (user) {
          const confirmPass = await compare(password, user.password);

          if (confirmPass) {
            return user;
          }
          return null;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_0AUTH_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_0AUTH_CLIENT_SECRET || "",
    }),
  ],

  callbacks: {
    async jwt({ token, account, profile, user }: any) {
      if (account?.provider === "credentials") {
        token.username = user.username;
        token.role = user.role;
      }
      if (account?.provider === "google") {
        const data: any = {
          username: user.name,
          email: user.email,
          type: "google",
        };
        await loginWithGoogle(
          data,
          (result: { status: boolean; data: any }) => {
            if (result.status) {
              token.username = result.data.username;
              token.email = result.data.email;
              token.role = result.data.role;
            }
          }
        );
      }
      return token;
    },
    async session({ session, token }: any) {
      if ("username" in token) {
        session.user.username = token.username;
      }
      if ("role" in token) {
        session.user.role = token.role;
      }

      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
