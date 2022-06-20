import logo from './logo.svg';
import './App.css';
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
