import { useEffect, useState } from 'react';
import axios from 'axios';
import Login from '../../components/Login'
import { Image, Nav, Logo, MenuBar, BackLogin, Msg , Shadow, Apresentacao, Clouds, CloudText,
    BestPosts,BestUsers, Bemvindo, SecondPlace, FirstPlace, ThirdPlace, ImagePost, Podium,
    TituloUsuarios, MelhoresPostagens, MsgDefault, Npost} from './style.js'
import imagem from '../../images/backgroundhome.png'
import clouds from '../../images/nuvens.png'
import CardPostagemGrande from '../../components/CardPostagem.js'
import { FaInfoCircle } from "react-icons/fa";
import logo from '../../images/logotransparente.png'
import {IoMdTrophy} from "react-icons/io"
import FotoPerfil from '../../images/imagemusuariodefault.png';
import CreditBar from '../../components/CreditBar.js'
import { useNavigate } from 'react-router-dom';

function Home(){
    const [melhoresPostagens,setMelhoresPostagens] = useState(undefined);
    const [melhoresUsuarios,setMelhoresUsuarios] = useState();
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get('http://localhost:3001/getmelhorespostagens').then((res) => {
            if(res.data.length>0){
                setMelhoresPostagens(res.data)
            }
        })
        axios.get('http://localhost:3001/getmelhoresusuarios').then((res) => {
            setMelhoresUsuarios(res.data)
        })
    },[])

    return(
        <div>
            <Image src={imagem}/>
            <Shadow></Shadow>
            <Nav>
                <Logo src={logo}></Logo>
                <FaInfoCircle onClick={() => navigate('/informacoes')}/>
            </Nav>
            <Bemvindo>
                <div>
                    <Msg>Bem vindo ao Criticando!</Msg>
                </div>
                <div>
                    <BackLogin>
                        <h2>Login</h2>
                        <Login></Login>
                        <p>Para entrar, faça login com o google</p>
                    </BackLogin>
                </div>
            </Bemvindo>
            <Apresentacao>
                <div>
                    <h2>Ao criar uma conta você terá acesso a maior plataforma <br></br> críticas à obras da internet. Assim poderá:</h2>
                </div>
            </Apresentacao>
            <Clouds>
               <img src={clouds}></img>
            </Clouds>
            <center><MelhoresPostagens>Melhores Postagens</MelhoresPostagens></center>
            {melhoresPostagens == undefined
                && <Npost><p>Sem nenhuma postagem ainda</p></Npost>
            }
            <BestPosts> 
                {melhoresPostagens &&
                    melhoresPostagens.map((postagens) => {
                        return(
                            <CardPostagemGrande
                                key={postagens.id}
                                id={postagens.id}
                                titulo={postagens.titulo}
                                conteudo={postagens.conteudo}
                                autor={postagens.nome}
                                obra = {postagens.obra}
                                email={postagens.email}
                                foto={postagens.foto}
                                imagem={postagens.imagem}
                                background={postagens.bgimagem}
                                stars={postagens.stars}
                                comentarios={postagens.comentarios}
                            />
                        )
                    })
                }
            </BestPosts>
                <BestUsers>
                    <h1>Usuários mais engajados</h1>
                    {melhoresUsuarios ?
                    <>
                    <SecondPlace svgcolor={'silver'}>
                        <div>
                            {melhoresUsuarios[1] ?
                                <>
                                    {melhoresUsuarios[1].foto == 'imagemusuariodefault.png'?
                                    <ImagePost src={FotoPerfil}/>: 
                                    <ImagePost src={melhoresUsuarios[1].foto}/>}
                                    <div>
                                        <p>{melhoresUsuarios[1].nome}</p>
                                        <IoMdTrophy></IoMdTrophy>
                                    </div>
                                </> : <p>Posição vazia</p>
                            }
                        </div>
                        <Podium color={'silver'} tamanho={'220px'}><p>2º lugar</p></Podium>
                    </SecondPlace>
                    <FirstPlace svgcolor={'gold'}>
                        <div>
                            {melhoresUsuarios[0] ?
                                <>
                                    {melhoresUsuarios[0].foto == 'imagemusuariodefault.png'?
                                    <ImagePost src={FotoPerfil}/>: 
                                    <ImagePost src={melhoresUsuarios[0].foto}/>}
                                    <div>
                                        <p>{melhoresUsuarios[0].nome}</p>
                                        <IoMdTrophy></IoMdTrophy>
                                    </div>
                                    
                                </> : <p>Posição vazia</p>
                            }
                        </div>
                        <Podium color={'gold'} tamanho={'260px'}><p>1º lugar</p></Podium>
                    </FirstPlace>
                    <ThirdPlace svgcolor={'rgb(205, 127, 50)'}>
                        <div>
                            {melhoresUsuarios[2] ? 
                                <>
                                    {melhoresUsuarios[2].foto == 'imagemusuariodefault.png'?
                                    <ImagePost src={FotoPerfil}/>: 
                                    <ImagePost src={melhoresUsuarios[2].foto}/>}
                                    <div>
                                        <p>{melhoresUsuarios[2].nome}</p>
                                        <IoMdTrophy></IoMdTrophy>
                                    </div>
                                </> : <p>Posição vazia</p>
                            }
                        </div>
                        <Podium color={'brown'} tamanho={'180px'}><p>3º lugar</p></Podium>
                    </ThirdPlace>
                    </>
                    : <center><MsgDefault>Não há usuários no ranking ainda</MsgDefault></center>}
                </BestUsers>
            <CreditBar></CreditBar>
        </div>
    )
}

export default Home;