import axios from 'axios';
import { useEffect , useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Logo, FotoPerfilD , LayoutPosts, Nav, Titulo} from './style.js'
import Comentario from '../../components/Comentario.js'
import FotoPerfil from '../../images/imagemusuariodefault.png';
import { BsStar,BsStarFill } from "react-icons/bs";
import logo from "../../images/logofullbranca.png"
import CardPostagemGrande from '../../components/CardPostagemPequeno.js'

function PostagensFavoritas(){
    const [listaPostagem,setListaPostagem] = useState();
    const [usuario,setUsuario] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        axios.post(`http://localhost:3001/getfavoritos/${localStorage['useremail']}`).then((response)=>{
            setListaPostagem(response.data);
        })
        axios.get(`http://localhost:3001/getuser/${localStorage['useremail']}`).then((response)=>{
            setUsuario(response.data[0]);
            localStorage.setItem('userfoto',response.data[0].foto)
        })
    }, []);

    return(
        <>
            <Nav>
                <div>
                    <Logo src={logo}></Logo>
                </div>
                <div>
                    {usuario.foto == 'imagemusuariodefault.png'?
                    <FotoPerfilD src={FotoPerfil} onClick={() => navigate('/meuperfil')}></FotoPerfilD>: 
                    <FotoPerfilD src={usuario.foto} onClick={() => navigate('/meuperfil')}></FotoPerfilD>}
                </div>
            </Nav>
            <Titulo>Postagens Favoritas</Titulo>
            <LayoutPosts>
                {typeof listaPostagem !== "undefined" &&
                    listaPostagem.map((postagens) => {
                        return(
                            <CardPostagemGrande
                                key={postagens.id}
                                id={postagens.id}
                                titulo={postagens.titulo}
                                obra = {postagens.obra}
                                conteudo={postagens.conteudo}
                                autor={postagens.nome}
                                email={postagens.email}
                                foto={postagens.foto}
                                imagem={postagens.imagem}
                                background={postagens.bgimagem}
                                stars={postagens.stars}
                                comentarios={postagens.comentarios}
                            ></CardPostagemGrande>
                        )
                    })
                }
            </LayoutPosts>
        </>
    )
}

export default PostagensFavoritas;