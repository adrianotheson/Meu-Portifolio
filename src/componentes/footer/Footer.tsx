import "./Footer.css";

export default function Footer() {
  return (
    <body>
      <div className="footer">
        <div className="contato">
          <h1>Contatos</h1>
          <div className="reso">
            <p>
              Email:{" "}
              <a
                className="link"
                href="mailto:adriano.filho@estudante.ifms.edu.br"
              >
                Adriano.Filho@estudante.ifms.edu.br
              </a>
            </p>
          </div>
          <div className="reso">
            <p>
              Instagram:{" "}
              <a
                className="link"
                href="https://www.instagram.com/AdrianoVieiraCairesFilho"
                target="_blank"
              >
                AdrianoVieiraCairesFilho
              </a>
            </p>
          </div>
          <div className="reso">
            <p>
              Fecebook:{" "}
              <a
                className="link"
                href="https://www.facebook.com/AdrianoVieiraCairesFilho"
                target="_blank"
              >
                Adriano Vieira Caires Filho
              </a>
            </p>
          </div>
          <div className="reso">
            <p>
              Linkedim:{" "}
              <a
                className="link"
                href="https://www.linkedin.com/AdrianoVieiraCairesFilho"
                target="_blank"
              >
                Adriano Vieira Caires Filho
              </a>
            </p>
          </div>
        </div>
      </div>
    </body>
  );
}
