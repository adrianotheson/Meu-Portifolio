import './Dados.css'
type FilmeProps = {
    nome:string,
    email:string,
    imagem:string,
    descricao:string
}
function Filme(props:FilmeProps){
    return(
        <div className="filme-content">
            <div className="foto_filme">
                <img className="img-filme" src={props.imagem} alt="" />
            </div>
            <div className="text-barbie">
                <h1>{props.nome}</h1>
                <h2>{props.email}</h2>
                <p className="sinopse">{props.descricao}</p>
            </div>
        </div>
    )
}
export default Filme