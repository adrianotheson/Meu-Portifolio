import { useState } from 'react'
import Filme from './../filme/Filme'
import './Main.css'
type FilmeType = {
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}

export default function Main() {
    //let textodigitado = 'Barbie'
    //Hooks são funções do React que ajudam a gente a fazer tarefas
    //específicas
    const [texto,setTexto]=useState("")

    const filmes:FilmeType[] = [
        {
            id:1,
            titulo:'Barbie',
            sinopse:"Bem-vindo ao mundo mágico da Barbie, onde os sonhos se tornam realidade! O site oficial da Barbie é o lugar perfeito para todas as fãs da boneca mais famosa do mundo. Aqui, você encontrará uma experiência digital encantadora que cativará crianças e adultos, transportando todos para o universo colorido e divertido da Barbie.",
            imagem:'/barbie-jojo.webp'
        },
        {
            id:2,
            titulo:'MangaCareca',
            sinopse:"Bem-vindo ao MangaMania, o seu portal online para explorar o incrível universo dos mangás japoneses. Se você é um fã fervoroso de mangás ou apenas está começando a descobrir esse mundo cativante, você veio ao lugar certo. MangaMania é o seu destino para mergulhar em histórias emocionantes, personagens fascinantes e arte deslumbrante.",
            imagem:'/saitama.png'
        },
        {
            id:3,
            titulo:'mangakás',
            sinopse:'Bem-vindo ao Mangaká Central, o seu espaço online dedicado aos artistas talentosos que criam os emocionantes mundos dos mangás japoneses. Se você é um mangaká aspirante ou estabelecido, este é o seu lugar para se conectar, aprender, compartilhar e prosperar em sua jornada artística.',
            imagem:'/kentaro-miura.jpg'
        },
        {
            id:4,
            titulo:'libras',
            sinopse:'Bem-vindo ao Curso de Língua Brasileira de Sinais (Libras) - Comunicação Inclusiva! Este curso foi cuidadosamente projetado para capacitar pessoas a aprenderem e dominarem a Língua Brasileira de Sinais, tornando-se proficientes na comunicação com a comunidade surda e promovendo inclusão e acessibilidade.',
            imagem:'/libras.png'
        },
        {
            id:5,
            titulo:'espanhol',
            sinopse:'Bem-vindo ao Curso de Espanhol: Aprenda a Língua e a Cultura! Este curso foi desenvolvido para pessoas de todas as idades e níveis de proficiência que desejam explorar a língua espanhola, abrir portas para novas oportunidades e mergulhar na rica cultura hispânica.',
            imagem:'/espanhol.png'
        },
        {
            id:6,
            titulo:'frança',
            sinopse:'Bem-vindo ao Curso de Francês: Explorando a Língua e a Cultura Francesa! Este curso é a porta de entrada para a língua do amor, da arte e da gastronomia. Se você deseja aprender francês para viajar, trabalhar, estudar ou simplesmente apreciar a cultura francesa, este é o lugar certo para começar.',
            imagem:'/fran;a.png'
        },
        {
            id:7,
            titulo:'IA',
            sinopse:'Bem-vindo ao Curso de Inteligência Artificial (IA) - Desenvolvendo o Futuro! Este curso é uma introdução abrangente ao emocionante mundo da IA, projetado para estudantes, profissionais e entusiastas que desejam compreender e aplicar os princípios fundamentais da IA em diversos campos.',
            imagem:'/inteligencia artificial.jpg'
        }
    ]

    //O parâmetro "e" da minha função será o meu evento que ocorreu
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        //console.log(e.target.value)
        //Como eu faço para mudar o texto para "TERE"
        setTexto(e.target.value)
    }
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
            <main className="content-main">
                {/* 
                    Use algo do vetor para tentar criar os filmes 
                */}
                {
                    filmes.filter((filme)=>filme.titulo.toLowerCase().includes(texto)).map(
                        (filme)=>
                            <Filme 
                                key={filme.id}
                                sinopse={filme.sinopse}
                                titulo={filme.titulo}
                                imagem={filme.imagem}
                            />
                    )
                }


            </main>
        </div>
        </>
    )
}