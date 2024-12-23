import {Link} from 'react-router-dom'
export default function Produtos({produtos}){
      const apagar = async(id) => {
          try{
          await  fetch("http://localhost:3000/produtos/" + id, {
          method: 'DELETE',
          });
          }catch{
            alert("Ops ocorreu um erro, não esperado!")
          }
        }    
  return(
      <div>
      {produtos.map((produtos) =>
        <div className='produtos' key={produtos.id} >
         <div>
          {produtos.image}
          <img src={produtos.imagem} style={{ width: "100px", height: "auto", borderRadius: "5px" }} />
        </div>
          <p>{produtos.nome}</p>
          <p>{produtos.descricao}</p>
          <p>{produtos.preco}</p>
          <p>{produtos.categoria}</p>
          <p>{produtos.disponibilidade}</p>
          <p>{produtos.tamanho}</p>
          <p>{produtos.codigo}</p>
        <Link to={'/alterar/' + produtos.id}>
        <button>Alterar</button>
        </Link>
          <button onClick={()=> apagar(produtos.id)}> Apagar  </button>
        </div>
      )}
    </div>
  );
  }