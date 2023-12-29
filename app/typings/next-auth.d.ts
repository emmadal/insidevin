import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: {
      id: string;
      emailVerified: boolean | any
    } & DefaultSession["user"];
  }
}
