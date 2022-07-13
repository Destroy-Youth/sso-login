import Cookies from "js-cookie";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import { login as loginService } from "./services";

function Form() {
  const [token, setToken] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "carlos@canizal.com",
      password: "canizal123",
    },
  });

  async function login(userData) {
    const data = await loginService(userData);
    console.log(data);
    const newToken = data.sessionToken;
    if (Cookies.get("token")) {
      Cookies.remove("token");
    }

    if (window.location.hostname.includes("localhost")) {
      Cookies.set("token", newToken, { domain: "localhost" });
      console.log("cookie localhost");
    } else {
      Cookies.set("token", newToken, { domain: ".equihua-dy.dev" });
    }
    setToken(newToken);
  }

  function redirect(appNum) {
    if (window.location.hostname.includes("localhost")) {
      window.location.href = "http://localhost:3001";
    } else if (appNum === 1) {
      window.location.href = "https://www.subdomain.equihua-dy.dev/";
    } else {
      window.location.href = "https://subdomain2.equihua-dy.dev/";
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(login)}>
        <input type="text" {...register("username")}></input>
        <input type="text" {...register("password")}></input>
        <input type="submit" />
      </form>
      <button onClick={() => redirect(1)}>Go to app 1</button>
      <button onClick={() => redirect(2)}>Go to app 2</button>
      <h3>{token}</h3>
    </>
  );
}

export default Form;
