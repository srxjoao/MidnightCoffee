import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Alterar() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Estados para os dados do produto
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");
  const [disponibilidade, setDisponibilidade] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [codigo, setCodigo] = useState("");
  const [imagem, setImagem] = useState("");

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
      await fetch("http://localhost:3000/produtos/" + id, {
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
      navigate("/"); // Redireciona para a página inicial
    } catch (error) {
      console.error("Erro ao alterar produto:", error);
      alert("Erro ao alterar produto.");
    }
  };

  return (
    <main>
      <h3>Alterar Produto: {nome}</h3>
      <form onSubmit={alterar}>
        <input
          type="text"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Nome"
        />
        <input
          type="text"
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
          placeholder="Descrição"
        />
        <input
          type="number"
          value={preco}
          onChange={(evento) => setPreco(evento.target.value)}
          placeholder="Preço"
        />
        <input
          type="text"
          value={categoria}
          onChange={(evento) => setCategoria(evento.target.value)}
          placeholder="Categoria"
        />
        <input
          type="text"
          value={disponibilidade}
          onChange={(evento) => setDisponibilidade(evento.target.value)}
          placeholder="Disponibilidade"
        />
        <input
          type="text"
          value={tamanho}
          onChange={(evento) => setTamanho(evento.target.value)}
          placeholder="Tamanho"
        />
        <input
          type="text"
          value={codigo}
          onChange={(evento) => setCodigo(evento.target.value)}
          placeholder="Código"
        />
        <input
          type="text"
          value={imagem}
          onChange={(evento) => setImagem(evento.target.value)}
          placeholder="URL da Imagem"
        />
        <br />
        <button type="submit">Alterar</button>
      </form>
    </main>
  );
}
