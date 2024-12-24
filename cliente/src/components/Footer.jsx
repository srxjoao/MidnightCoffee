import styles from '../style/footer.module.css'                                                         
export default function Footer ({desenvolvedor}){
    return(
        <footer className={styles.footer}>
            <ul>
                <center>
                <a className={styles.dev}  href="https://www.linkedin.com/in/srxjoao1/" >
                    {desenvolvedor}
                </a> <br/>
                <p className={styles.dev} >𝖢𝖺𝗎𝗌𝖾 𝖺 𝗐𝗂𝗇𝗇𝖾𝗋 𝖽𝗈𝗇'𝗍 𝗊𝗎𝗂𝗍 𝗈𝗇 𝗍𝗁𝖾𝗆𝗌𝖾𝗅𝗏𝖾s.</p>
                </center>
            </ul>
        </footer>
    )
}