import {useParams} from "react-router-dom";
export default function Alterar(){
    const {id}  = useParams();
   return(
    <>
    <h2>Págiana de Alteração de Produto {id} </h2>
    </>
   );
}