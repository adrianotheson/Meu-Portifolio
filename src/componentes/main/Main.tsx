import Filme from './../filme/Filme'
import './Main.css'
export default function Main(){
    return(
              <>
                     <div>
                            <input type="text" className='botao_pesquisa' placeholder='pesquise um f' />
                            <p>digitado:</p>
                     </div>              
              

        <main className="content-main">
            <Filme titulo='Barbie' 
                   sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                   imagem='/barbie.png'
                   />
            <Filme titulo='Filme Barbie' 
                   sinopse='Depois de ser expulsa da 
                   Barbieland por ser.'
                   imagem='/KEN.png'
                   />
            <Filme titulo='Barbie' 
                   sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                   imagem='/barbie.png'
                   />
            <Filme titulo='Filme Barbie' 
                   sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                   imagem='/boneca.jpg'
                   />
            <Filme titulo='Barbie' 
                   sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                   imagem='/barbie.png'
                   />
            <Filme titulo='Filme Barbie' 
                   sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                   imagem='/boneca.jpg'
                   />
            <Filme titulo='Barbie' 
                   sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                   imagem='/barbie.png'
                   />
            <Filme titulo='Filme Barbie' 
                   sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                   imagem='/boneca.jpg'
                   />
            
        </main>
        </>
    )
}