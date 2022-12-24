import { useEffect, useState } from 'react';
import axios from 'axios';
import Login from '../../components/Login'
import { Image, Nav, Logo, MenuBar, BackLogin, Msg , Shadow, Apresentacao, Clouds, CloudText,
    BestPosts,BestUsers } from './style.js'
import imagem from '../../images/backgroundhome.png'
import FotoPerfil from '../../images/imagemusuariodefault.png';
import CardPostagemGrande from '../../components/CardPostagemGrande.js'
import { BiMenu } from "react-icons/bi";
import { ImCloud } from "react-icons/im";

function Home(){
    const [melhoresPostagens,setMelhoresPostagens] = useState();
    const [melhoresUsuarios,setMelhoresUsuarios] = useState();

    useEffect(()=> {
        axios.get('http://localhost:3001/getmelhorespostagens').then((res) => {
            setMelhoresPostagens(res.data)
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
                <Logo>Logo</Logo>
                <MenuBar><BiMenu/></MenuBar>
            </Nav>
            <Msg>Bem vindo ao Criticando!</Msg>
            <BackLogin>
                <h2>Login</h2>
                <Login></Login>
                <p>Para entrar, faça login com o google</p>
            </BackLogin>
            <Apresentacao>
            <h2>Ao criar uma conta você terá acesso à maior plataforma <br></br> críticas à obras da internet. Assim poderá:</h2>
            </Apresentacao>
            <Clouds>
                <div>
                    <CloudText>Criar teorias</CloudText>
                    <ImCloud></ImCloud>
                </div>
                <div>
                    <CloudText>Ver outras críticas</CloudText>
                    <ImCloud></ImCloud>
                </div>
                <div>
                    <CloudText>interagir com <br></br>outros usuários</CloudText>
                    <ImCloud></ImCloud>
                </div>
                <div>
                    <CloudText>personalizar perfil</CloudText>
                    <ImCloud></ImCloud>
                </div>
                <div>
                    <CloudText>ter visibilidade</CloudText>
                    <ImCloud></ImCloud>
                </div>
                <div>
                    <CloudText>Criar teorias</CloudText>
                    <ImCloud></ImCloud>
                </div>
            </Clouds>
            <BestPosts>
                <h1>Melhores Postagens</h1>
                { typeof melhoresPostagens !== "undefined" ?
                    melhoresPostagens.map((postagens) => {
                        return(
                            <CardPostagemGrande
                                key={postagens.id}
                                id={postagens.id}
                                titulo={postagens.titulo}
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
                    }):<p>Sem nenhuma postagem ainda</p>
                }
            </BestPosts>
            <BestUsers>
                <h1>Usuários mais engajados</h1>
                {typeof melhoresUsuarios !== "undefined" ?
                    melhoresUsuarios.map((user) => {
                        return(
                            <p key={user.email}>melhores users:{user.nome}</p>
                        )
                    })
                    : <p>Não há usuários</p>
                }
            </BestUsers>
        </div>
    )
}

export default Home;