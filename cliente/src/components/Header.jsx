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
            </ul>
        </nav>
        </header>
        </>
    );
}