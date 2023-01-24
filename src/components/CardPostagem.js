import { useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Bandeira, Imagem, Cardbottom, Titulo, Global,CardE, CardD, EnginePost,
    FotoPerfilPost, InfoPost, InfoStars, Star} from './styleCardGrande.js';
import { BiComment } from "react-icons/bi";
import { FaRegBookmark, FaBookmark } from 'react-icons/fa'
import { BsStar,BsStarFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import FotoPerfilPostagem from '../images/imagemusuariodefault.png';

function CardPostagem(props){
    const [favoritado,setFavoritado] = useState(false)
    const [engine, setEngine] = useState(false);

    function clickengine(){
        engine ? setEngine(false) : setEngine(true)
    }

    useEffect(()=>{
        axios.post("http://localhost:3001/validarfavoritos",{
            email: localStorage['useremail'],
            id: props.id
        }).then((response) => {
            response.data.length>0?setFavoritado(true):setFavoritado(false)
        })
    })

    return(
        <center>
            <Global>
                <Bandeira>
                    {favoritado?
                    <FaBookmark/>:
                    <FaRegBookmark/>}
                </Bandeira>
                <div>
                    <Titulo><p>{props.titulo}</p></Titulo>
                    <Imagem url={props.background}>
                        <div>
                            <p>{props.obra}</p>
                        </div>
                    </Imagem>
                    <Cardbottom>
                        <CardE>
                            <div>
                                {props.foto == 'imagemusuariodefault.png'?
                                <FotoPerfilPost src={FotoPerfilPostagem}></FotoPerfilPost>: 
                                <FotoPerfilPost src={props.foto}></FotoPerfilPost>}
                                <p>{props.autor}</p>
                            </div>
                        </CardE>
                        <CardD>
                            <InfoStars>
                                {props.stars != null ?
                                <Star>
                                    {props.stars>=1 ? <BsStarFill onClick={() => avaliar(1)}></BsStarFill> : <BsStar onClick={() => avaliar(1)}></BsStar>}
                                    {props.stars>=2 ? <BsStarFill onClick={() => avaliar(2)}></BsStarFill> : <BsStar onClick={() => avaliar(2)}></BsStar>}
                                    {props.stars>=3 ? <BsStarFill onClick={() => avaliar(3)}></BsStarFill> : <BsStar onClick={() => avaliar(3)}></BsStar>}
                                    {props.stars>=4 ? <BsStarFill onClick={() => avaliar(4)}></BsStarFill> : <BsStar onClick={() => avaliar(4)}></BsStar>}
                                    {props.stars>=5 ? <BsStarFill onClick={() => avaliar(5)}></BsStarFill> : <BsStar onClick={() => avaliar(5)}></BsStar>}
                                </Star>
                                : <p>Sem Avaliações</p> }
                            </InfoStars>
                            <InfoPost>
                                <BiComment/>
                                <p>{props.comentarios}</p>
                            </InfoPost>
                        </CardD>
                    </Cardbottom>
                </div>
            </Global>
       </center>
    );
}

export default CardPostagem;