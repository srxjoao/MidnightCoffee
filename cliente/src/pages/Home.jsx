import { useEffect, useState } from "react";
import jsPDF from 'jspdf';
import 'jspdf-autotable'
import {Button} from "@mui/material"
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
export default function Home() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const buscarUsuario = async () => {
      try {
        const resposta = await fetch("http://localhost:3000/usuarios");
        const dados = await resposta.json();
        setUsuarios(dados);
      } catch {
        alert('Ocorreu um erro no app!');
      }
    }
    buscarUsuario();
  }, [usuarios])

  const apagar = async(id) => {
    try{
    await  fetch("http://localhost:3000/usuarios/"+ id, {
    method: 'DELETE',
    });
    }catch{
      alert("Desiste culpa do Marce Del Lino")
    }
   } 
   //Código trbalho final para gerar PDF
   const exportarPDF = () => {
    const doc = new jsPDF();
                  //Aki vai receber o nome do estado
    const tabela = usuarios.map( usuario => [
      usuario.id,
      usuario.nome,
      usuario.email
    ]);
    doc.text("Lista de Usuário", 10, 10);
    doc.autoTable({
    head:[["id","Nome", "E-mail"]],
    body: tabela
   });
   doc.save("alunosIFMS")
   }
   return (
    <div>
      <Button variant="contained" onClick={()=> exportarPDF()}> <PictureAsPdfIcon/> Gerar PDF</Button>
     <table>
      <tr>
        <td>Nome</td>
        <td>E-mail</td>
       </tr>
       {usuarios.map((usuario) =>
         <tr key={usuario.id}>
          <td>{usuario.nome}</td>
          <td>{usuario.email}</td>
          <td><button onClick={()=> apagar(usuario.id)}> Apagar  </button></td>
        </tr>
      )}
     </table>
     </div>
  );
}