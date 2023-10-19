import "./Footer.css";

interface SocialLink {
  label: string;
  url: string;
  text: string;
}

const socialLinks: SocialLink[] = [
  {
    label: 'Email',
    url: 'mailto:adriano.filho@estudante.ifms.edu.br',
    text: 'Adriano.Filho@estudante.ifms.edu.br',
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/AdrianoVieiraCairesFilho',
    text: 'AdrianoVieiraCairesFilho',
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/AdrianoVieiraCairesFilho',
    text: 'Adriano Vieira Caires Filho',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/AdrianoVieiraCairesFilho',
    text: 'Adriano Vieira Caires Filho',
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="contato">
        <h1>Contatos</h1>
        {socialLinks.map((link, index) => (
          <div className="reso" key={index}>
            <p>
              {link.label}:{' '}
              <a className="link" href={link.url} target="_blank" rel="noopener noreferrer">
                {link.text}
              </a>
            </p>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;