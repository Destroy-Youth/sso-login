import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import "./App.css";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function saveUserSession(userData) {
    Cookies.set("session", userData.session, { domain: ".equihua-dy.dev" });
    handleLogin();
  }

  function handleLogin() {
    window.location.href = "https://www.subdomain.equihua-dy.dev/";
  }

  return (
    <form onSubmit={handleSubmit(saveUserSession)}>
      <input type="text" {...register("session")}></input>
      <input type="submit" />
    </form>
  );
}

export default Form;
