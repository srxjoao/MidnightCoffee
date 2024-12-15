import { Link } from "react-router-dom";
import '../global.css';
export default function Header(){
    return(
        <>
        <header>
            <img src=""></img>
        <nav>
            <ul>
                <Link to="/">
                <li>Home</li>
                </Link>
                <Link to="/Registro">
                <li>Cadastrar</li>
                </Link>
                <Link to="/oferta">
                <li>Ofertas</li>
                </Link>
            </ul>
        </nav>
        </header>
        </>
    )
}