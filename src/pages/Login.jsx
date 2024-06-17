import React from "react";
import { Form } from "react-router-dom";

export async function loginAction(props) {
  const { request } = props;
  const formData = await request.formData();
  const credentials = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  return null;
  console.log(credentials);
}

function Login() {
  return (
    <Form method="POST" action="/login">
      <h1>Login Form</h1>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="enter your email"
          autoComplete="off"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="enter your password"
          autoCapitalize="off"
        />
      </div>
      <input type="submit" value="Submit" />
    </Form>
  );
}

export default Login;
