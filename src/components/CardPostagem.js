import { useNavigate , Link } from 'react-router-dom'
import { useState } from 'react';
import { Imagem, Cardbottom, Titulo, Global, PgTitulo, ImgStar,CardE, CardD, FotoPerfilPost, InfoPost, InfoStars} from './style';
import Star from '../images/star.png'
import FotoPerfilPostagem from '../images/imagemusuariodefault.png';
import { BiBookmark, BiComment, ImStarEmpty } from "react-icons/bi";

function CardPostagem(props){
    const navigate = useNavigate();
    const rota = "/postagem/"+props.id;

    return(
        <center>
            <Global>
                <Link to={rota} className='link'>
                    <Titulo><PgTitulo>{props.titulo}</PgTitulo></Titulo>
                    <Imagem><img src={props.background}/></Imagem>
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
                                {props.stars == null ?
                                    <p>Sem Avaliações</p> :
                                    <p>stars: {props.stars}</p>
                                }
                            </InfoStars>
                            <InfoPost>
                                <BiComment/>
                                <p>{props.comentarios}</p>
                                <BiBookmark/>
                            </InfoPost>
                        </CardD>
                    </Cardbottom>
                    
                </Link>
            </Global>
        </center>
    );
}

export default CardPostagem;