import { useState } from "react";
import { useNavigate } from "react-router-dom"
import styles from '../style/register.module.css'
  export default function Registrar() {
    //aspa simples para texto
  const [nome , setNome] = useState('');
  const [email, setEmail] = useState('');

//coisa nova

const navigate = useNavigate();

  const criaUsuario = async (event) => {
    // todo formuário e enviar inforamções, o preventDefault serve para previnir o envio do formulário, ele não vai enviar a informação vai ser o fetch 
    // Ele barra de enviar ao servidor
    event.preventDefault();
    try{
     const resposta = await fetch("http://localhost:3000/usuarios",{
        // POST cria 
        method:'POST',
                                   //Minusculo 
        headers:{'Content-Type': 'Application/json'},
        //Passa a informação, passa o stringify para sair de texto para JSON
        body: JSON.stringify({
          nome: nome,
          email: email,
        }),
      });
      if(resposta.ok){
        // Volta pra home
        navigate("/")
      }
    }catch{
      alert("Deu erro baby");
    }
    alert("Dados salvos!");
  }
  return (
    <main className={styles.register}>
      <form className={styles.form} onSubmit={criaUsuario}>
        <label>
          Nome
          <input 
          type="text"
          value={nome}
          //ação de alteração, modificando o estado salvando cada caracter, salvando com informações anteriores e assim formando um estado
          // dispara a informação e salva dentro do estado
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