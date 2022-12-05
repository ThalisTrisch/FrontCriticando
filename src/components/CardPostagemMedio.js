import { useNavigate , Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Bandeira, Imagem, Cardbottom, Titulo, GlobalMedio, PgTitulo, CardE, CardD, FotoPerfilPost, InfoPost, InfoStars} from './style';
import { BiComment, ImStarEmpty } from "react-icons/bi";
import { FaRegBookmark, FaBookmark } from 'react-icons/fa'
import FotoPerfilPostagem from '../images/imagemusuariodefault.png';

function CardPostagemMedio(props){
    const [favoritado,setFavoritado] = useState(false)
    const navigate = useNavigate();
    const rota = "/postagem/"+props.id;

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
        axios.post("http://localhost:3001/getfavoritos",{
            email: localStorage['useremail'],
            id: props.id
        }).then((response) => {
            response.data.length>0?setFavoritado(true):setFavoritado(false)
        })
    })

    return(
            <GlobalMedio>
                <Bandeira>
                    {favoritado?
                    <FaBookmark onClick={desfavoritar}/>:
                    <FaRegBookmark onClick={favoritar}/>}
                </Bandeira>
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
                            </InfoPost>
                        </CardD>
                    </Cardbottom>
                </Link>
            </GlobalMedio>
    );
}

export default CardPostagemMedio;