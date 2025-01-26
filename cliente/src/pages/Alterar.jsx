import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../style/alter.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Alterar() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Estados para os dados do produto
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');
  const [disponibilidade, setDisponibilidade] = useState('');
  const [tamanho, setTamanho] = useState('');
  const [codigo, setCodigo] = useState('');
  const [imagem, setImagem] = useState('');

  // Buscar os dados do produto ao carregar a página
  useEffect(() => {
    const busca = async () => {
      try {
        const resposta = await fetch("http://localhost:3000/produtos/" + id);
        const dados = await resposta.json();
        setNome(dados.nome);
        setDescricao(dados.descricao);
        setPreco(dados.preco);
        setCategoria(dados.categoria);
        setDisponibilidade(dados.disponibilidade);
        setTamanho(dados.tamanho);
        setCodigo(dados.codigo);
        setImagem(dados.imagem);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
        alert("Erro ao carregar os dados do produto.");
      }
    };
    busca();
  }, [id]);

  // Função para alterar os dados do produto
  const alterar = async (event) => {
    event.preventDefault();
    try {
      await fetch('http://localhost:3000/produtos/' + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          descricao,
          preco,
          categoria,
          disponibilidade,
          tamanho,
          codigo,
          imagem,
        }),
      });
      alert("Produto alterado com sucesso!");
      navigate("/"); 
    } catch (error) {
      console.error("Erro ao alterar produto:", error);
      alert("Erro ao alterar produto.");
    }
  };

  return (

    <main className={styles.alter}>
          <Header/>
      <form className={styles.alterDados} onSubmit={alterar}>
      <h3>Alterar Produto</h3>
        <input
          type="text"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Nome"
          className={styles.prencheDados}
        />
        <input
          type="text"
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
          placeholder="Descrição"
          className={styles.prencheDados}
        />
        <input
          type="number"
          value={preco}
          onChange={(evento) => setPreco(evento.target.value)}
          placeholder="Preço"
          className={styles.prencheDados}
        />
        <input
          type="text"
          value={categoria}
          onChange={(evento) => setCategoria(evento.target.value)}
          placeholder="Categoria"
          className={styles.prencheDados}
        />
        <input
          type="text"
          value={disponibilidade}
          onChange={(evento) => setDisponibilidade(evento.target.value)}
          placeholder="Disponibilidade"
          className={styles.prencheDados}
        />
        <input
          type="text"
          value={tamanho}
          onChange={(evento) => setTamanho(evento.target.value)}
          placeholder="Tamanho"
          className={styles.prencheDados}
        />
        <input
          type="text"
          value={codigo}
          onChange={(evento) => setCodigo(evento.target.value)}
          placeholder="Código"
          className={styles.prencheDados}
        />
        <input
          type="text"
          value={imagem}
          onChange={(evento) => setImagem(evento.target.value)}
          placeholder="URL da Imagem"
          className={styles.prencheDados}
        />
        <br />
        <button type="submit"  className={styles.enviaDados} >Alterar</button>
      </form>
      <Footer desenvolvedor={"Desenvolvido por João Pedro Oliveira 👨🏻‍💻🩵"}/>

    </main>
  );
}
