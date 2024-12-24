export default function Footer ({desenvolvedor}){
    return(
        <footer className="rodape">
            <ul>
                <center>
                <a className="dev"  href="https://www.linkedin.com/in/srxjoao1/" >
                    {desenvolvedor}
                </a> <br/>
                <p>𝖢𝖺𝗎𝗌𝖾 𝖺 𝗐𝗂𝗇𝗇𝖾𝗋 𝖽𝗈𝗇'𝗍 𝗊𝗎𝗂𝗍 𝗈𝗇 𝗍𝗁𝖾𝗆𝗌𝖾𝗅𝗏𝖾𝗌.</p>
                </center>
            </ul>
        </footer>
    )
}