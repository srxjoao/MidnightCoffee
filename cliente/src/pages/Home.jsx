  import { useEffect, useState } from "react";
  import jsPDF from 'jspdf';
  import 'jspdf-autotable'
  import {Button} from "@mui/material"
  import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
  import Produtos from "../components/Produtos";
  import Header from "../components/Header"
  export default function Home() {

    const [produtos, setProdutos] = useState([]);
    
  
    useEffect(() => {
      const buscarUsuario = async () => {
        try {
          const resposta = await fetch("http://localhost:3000/produtos");
          const dados = await resposta.json();
          setProdutos(dados);
        } catch {
          alert('A aplicação esta funcionando =)');
        }
      }
      buscarUsuario();
    }, [produtos])

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
      head:[["id","Nome", "Descrição", "Preço", "Categoria", "Disponibilidade","Tamanho", "Código", "Imagem"]],
      body: tabela
    });
    doc.save("Relatório_Midnight Coffee")
    }

    return (
    <main>
      <Header/>
      <Button variant="contained" onClick={()=> exportarPDF()}> <PictureAsPdfIcon/> Gerar PDF</Button>
      <Produtos produtos={produtos}/>
    </main>
    );
  }