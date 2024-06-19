import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

export const prisma = new PrismaClient()
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id
      session.user.role = session.user.email === "redlyyyyyyyyyyy@gmail.com" ? "admin" : "user"
      return session
    }
  }
})