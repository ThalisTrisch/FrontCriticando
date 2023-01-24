import { useNavigate , Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Imagem, Cardbottom, Global, Obra, Titulo, CardE, CardD, InfoStars, InfoPost, FotoPerfilPost,
    Star, Bandeira } from './styleCardExtraGrande.js';
import { BiComment } from "react-icons/bi";
import { FaRegBookmark, FaBookmark } from 'react-icons/fa'
import { BsStar,BsStarFill } from "react-icons/bs";
import FotoPerfilPostagem from '../images/imagemusuariodefault.png';

function CardPostagemExtraGrande(props){
    const [favoritado,setFavoritado] = useState(false)
    const navigate = useNavigate();

    function verPostagem(){
        const rota = "/postagem/"+props.id;
        navigate(rota);
    }

    function favoritar(){
        axios.post("http://localhost:3001/favoritar",{
            email: localStorage['useremail'],
            id: props.id
        })
        setFavoritado(true)
    }

    function desfavoritar(){
        axios.post("http://localhost:3001/desfavoritar",{
            email: localStorage['useremail'],
            id: props.id
        })
        setFavoritado(false)
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
            <Global onClick={verPostagem}>
                <Imagem url={props.background}>
                    <Obra><p>{props.obra}</p></Obra>
                    <Titulo><p>{props.titulo}</p></Titulo>
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
                                <Bandeira>
                                    {favoritado?
                                    <FaBookmark onClick={desfavoritar}/>:
                                    <FaRegBookmark onClick={favoritar}/>}
                                </Bandeira>
                            </InfoPost>
                        </CardD>
                    </Cardbottom>
            </Global>
        </center>
    );
}

export default CardPostagemExtraGrande;