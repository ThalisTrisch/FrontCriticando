import axios from 'axios';
import { Navigate , useNavigate, useParams} from 'react-router-dom';
import { useEffect , useState } from 'react';
import { Logo, PerfilNav, FotoPerfilE , DadosPerfil , PostTitulo, InfoUser, TopBar, CardInfoUser, 
    Bio,IconsRedes, Desc, Follow, Unfollow} from './style.js'
import CardPostagem from '../../components/CardPostagemGrande.js'
import Logout from '../../components/Logout.js'
import FotoPerfil from '../../images/imagemusuariodefault.png';
import { BsInstagram,BsFacebook,BsTwitter } from 'react-icons/bs';
import { TfiWrite} from 'react-icons/tfi';
import { BiComment } from "react-icons/bi";
import {AiOutlineUser, AiFillSetting} from "react-icons/ai"
import {FaLightbulb} from "react-icons/fa"
import logo from '../../images/logotransparente.png'

function Perfil(){
    const {email} = useParams();
    const navigate = useNavigate();
    const [seguindo, setSeguindo] = useState(false)
    const [dados,setDados] = useState('');
    const [usuario,setUsuario] = useState('');
    const [listaPostagem,setListaPostagem] = useState();

    function seguir(){
        axios.post(`http://localhost:3001/seguirperfil`,{
            emailseguindo:usuario.email,
            emailseguidor:localStorage['useremail']
        })
        setSeguindo(true)
    }

    function cancelseguir(){
        axios.post(`http://localhost:3001/cancelseguirperfil`,{
            emailseguindo:usuario.email,
            emailseguidor:localStorage['useremail']
        })
        setSeguindo(false)
    }

    useEffect(()=>{
        axios.get(`http://localhost:3001/getuser/${email}`)
        .then((message) => {setUsuario(message.data[0])})
        axios.post('http://localhost:3001/getpostagem/meuperfil', {email: email})
        .then((message) => {setListaPostagem(message.data)})
        document.title = 'Criticando - '+localStorage['usernome'];
        axios.get(`http://localhost:3001/getdados/${email}`).then((response)=>{
            setDados(response.data)
        })
        axios.post('http://localhost:3001/verifseguidor', {emailseguindo: email, emailseguidor:localStorage['useremail']})
        .then((message) => {
            message.data.length!=0?setSeguindo(true):setSeguindo(false)
        })
    }, []);

    return(
        <div>
            <TopBar>
                <div>
                    <Logo onClick={() => navigate('/principal')} src={logo}></Logo>
                </div>
                <div>
                    <button onClick={() => navigate('/meuperfil')}>meu perfil</button>
                    <AiFillSetting></AiFillSetting>
                </div>
            </TopBar>
            <PerfilNav>
                <DadosPerfil>
                    <h2>{usuario.nome}</h2>
                    <Bio>{usuario.biografia}</Bio>
                    {usuario.foto == 'imagemusuariodefault.png'?
                    <FotoPerfilE src={FotoPerfil}></FotoPerfilE>: 
                    <FotoPerfilE src={usuario.foto}></FotoPerfilE>}
                    <IconsRedes>
                        {usuario.instagram !== "undefined" && usuario.facebook !== "undefined" && usuario.twitter !== "undefined" &&
                            <div>
                                {usuario.instagram !== "undefined" &&
                                    <a href={usuario.instagram} target="_blank"><BsInstagram></BsInstagram></a>
                                }
                                {usuario.facebook !== "undefined" &&
                                    <a href={usuario.facebook} target="_blank"><BsFacebook></BsFacebook></a>
                                }
                                {usuario.twitter !== "undefined" &&
                                    <a href={usuario.twitter} target="_blank"><BsTwitter></BsTwitter></a>
                                }
                            </div>
                        }
                        <div>
                            {seguindo 
                            ?<Unfollow onClick={cancelseguir}>Deixar de seguir</Unfollow>
                            :<Follow onClick={seguir}>Seguir</Follow>
                            }
                        </div>
                    </IconsRedes>
                </DadosPerfil>
                <InfoUser>
                <CardInfoUser>
                        <div>
                            <Desc>Postagens criadas</Desc>
                            <div><TfiWrite/><p>{dados.postagens}</p></div>
                        </div>
                        <div>
                            <Desc>Comentários em publicações</Desc>
                            <div><BiComment/><p>{dados.comentarios}</p></div>
                        </div>
                        <div>
                            <Desc>seguidores</Desc>
                            <div><AiOutlineUser/><p>{dados.seguidores}</p></div>
                        </div>
                        <div>
                            <Desc>teorias criadas</Desc>
                            <div><FaLightbulb/><p>{dados.teorias}</p></div>
                        </div>
                    </CardInfoUser>
                </InfoUser>
            </PerfilNav>
            
            <center>
            <PostTitulo>Postagens</PostTitulo>
            {typeof listaPostagem !== "undefined" &&
                listaPostagem.map((obras)=>{
                    return(
                        <CardPostagem
                            key={obras.id}
                            id={obras.id}
                            titulo={obras.titulo}
                            conteudo={obras.conteudo}
                            obra = {obras.obra}
                            autor={obras.nome}
                            email={obras.email}
                            foto={obras.foto}
                            imagem={obras.imagem}
                            background={obras.bgimagem}
                            stars={obras.stars}
                            comentarios={obras.comentarios}
                        ></CardPostagem>
                    )
                })
            }
            </center>
        </div>
    )
}

export default Perfil;