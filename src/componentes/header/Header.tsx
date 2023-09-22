import './Header.css'
import Link from './../link/Link'
function Header(){
    return(
        <header>
            <div>
                <h1>console.log("Adriano-Filho");</h1>
            </div>
            <nav>
                <ul>
                    
                    <li>
                        <Link texto='Casa'/>
                    </li>
                    <li>
                        <Link texto='Trabalho'/>
                    </li>
                    <li>
                        <Link texto='Preferencias'/>
                    </li>
                    <li>
                        <Link texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header