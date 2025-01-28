import {Link} from 'react-router-dom'
import styles from '../style/containerProdutos.module.css'
export default function Produtos({produtos, apagar}){
 
  return(
      <div className={styles.containerProdutos}>
      {produtos.map((produtos) =>
        <div className={styles.produtos}  key={produtos.id} >
         <div>
          {produtos.image}
          <img src={produtos.imagem} style={{ width: "100px", height: "auto", borderRadius: "5px" }} />
        </div>
        <center>
          <p>Produto: {produtos.nome}</p>
          <p>Descrição: {produtos.descricao}</p>
          <p>R$ {produtos.preco}</p>
          <p>Categoria: {produtos.categoria}</p>
          <p>Disponibilidade: {produtos.disponibilidade}</p>
          <p>Tamanho: {produtos.tamanho}</p>
          <p>Codigo: {produtos.codigo}</p>
          </center>
          <center>
        <Link to={'/alterar/' + produtos.id}>
        <button className={styles.buttonAlter} >Alterar</button>
        </Link>
          <button className={styles.buttonDelete}  onClick={()=> apagar(produtos.id)}> Apagar  </button>
          </center>
        </div>
      )}
    </div>
  );
  }