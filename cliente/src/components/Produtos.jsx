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
    <table>
    <tr>
        <td>Nome</td>
        <td>Descricao</td>
        <td>Preço</td>
        <td>Categoria</td>
        <td>Disponibilidade</td>
        <td>Tamanho</td>
        <td>Codigo</td>
        <td>Imagem</td>
      </tr>
      {produtos.map((produtos) =>
        <tr key={produtos.id}>
          <td>{produtos.nome}</td>
          <td>{produtos.descricao}</td>
          <td>{produtos.preco}</td>
          <td>{produtos.categoria}</td>
          <td>{produtos.disponibilidade}</td>
          <td>{produtos.tamanho}</td>
          <td>{produtos.codigo}</td>
          <td>
            {produtos.image}
          <img 
          src={produtos.imagem} 
          style={{ width: "100px", height: "auto", borderRadius: "5px" }} 
          />
        </td>
        <Link to={'/alterar/' + produtos.id}>
        <button>Alterar</button>
        </Link>
          <td><button onClick={()=> apagar(produtos.id)}> Apagar  </button></td>
        </tr>
      )}
    </table>
    </div>
  );
  }