import "./Footer.css";

export default function Footer() {
  return (
    <body>
      <div className="footer">
        <div className="contato">
          <p>Contato</p>
          <div className="reso">
            <p>
              Email:{" "}
              <a className="link" href="mailto:Adriano.Filhoemail@example.com">
                Adriano.Filhoemail@example.com
              </a>
            </p>
          </div>
          <div className="reso">
            <p>
              Instagram:{" "}
              <a
                className="link"
                href="https://www.instagram.com/Adriano.Filho_perfil"
                target="_blank"
              >
                @Adriano.Filho_perfil
              </a>
            </p>
          </div>
          <div className="reso">
            <p>
              Website:{" "}
              <a
                className="link"
                href="http://www.AdrianoMangasite.com"
                target="_blank"
              >
                www.AdrianoMangasite.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </body>
  );
}