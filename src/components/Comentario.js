import { useState, useEffect } from 'react';
import { useNavigate , Link } from 'react-router-dom'
import { IconUser, Heath } from './style.js'
import FotoPerfil from '../images/imagemusuariodefault.png';
import { BsHeartFill, BsHeart} from "react-icons/bs";
import axios from 'axios';

function Comentario(props){
    const [posicao,setPosicao] = useState('')
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
            if(typeof response.data[0]=='undefined'){
                setCurtido(false);
            }else{
                setCurtido(true);
            }
        })
    },[])

    return(
            <div>
                <center>
                    {props.foto == 'imagemusuariodefault.png'?
                    <IconUser src={FotoPerfil} onClick={() => navigate('/meuperfil')}/>: 
                    <IconUser src={props.foto} onClick={() => navigate('/meuperfil')}/>}
                    <p>{props.email}</p>
                    <p>{props.resposta}</p>
                    <p>{curtidas}</p>
                    <Heath>
                        {curtido ?
                            <BsHeartFill onClick={descurtirComentario}></BsHeartFill>:
                            <BsHeart onClick={curtirComentario}></BsHeart>
                        }
                    </Heath>
                </center>
            </div>
    );
}

export default Comentario;