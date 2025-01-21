import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Alterar(){}

  const {id} = useParams();
  //Novos Estados para realizar a alteração dos produtos por meio do id juntamente de um formuário
     const  [Alternome , setAlterNome] = useState('');
      const [Alterdescricao, setAlterDescricao] = useState('');
      const [Alterpreco, setAlterPreco] = useState('');
      const [Altercategoria, setAlterCategoria] = useState('');
      const [Alterdisponibilidade, setAlterDisponibilidade] = useState('');
      const [Altertamanho, setAlterTamanho] = useState('');
      const [Altercodigo, setAlterCodigo] = useState('');
      const [Alterimagem, setAlterImagem] = useState('');

       useEffect(() => {
        const busca = async()=>{
            const resposta = await fetch('http://localhost:3000/produtos'+ id );
            const dados = await resposta.json();
            setAlterNome(dados.nome);
            setAlterDescricao(dados.descricao);
            setAlterPreco(dados.preco);
            setAlterCategoria(dados.categoria);
            setAlterDisponibilidade(dados.disponibilidade);
            setAlterTamanho(dados.tamanho);
            setAlterCodigo(dados.codigo);
            setAlterImagem(dados.imagem);
        }
        busca();
    } ,[]);

    const alterar = async(event) => {
      event.preventDefault();
         try{
          await fetch('http://localhost:3000/produtos'+ id,),
              {
                  method: 'PUT',
                  headers: { 'Content-Type': 'Application/json'},
                  body: JSON.stringify({
                    nome: Alternome,
                    descricao: Alterdescricao,
                    preco: Alterpreco,
                    categoria: Altercategoria,
                    disponibilidade: Alterdisponibilidade,
                    tamanho: Altertamanho,
                    codigo: Altercodigo,
                    imagem: Alterimagem,
                  }),
                }
  return(

          <>

           <h3>Alterar Produto</h3>

            <form onSubmit={alterar}>
            <input type="text" value={Alternome} onChange={(evento)=> setAlterNome(evento.target.value)}/>
            <input type="text" value={Alterdescricao}onChange={(evento)=> setAlterDescricao(evento.target.value)}/>
            <input type="text" value={Alterpreco}onChange={(evento)=> setAlterPreco(evento.target.value)}/>
            <input type="text" value={Altercategoria}onChange={(evento)=> setAlterCategoria(evento.target.value)}/>
            <input type="text" value={Alterdisponibilidade}onChange={(evento)=> setAlterDisponibilidade(evento.target.value)}/>
            <input type="text" value={Altertamanho}onChange={(evento)=> setAlterTamanho(evento.target.value)}/>
            <input type="text" value={Altercodigo}onChange={(evento)=> setAlterCodigo(evento.target.value)}/>
            <input type="text" value={Alterimagem}onChange={(evento)=> setAlterImagem(evento.target.value)}/>
            <br/>
            <button onClick={alterar}>Alterar</button>
         </form>
         <button onClick={alterar}>Alterar</button>
         </>
  );
}