import { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
export default function Alterar(){
    const {id}  = useParams();
    const navagite = useNavigate();
    const [produto, setProdutos] = useState({
        nome: "",
        descricao: "",
        preco: "",
        categoria: "",
        disponibilidade: "",
        tamanho: "",
        codigo: "",
    });
        
         useEffect(() => {
         const buscarProdutos = async () => {
          try {
            const resposta = await fetch("http://localhost:3000/produtos");
            const dados = await resposta.json();
            setProdutos(dados);
          } catch{
            alert('Erro ao buscar produtos!');
          }
        };
        buscarProdutos();
      }, [id]);

   return(
    <>
    <h2>Págiana de Alteração de Produto {id} </h2>    
    </>
   );
}