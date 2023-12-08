export { default } from "next-auth/middleware";
export const config = {
  // *: zero or more parameters
  // +: one or more parameters
  // ?: zero or one parameter
  // {param}: one parameter
  matcher: ["/dashboard/:path*", "/reports/:path*"],
};
