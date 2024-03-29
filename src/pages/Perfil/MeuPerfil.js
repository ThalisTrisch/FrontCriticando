import axios from 'axios';
import { Navigate , useNavigate } from 'react-router-dom';
import { useEffect , useState } from 'react';
import { Logo, PerfilNav, FotoPerfilE , DadosPerfil , PostTitulo, InfoUser, TopBar, CardInfoUser, 
    Bio,IconsRedes, Desc, Npost } from './style.js'
import CardPostagem from '../../components/CardPostagemGrande.js'
import FotoPerfil from '../../images/imagemusuariodefault.png';
import { BsInstagram,BsFacebook,BsTwitter } from 'react-icons/bs';
import { AiFillSetting} from "react-icons/ai"
import {FaLightbulb,FaCommentAlt,FaUser} from "react-icons/fa"
import {BsFillPencilFill} from "react-icons/bs"
import logo from '../../images/logotransparente.png'
import CreditBar from "../../components/CreditBar.js"

function MeuPerfil(){
    const navigate = useNavigate()
    const [dados,setDados] = useState('');
    const [usuario,setUsuario] = useState('');
    const [listaPostagem,setListaPostagem] = useState(undefined);

    useEffect(()=>{
        axios.get(`http://localhost:3001/getuser/${localStorage['useremail']}`)
        .then((message) => {setUsuario(message.data[0])})
        axios.post('http://localhost:3001/getpostagem/meuperfil', {email: localStorage['useremail']})
        .then((response) => {
            if(response.data.length > 0){
                setListaPostagem(response.data);
            }
        })
        document.title = 'Criticando - '+localStorage['usernome'];
        axios.get(`http://localhost:3001/getdados/${localStorage['useremail']}`).then((response)=>{
            setDados(response.data)
        })
    }, []);

    return(
        <div>
            <TopBar>
                <div>
                    <Logo onClick={() => navigate('/principal')} src={logo}></Logo>
                </div>
                <div>
                    <button onClick={() => navigate('/editarperfil')}>editar perfil</button>
                    <button onClick={() => navigate(`/postagensfavoritas/${localStorage['useremail']}`)}>Postagem favoritas</button><br></br>
                    <AiFillSetting onClick={() => navigate('/configuracoes')}></AiFillSetting>
                </div>
            </TopBar>
            <PerfilNav>
                <DadosPerfil>
                    <h2>{usuario.nome}</h2>
                    <p>{localStorage['useremail']}</p>
                    <Bio>{usuario.biografia}</Bio>
                    {usuario.foto == 'imagemusuariodefault.png'?
                    <FotoPerfilE src={FotoPerfil}></FotoPerfilE>: 
                    <FotoPerfilE src={usuario.foto}></FotoPerfilE>}
                    <IconsRedes>
                        <div>
                            {usuario.instagram &&
                                <a href={usuario.instagram} target="_blank"><BsInstagram></BsInstagram></a>
                            }
                            {usuario.facebook &&
                                <a href={usuario.facebook} target="_blank"><BsFacebook></BsFacebook></a>
                            }
                            {usuario.twitter &&
                                <a href={usuario.twitter} target="_blank"><BsTwitter></BsTwitter></a>
                            }
                        </div>
                    </IconsRedes>
                </DadosPerfil>
                <InfoUser>
                    <CardInfoUser>
                        <div>
                            <Desc>Postagens criadas</Desc>
                            <div><BsFillPencilFill/><p>{dados.postagens}</p></div>
                        </div>
                        <div>
                            <Desc>Comentários em publicações</Desc>
                            <div><FaCommentAlt/><p>{dados.comentarios}</p></div>
                        </div>
                        <div>
                            <Desc>seguidores</Desc>
                            <div><FaUser/><p>{dados.seguidores}</p></div>
                        </div>
                        <div>
                            <Desc>teorias criadas</Desc>
                            <div><FaLightbulb/><p>{dados.teorias}</p></div>
                        </div>
                    </CardInfoUser>
                </InfoUser>
            </PerfilNav>
            <center>
            <PostTitulo>Suas Postagens</PostTitulo>
            {listaPostagem == undefined
                && <Npost><p>Não há nenhuma postagem ainda</p></Npost>
            }
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
            <CreditBar></CreditBar>
        </div>
    )
}

export default MeuPerfil;