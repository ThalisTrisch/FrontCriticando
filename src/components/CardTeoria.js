import { useNavigate , Link } from 'react-router-dom'
import { Global, BlocoUserTeoria, BlocoConteudoTeoria, BlocoAvaliacaoTeoria } from './style';
import { useState, useEffect } from 'react';
import axios from 'axios';
import FotoPerfilPostagem from '../images/imagemusuariodefault.png';

function CardTeoria(props){
    const [avaliacao, setAvaliacao] = useState();
    const [user,setUser] = useState();
    const navigate = useNavigate();

    function aprovar(){
        console.log("aprovar: ",localStorage['useremail'], props.id, props.numero)
        axios.post('http://localhost:3001/aprovarteoria',{
            email:localStorage['useremail'],
            id: props.id,
            numero: props.numero
        })
    }

    function reprovar(){
        console.log("reprovar: ",localStorage['useremail'], props.id, props.numero)
        axios.post('http://localhost:3001/reprovarteoria',{
            email:localStorage['useremail'],
            id: props.id,
            numero: props.numero
        })
    }
    
    useEffect(() => {
        axios.get(`http://localhost:3001/getuseravaliacoes/${localStorage['useremail']}/${props.numero}`)
        .then((resultado)=>{

        })
    }, [])

    return(
        <center>
            <Global>
                <table>
                    <tr>
                        <BlocoUserTeoria bgcolor="blue">
                            { props.foto == 'imagemusuariodefault.png' ?
                                <img src={FotoPerfilPostagem}></img>: 
                                <img src={props.foto}></img>
                            } 
                            <p>{props.autor}</p>
                        </BlocoUserTeoria>
                        <BlocoConteudoTeoria rowSpan={'2'} bgcolor="red">
                            <h3>{props.titulo}</h3>
                            <p>{props.conteudo}</p>
                        </BlocoConteudoTeoria>
                    </tr>
                    <tr>
                        <BlocoAvaliacaoTeoria bgcolor="yellow">
                            <div>
                                <button onClick={aprovar}>Aprovar</button>
                                <button onClick={reprovar}>Reprovar</button>
                            </div>
                            <div>
                                {avaliacao ?
                                    <p>Aceitação: {avaliacao}</p>
                                    : <p>Sem Avaliações</p>
                                }
                            </div>
                        </BlocoAvaliacaoTeoria>
                    </tr>
                </table>
            </Global>
        </center>
    );
}

export default CardTeoria;