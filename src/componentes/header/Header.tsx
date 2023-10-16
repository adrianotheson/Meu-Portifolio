import "./Header.css";
import LinkNav from "../LinkNav/LinkNav";
function Header() {
  return (
    <header>
      <div>
        <h1>console.log("Adriano-Filho");</h1>
      </div>
      <nav>
        <ul>
          <li>
            <LinkNav texto="Casa" url="/" />
          </li>
          <li>
            <LinkNav texto="Trabalhos" url="/contatos" />
          </li>
          <li>
            <LinkNav texto="Preferencias" url="/contatos" />
          </li>
          <li>
            <LinkNav texto="Contatos" url="/contatos" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
