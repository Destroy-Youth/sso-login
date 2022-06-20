import logo from './logo.svg';
import './App.css';
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function saveUserSession(userData) {
    Cookies.set("session", userData.user);
    Cookies.set("session", userData.user, { path: "mymoons.mx" });
    console.log(userData);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(saveUserSession)}>
        <input type="text" {...register("user")}></input>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
