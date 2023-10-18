import './Contatos.css'

// import LinkNav from '../LinkNav/LinkNav'

import { useState } from 'react'


export default function Main() {
    //let textodigitado = 'Barbie'
    //Hooks são funções do React que ajudam a gente a fazer tarefas
    //específicas
    const [texto,setTexto]=useState("")


    //O parâmetro "e" da minha função será o meu evento que ocorreu
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        //console.log(e.target.value)
        //Como eu faço para mudar o texto para "TERE"
        setTexto(e.target.value)
    }

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        cpf: '',
        comoSoube: '',
      });
    
      const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e: any) => {
        e.preventDefault();
        // Faça algo com os dados do formulário, por exemplo, envie para um servidor
        console.log('Dados do formulário:', formData);
      };

    return (
        <>
        <div className='fundo'>
            <div className="campo_pesquisa">
                <p>Busque um Projeto ou Curso</p>
                <input type="text" 
                       className='botao_pesquisa'
                       placeholder='Pesquise'
                       onChange={TrataTexto} />
                {texto && <p>Resultados Para: {texto} </p>}
            </div>
            
            <div className='contat'>
      <h1>Formulário</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            value={formData.cpf}
            onChange={handleChange}
          />
        </div>
        <div>
          <select name="comoSoube" value={formData.comoSoube} onChange={handleChange}>
            <option value="" disabled>Como soube sobre nós</option>
            <option value="Amigos">Amigos</option>
            <option value="Internet">Internet</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div>
          <button type='submit'>Enviar</button>
        </div>
      </form>
    </div>
        </div>

        <div>Nome: {formData.nome}</div>
        <div>Email: {formData.email}</div>
        <div>CPF: {formData.cpf}</div>
        <div>Como soube: {formData.comoSoube}</div>
        </>
    )
}