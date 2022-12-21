import axios from 'axios';
import { Navigate , useNavigate } from 'react-router-dom';
import { useEffect , useState } from 'react';
import { PerfilNav, FotoPerfilE , DadosPerfil , PostTitulo, Menu, ConfigPost} from './style.js'
import CardPostagem from '../../components/CardPostagemGrande'
import Logout from '../../components/Logout.js'
import FotoPerfil from '../../images/imagemusuariodefault.png';
import { storage } from '../../firebase.js';
import { ref , uploadBytesResumable , getDownloadURL } from 'firebase/storage';

function EditarPerfil(){
    const navigate = useNavigate()
    const [usuario,setUsuario] = useState('');
    const [listaPostagem,setListaPostagem] = useState();
    const [imagemURL,setImagemURL] = useState('');
    const now = new Date

    useEffect(()=>{
        axios.get(`http://localhost:3001/getuser/${localStorage['useremail']}`).then((message) => {
            setUsuario(message.data[0])
        })
        axios.post('http://localhost:3001/getpostagem/meuperfil', {email: localStorage['useremail']})
        .then((message) => {setListaPostagem(message.data)})
    }, []);

    function deletePostagem(obra){
        axios.post(`http://localhost:3001/deletarpostagem/${obra.id}/${obra.obra}`)
        setListaPostagem(listaPostagem.filter(postagem => postagem.id !== obra.id))
    }

    function deleteFoto(){
        axios.post('http://localhost:3001/deletarfoto/'+localStorage['useremail'])
        setImagemURL('');
    }

    const Uploadfoto = (event) => {
        event.preventDefault();
        console.log(event.target[0]?.files[0])
        const file = event.target[0]?.files[0];
        if(!file) return;
        const filename = file.name+`(${now.getHours()}hour:${now.getMinutes()}min:${now.getSeconds()}sec_${now.getDate()}|${now.getMonth()+1}|${now.getFullYear()})`;
        console.log(filename)
        const storageRef = ref(storage, `foto/${filename}`)
        const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {alert(error)},
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url=>{
                    setImagemURL(url);
                    axios.post('http://localhost:3001/inserirfoto', {
                        email: localStorage['useremail'],
                        foto: url
                    })
                }))
            }
        )
    }
    return(
        <div>
            <PerfilNav>
                <DadosPerfil>
                    <h2>{usuario.nome}</h2>
                    <p>{usuario.email}</p>
                    <div></div>
                    {imagemURL != '' ?
                        <FotoPerfilE src={imagemURL}></FotoPerfilE> :
                        <div>
                            {usuario.foto == 'imagemusuariodefault.png'?
                            <FotoPerfilE src={FotoPerfil}></FotoPerfilE>: 
                            <FotoPerfilE src={usuario.foto}></FotoPerfilE>}
                        </div>
                    }
                </DadosPerfil>
                <div>
                </div>
                <Menu>
                    <button onClick={() => navigate('/principal')}>principal</button><br></br>
                    <button onClick={() => navigate('/meuperfil')}>perfil</button><br></br>
                    <button>configurações</button><br></br>
                    <Logout></Logout>
                </Menu>
            </PerfilNav>
            <center>
            <form onSubmit={Uploadfoto}>
                <input type='file' name='image'/>
                <button type='submit'>enviar imagem</button>
            </form>
            <div>
                
            </div>
            <button onClick={deleteFoto}>excluir foto</button>
            <PostTitulo>Suas postagens</PostTitulo>
            {typeof listaPostagem !== "undefined" &&
                listaPostagem.map((obras)=>{
                    return(
                        <div  key={obras.id}>
                            <CardPostagem
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
                            <ConfigPost>
                                <button>engine</button>
                                <button>editar</button>
                                <button onClick={() => deletePostagem({id: obras.id, obra: obras.obra})}>Deletar</button>
                            </ConfigPost>
                        </div>
                    )
                })
            }
            </center>
        </div>
    )
}

export default EditarPerfil;