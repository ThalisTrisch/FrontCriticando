import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect , useState } from 'react';
import { Logo, PerfilNav, FotoPerfilE , DadosPerfil , PostTitulo, ConfigPost, Editar, Deletar,
    AreaEditar, UploadImg, TopBar, CardInfoUser, InfoUser, InputRedes, SubmitEdit, InputDados,
    FormularioUpload, BtnDelete, Desc, Npost} from './style.js'
import CardPostagem from '../../components/CardPostagemEdit.js'
import FotoPerfil from '../../images/imagemusuariodefault.png';
import { storage } from '../../firebase.js';
import { ref , uploadBytesResumable , getDownloadURL } from 'firebase/storage';
import { FaTrashAlt } from 'react-icons/fa';
import { GrConfigure } from 'react-icons/gr';
import { TfiWrite} from 'react-icons/tfi';
import { BiComment } from "react-icons/bi";
import {AiOutlineUser, AiFillSetting} from "react-icons/ai"
import {FaLightbulb,FaCommentAlt,FaUser} from "react-icons/fa"
import {BsFillPencilFill} from "react-icons/bs"
import logo from '../../images/logotransparente.png'
import CreditBar from "../../components/CreditBar.js"

function EditarPerfil(){
    const navigate = useNavigate()
    const [redesSociais,setRedesSociais] = useState('');
    const [usuario,setUsuario] = useState('');
    const [dados,setDados] = useState('');
    const [listaPostagem, setListaPostagem] = useState(undefined);
    const [imagemURL, setImagemURL] = useState('');
    const now = new Date;

    function deletePostagem(obra){
        axios.post(`http://localhost:3001/deletarpostagem/${obra.id}/${obra.obra}`)
        setListaPostagem(listaPostagem.filter(postagem => postagem.id !== obra.id))
    }

    function deleteFoto(){
        axios.post('http://localhost:3001/deletarfoto/'+localStorage['useremail'])
        setImagemURL('');
        navigate('/editarperfil')
    }

    const mudarDadosUsuario = (value) => {
        setUsuario((prevPostagem) => ({
            ...prevPostagem,
            [value.target.name]: value.target.value
        }))
        console.log(value.target.name+": "+value.target.value)
    }

    const mudarDadosRedes = (value) => {
        setRedesSociais((prevPostagem) => ({
            ...prevPostagem,
            [value.target.name]: value.target.value
        }))
        console.log(value.target.name+": "+value.target.value)
    }

    function AtualizarDados(){
        axios.post(`http://localhost:3001/atualizardados`,{
            email: localStorage['useremail'],
            nome: usuario.nome,
            bio: usuario.biografia,
            instagram: redesSociais.instagram,
            facebook: redesSociais.facebook,
            twitter: redesSociais.twitter
        })
        alert("dados atualizados!")
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
                    localStorage.setItem('userfoto',url)
                    axios.post('http://localhost:3001/inserirfoto', {
                        email: localStorage['useremail'],
                        foto: url
                    })
                }))
            }
        )
    }

    useEffect(()=>{
        axios.get(`http://localhost:3001/getuser/${localStorage['useremail']}`).then((response) => {
            setUsuario(response.data[0])
        })
        axios.post('http://localhost:3001/getpostagem/meuperfil', {email: localStorage['useremail']}).then((response)=>{
            if(response.data.length > 0){
                setListaPostagem(response.data)
            }
        })
        axios.get('http://localhost:3001/getredessociais/'+localStorage['useremail']).then((response)=>{
            console.log(response.data[0])
            setRedesSociais(response.data[0])
        })
        axios.get(`http://localhost:3001/getdados/${localStorage['useremail']}`).then((response)=>{
            setDados(response.data)
            console.log(response.data)
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
                    <AiFillSetting onClick={() => navigate('/configuracoes')}></AiFillSetting>
                </div>
            </TopBar>
            <PerfilNav>
                <DadosPerfil>
                    <h2>{usuario.nome}</h2>
                    <p>{usuario.email}</p>
                    <div>{usuario.biografia}</div>
                    {imagemURL
                        ?<FotoPerfilE src={imagemURL}></FotoPerfilE>
                        :
                        <>
                            {usuario.foto == 'imagemusuariodefault.png'
                            ?<FotoPerfilE src={FotoPerfil}></FotoPerfilE>
                            : <FotoPerfilE src={usuario.foto}></FotoPerfilE>}
                        </>
                    }
                    <BtnDelete><FaTrashAlt onClick={deleteFoto}></FaTrashAlt></BtnDelete>
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
            <FormularioUpload>
                <form onSubmit={Uploadfoto}>
                    <UploadImg>
                        <label name='image'>
                        <span>Inserir foto de perfil</span>
                            <input type='file' name='image' />
                        </label>
                    </UploadImg>
                    <button type='submit'>enviar</button>
                </form>
            </FormularioUpload>
                <center>
                <PostTitulo>Editar Perfil</PostTitulo>
                <AreaEditar>
                    <InputDados>
                        <form>
                            <p>Nome:</p>
                            <input 
                                id='nomeinput'
                                type='text' 
                                name='nome' 
                                placeholder='Nome'
                                value={usuario.nome}
                                onChange={mudarDadosUsuario}
                            ></input><br/>
                            <p>Biografia:</p>
                            <input 
                                value={usuario.biografia}
                                id='bioinput'
                                type='text' 
                                name='biografia'
                                placeholder='Biografia'
                                onChange={mudarDadosUsuario}
                            ></input>
                        </form>
                    </InputDados>
                    <InputRedes>
                        <form>
                            <p>Instagram:</p>
                            <input 
                                value={redesSociais.instagram}
                                type='url' 
                                name='instagram' 
                                placeholder='https://www.instagram.com/nome_de_usuario'
                                onChange={mudarDadosRedes}
                            ></input><br/>
                            <p>Facebook:</p>
                            <input 
                                value={redesSociais.facebook}
                                type='url' 
                                name='facebook' 
                                placeholder='https://pt-br.facebook.com/nome_de_usuario'
                                onChange={mudarDadosRedes}
                            ></input><br/>
                            <p>Twitter:</p>
                            <input 
                                value={redesSociais.twitter}
                                type='url' 
                                name='twitter' 
                                placeholder='https://twitter.com/nome_de_usuario'
                                onChange={mudarDadosRedes}
                            ></input>
                        </form>
                    </InputRedes>
                </AreaEditar>
                <SubmitEdit><button onClick={AtualizarDados}>Salvar alterações</button></SubmitEdit>
                <center>
                <PostTitulo>Suas Postagens</PostTitulo>
                {listaPostagem == undefined
                    &&<Npost><p>Não há nenhuma postagem ainda</p></Npost>
                }
                </center>
                {listaPostagem &&
                    listaPostagem.map((postagens) => {
                        return(
                            <div>
                                <CardPostagem
                                    key={postagens.id}
                                    id={postagens.id}
                                    obra = {postagens.obra}
                                    titulo={postagens.titulo}
                                    conteudo={postagens.conteudo}
                                    autor={postagens.nome}
                                    email={postagens.email}
                                    foto={postagens.foto}
                                    imagem={postagens.imagem}
                                    background={postagens.bgimagem}
                                    stars={postagens.stars}
                                    comentarios={postagens.comentarios}
                                >
                                        <ConfigPost key={postagens.id}>
                                            <Editar onClick={() => navigate('/editarpostagem/'+postagens.id)}><GrConfigure></GrConfigure></Editar>
                                            <Deletar onClick={() => deletePostagem({id: postagens.id, obra: postagens.obra})}><FaTrashAlt/></Deletar>
                                        </ConfigPost>
                                </CardPostagem>
                            </div>
                        )
                    })
                }
            </center>
            <CreditBar></CreditBar>
        </div>
    )
}

export default EditarPerfil;