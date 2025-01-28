import jsPDF from 'jspdf';
import 'jspdf-autotable'
import { useEffect, useState } from "react";
import Produtos from "../components/Produtos";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../style/homepage.module.css";
export default function Home() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    const buscarProdutos = async () => {
      try {
        const resposta = await fetch("http://localhost:3000/produtos");
        const dados = await resposta.json();
        setProdutos(dados);
      } catch {
        alert('A aplicação esta funcionando =)');
      }
    }
    buscarProdutos();
  }, [])
  const apagar = async(id) => {
    try{
    await  fetch("http://localhost:3000/produtos/" + id, {
    method: 'DELETE',
    });
    setProdutos(produtos.filter((produto) => produto.id !== id));
    }catch{
      alert("Ops ocorreu um erro, não esperado!")
    }
  }   
  const ordemAZ = () =>{
    const listaAux = [...produtos].sort((a,b)=> a.nome.localeCompare(b.nome));
    setProdutos(listaAux);
}

const ordemZA = () =>{
    const listaAux2 = [...produtos].sort((z,y)=> y.nome.localeCompare(z.nome));
    setProdutos(listaAux2)
}

const MenorPreco = () => {
    const listPreco = [...produtos].sort((a, b) => a.preco - b.preco);
    setProdutos(listPreco);
  }

  const MaiorPreco = () => {
    const listPrecoMaior = [...produtos].sort((a, b) => b.preco - a.preco);
    setProdutos(listPrecoMaior);
  };

         // Gera PDF
         const exportarPDF = () => {
         const doc = new jsPDF();
         const tabela = produtos.map( produtos => [
          produtos.id,
          produtos.nome,
          produtos.descricao,
          produtos.preco,
          produtos.categoria,
          produtos.disponibilidade,
          produtos.tamanho,
          produtos.codigo,
        ]);
        doc.text("Lista De Produtos | Midnight Coffee", 10, 10);
        doc.autoTable({
        head:[["Id","Nome", "Descrição", "Preço", "Categoria", "Disponibilidade","Tamanho", "Código", "Imagem"]],
        body: tabela
      });
      doc.save("Relatório_Midnight Coffee")
      }

  return (
  <main className={styles.homepage}>
    <Header/>
     <div className={styles.containerFilter} >
     <center>
      <button className={styles.butonFilter}  onClick={()=> ordemAZ()} >Filtrar produto de A a Z</button>
      <button className={styles.butonFilter}  onClick={()=> ordemZA()} >Filtrar produto de Z a A</button>
      <button className={styles.butonFilter}  onClick={()=> MenorPreco()}>Mennor Preço</button>
      <button className={styles.butonFilter}  onClick={()=>MaiorPreco ()}>Maior Preço</button>
      <button  className={styles.butonFilter}  onClick={() => exportarPDF()}> Gerar PDF</button>
      </center>
    </div>
    <Produtos produtos={produtos} apagar={apagar} />
    <Footer desenvolvedor={"Desenvolvido por João Pedro Oliveira 👨🏻‍💻🩵"}/>
  </main>
  );
}