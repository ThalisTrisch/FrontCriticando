import { useState, useEffect } from 'react';
import { useNavigate , Link } from 'react-router-dom'
import { IconUser, BlocoComent, User, Conteudo, Opcoes} from './style.js'
import FotoPerfil from '../images/imagemusuariodefault.png';
import { BsHeartFill, BsHeart} from "react-icons/bs";
import { FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';

function Comentario(props){
    const [curtidas,setCurtidas] = useState(0)
    const [curtido,setCurtido] = useState(false)
    const navigate = useNavigate();

    const curtirComentario = async () => {
        const like = curtidas+1
        setCurtidas(like)
        setCurtido(true)
        await axios.post(`http://localhost:3001/curtircomentario`,{
            email: localStorage['useremail'],
            id: props.id,
            curtidas: like,
            posicao: props.posicao
        })
    }

    const descurtirComentario = async () => {
        const like = curtidas-1
        setCurtidas(like)
        setCurtido(false)
        await axios.post(`http://localhost:3001/descurtircomentario`,{
            email: localStorage['useremail'],
            id: props.id,
            curtidas: like,
            posicao: props.posicao
        })
    }

    useEffect(()=>{
        setCurtidas(props.curtidas)
        axios.post(`http://localhost:3001/getcurtido`,{
            email: localStorage['useremail'],
            id : props.id,
            posicao: props.posicao
        }).then((response)=>{
            response.data[0]?setCurtido(true):setCurtido(false)
        })
    },[])

    return(
        <BlocoComent>
            <User>
                {props.email == localStorage['useremail'] 
                    ?
                    <>
                        {props.foto == 'imagemusuariodefault.png'
                            ?<IconUser src={FotoPerfil} onClick={() => navigate('/meuperfil')}/> 
                            :<IconUser src={props.foto} onClick={() => navigate('/meuperfil')}/>
                        }
                    </>
                    :
                    <>
                        {props.foto == 'imagemusuariodefault.png'
                            ?<IconUser src={FotoPerfil} onClick={() => navigate('/perfil/'+props.email)}/> 
                            :<IconUser src={props.foto} onClick={() => navigate('/perfil/'+props.email)}/>
                        }
                    </>
                }
                <p>{props.nome}</p>
            </User>
            <Conteudo wrap="hard">
                <p>{props.resposta}</p>
            </Conteudo>
            <Opcoes>
                <div>
                    <p>{curtidas}</p>
                    {curtido ?
                        <BsHeartFill onClick={descurtirComentario}></BsHeartFill> :
                        <BsHeart onClick={curtirComentario}></BsHeart>
                    }
                </div>
                {props.email == localStorage['useremail'] &&
                    <FaTrashAlt onClick={() => props.deletar(props.posicao)} />
                }
            </Opcoes>
        </BlocoComent>
    );
}

export default Comentario;