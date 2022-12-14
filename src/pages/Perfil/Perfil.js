import axios from 'axios';
import { Navigate , useNavigate } from 'react-router-dom';
import { useEffect , useState } from 'react';
import { PerfilNav, FotoPerfilE , DadosPerfil , PostTitulo, Menu} from './style.js'
import CardPostagem from '../../components/CardPostagemGrande.js'
import Logout from '../../components/Logout.js'
import FotoPerfil from '../../images/imagemusuariodefault.png';

function Perfil(){
    const navigate = useNavigate()
    const [usuario,setUsuario] = useState('');
    const [listaPostagem,setListaPostagem] = useState();

    useEffect(()=>{
        axios.post('http://localhost:3001/getusuario', {email: localStorage['useremail']})
        .then((message) => {setUsuario(message.data[0])})
        axios.post('http://localhost:3001/getpostagem/meuperfil', {email: localStorage['useremail']})
        .then((message) => {setListaPostagem(message.data)})
        document.title = 'Criticando - '+localStorage['usernome'];
    }, []);

    return(
        <div>
            <PerfilNav>
                <DadosPerfil>
                    <h2>{usuario.nome}</h2>
                    <p>{usuario.email}</p>
                    <div></div>
                    {usuario.foto == 'imagemusuariodefault.png'?
                    <FotoPerfilE src={FotoPerfil}></FotoPerfilE>: 
                    <FotoPerfilE src={usuario.foto}></FotoPerfilE>}
                </DadosPerfil>
                <div>
                </div>
                <Menu>
                    <button onClick={() => navigate('/')}>Postagens salvas</button><br></br>
                    <button onClick={() => navigate('/principal')}>principal</button><br></br>
                    <button onClick={() => navigate('/editarperfil')}>editar perfil</button><br></br>
                    <button>configurações</button><br></br>
                    <Logout></Logout>
                </Menu>
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