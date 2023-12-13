import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? `${process.env.VERCEL_URL}`
    : `${process.env.NEXTAUTH_URL}`;

export const ResetPasswordTemplate = ({ link }: { link: string }) => (
  <Html>
    <Head />
    <Preview>A new request submitted to reset password</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Reset Password</Heading>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            marginBottom: "16px",
            fontSize: "14px",
            color: "#01160F",
            textDecoration: "underline",
          }}
        >
          Click here to reset your password
        </Link>
        <Text
          style={{
            ...text,
            color: "#ababab",
            marginTop: "14px",
            marginBottom: "16px",
          }}
        >
          If you didn&apos;t try to login, you can safely ignore this email.
        </Text>

        <Img
          src="../public/logo.png"
          width={200}
          height={100}
          alt="InsideVin Logo"
        />
        <Text style={footer}>
          <Link
            href="https://insidevin.com"
            target="_blank"
            style={{
              textDecoration: "underline",
              color: "#898989",
            }}
            rel="noopener noreferrer"
          >
            insidevin.com
          </Link>
          , the vin car report platform
          <br />
          for all your vehicles.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ResetPasswordTemplate;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};
