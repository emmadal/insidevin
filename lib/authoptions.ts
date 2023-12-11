import { FirestoreAdapter } from "@auth/firebase-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { cert } from "firebase-admin/app";
import * as bcrypt from "bcrypt";
import { firestore } from "firebase-admin";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
    signOut: "/",
  },
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    }),
  }),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req): Promise<any> {
        if (!credentials?.email || !credentials?.password) return null;
        // search if an user exist with the email
        const docRef = await firestore()
          .collection("users")
          .where("email", "==", credentials.email);
        const query = await (await docRef.get()).docs;
        const user = query[0].data();
        if (user) {
          // check if password matches
          const result = await bcrypt.compare(
            credentials.password,
            user?.password,
          );
          if (result) return user; // return user object if password matches
          return null;
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          ...user,
        };
      }
      return token;
    },
    async session({ session, token }) {
      // pass user id and emailVerified to session
      return {
        ...session,
        user: {
          ...session.user,
          emailVerified: token?.emailVerified,
          id: token?.id,
        },
      };
    },
  },
  session: {
    strategy: "jwt",
  },
};
