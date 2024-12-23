   import { useState } from "react";
   import { useNavigate } from "react-router-dom"
   import styles from '../style/register.module.css'
   import Header from "../components/Header";
    export default function Registrar() {
      //aspa simples para texto
    const [nome , setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [categoria, setCategoria] = useState('');
    const [disponibilidade, setDisponibilidade] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [codigo, setCodigo] = useState('');
    const [imagem, setImagem] = useState('');

  const navigate = useNavigate();
    const criaProduto = async (event) => {
      // todo formuário e enviar inforamções, o preventDefault serve para previnir o envio do formulário, ele não vai enviar a informação vai ser o fetch 
      // Ele barra de enviar ao servidor
      event.preventDefault();
      try{
      const resposta = await fetch("http://localhost:3000/produtos",{
          method:'POST',
          headers:{'Content-Type': 'Application/json'},
          //Passa a informação, passa o stringify para sair de texto para JSON
          body: JSON.stringify({
            nome: nome,
            descricao: descricao,
            preco: preco,
            categoria: categoria,
            disponibilidade: disponibilidade,
            tamanho: tamanho,
            codigo: codigo,
            imagem: imagem,
          }),
        });
        if(resposta.ok){
          navigate("/")
        }
        }catch{
        alert("Deu erro baby");
        }
        alert("Dados salvos!");
        }
    return (
      <main className={styles.register}>
        <Header/>
        <center>
        <h1>
        Cadastrar Produto
        </h1>
        </center>
        <form className={styles.form} onSubmit={criaProduto}>
          <label className={styles.dados}>
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
            Descrição
            <input
            type="text"
            value={descricao}
            onChange = {(event) => setDescricao(event.target.value)}>
            </input>
          </label>
          <label>
            Preço
            <input
          type="number"
            value={preco}
            onChange = {(event) => setPreco(event.target.value)}>
            </input>
          </label>
          <label>
            Categoria
            <input
            type="text"
            value={categoria}
            onChange = {(event) => setCategoria(event.target.value)}>
            </input>
          </label>
          <label>
          Disponibilidade
            <input
            type="text"
            value={disponibilidade}
            onChange = {(event) => setDisponibilidade(event.target.value)}>
            </input>
          </label>
          <label>
          Tamanho
            <input
            type="text"
            value={tamanho}
            onChange = {(event) => setTamanho(event.target.value)}>
            </input>
          </label>
          <label>
          Código
            <input
            type="text"
            value={codigo}
            onChange = {(event) => setCodigo(event.target.value)}>
            </input>
          </label>
          <label>
            Imagem
            <input
            type="text"
            value={imagem}
            onChange = {(event) => setImagem(event.target.value)}>
            </input>
          </label>
          <button type="subimt" onClick={criaProduto}>Criar Produto</button>
        </form>
      </main>
    );
  }