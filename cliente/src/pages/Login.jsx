import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Senha:", password);
    navigate("/");
  };

  return (
    <main className="mainLogin">
      <h1 className="titleLogin">Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="dadosLogin"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="dadosLogin"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="buttonLogin" type="submit">
          Entrar
        </button>
      </form>
    </main>
  );
}
