import axios from 'axios';
import { useEffect , useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LogoEditar, NavEditar, CampoMaior, Campo, EditarPost} from './style.js'
import Comentario from '../../components/Comentario.js'
import FotoPerfil from '../../images/imagemusuariodefault.png';
import { BsStar,BsStarFill } from "react-icons/bs";


function EditarPostagem(){
    const [titulo, setTitulo] =  useState('');
    const [conteudo, setConteudo] =  useState('');
    const [usuario,setUsuario] = useState('');
    const navigate = useNavigate()
    const {id} = useParams()
    document.title = 'Editar Postagem - postagem '+id;
   
    const mudarTitulo = (e) => {setTitulo(e.target.value)}
    const mudarConteudo = (e) => {setConteudo(e.target.value)}

    function editarPostagem(){
        axios.post(`http://localhost:3001/editarpostagem/${id}`,{
            titulo: titulo,
            conteudo: conteudo
        })
        navigate('/editarperfil')
    }

    useEffect(()=>{
        axios.get(`http://localhost:3001/getpostagem/${id}/${localStorage['useremail']}`).then((response)=>{
            localStorage.setItem('userfoto',response.data[0].foto)
            setTitulo(response.data[0].titulo)
            setConteudo(response.data[0].conteudo)
        })
        axios.get(`http://localhost:3001/getuser/${localStorage['useremail']}`).then((response)=>{
            setUsuario(response.data[0]);
        })
    }, []);

    return(
        <EditarPost>
            <NavEditar>
                <LogoEditar>Editar Postagem</LogoEditar>
            </NavEditar>
            <center>
            <h1>Editar Postagem</h1>
                    <Campo
                        type='text'
                        name='titulo'
                        value={titulo} 
                        placeholder='titulo'
                        onChange={mudarTitulo}
                    /><br/>
                    <CampoMaior
                        rows='5'
                        cols='20'
                        type='text'
                        name='conteudo'
                        placeholder='conteúdo da postagem'
                        wrap='soft'
                        value={conteudo} 
                        onChange={mudarConteudo}
                    /><br/>
                    <button onClick={editarPostagem}>Editar</button>
            </center>
        </EditarPost>
    )
}

export default EditarPostagem;