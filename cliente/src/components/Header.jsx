import { Link } from "react-router-dom";
import styles from '../style/header.module.css'
export default function Header(){
    return(
        <>
        <header className={styles.header}>
           
            <img src="./public/logo.png"></img>
        <nav>
            <ul>
                <Link to="/">
                <li>Home</li>
                </Link>
                <Link to="/Registro">
                <li>Cadastrar</li>
                </Link>
                <Link to="/Alterar">
                <li>Alterar</li>
                </Link>
                <Link to="/Alterar">
                <li>Listar</li>
                </Link>
                <Link to="/Alterar">
                <li>Remover</li>
                </Link>
            </ul>
        </nav>
        </header>
        </>
    );
}