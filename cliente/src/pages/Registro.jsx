import { useState } from "react";
  export default function Registrar() {
    //aspa simples para texto
  const [nome , setNome] = useState('');
  const [email, setEmail] = useState('');

  const criaUsuario = async (event) => {
    event.preventDefault();
    try{
      await fetch("http://localhost:3000/usuarios",{
        method:'POST',
                                   //Minusculo 
        headers:{'Content-Type': 'Application/json'},
        //Passa a informação, passa o stringify para sair de texto para JSON
        body: JSON.stringify({
          nome: nome,
          email: email,
        }),
      });
    }catch{
      alert("Deu erro baby");
    }
    alert("Dados salvos! Nome e Email");
  }
  return (
    <main>
      <form onSubmit={criaUsuario}>
        <label>
          Nome
          <input 
          type="text"
          value={nome}
          onChange = {(event) => setNome(event.target.value)}>
          </input>
          </label>
        <label>
          Email
          <input
          type="text"
          value={email}
          onChange = {(event) => setEmail(event.target.value)}>
          </input>
        </label>
        <button type="subimt" onClick={criaUsuario}>Criar Usuário</button>
      </form>
    </main>
  );
}