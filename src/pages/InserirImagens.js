import axios from 'axios';
import { useState } from 'react';
import { Navigate , useNavigate , useParams } from 'react-router-dom';
import { storage } from '../firebase.js';
import { ref , uploadBytesResumable , getDownloadURL } from 'firebase/storage';
import { Nav, CampoImg , Logo} from './style.js'

function InserirImagens(){
    const navigate = useNavigate();
    const [imagemURL,setImagemURL] = useState('');
    const [imagemProgresso,setImagemProgresso] = useState(0);
    const [backgroundURL,setBackgroundURL] = useState('');
    const [backgroundProgresso,setBackgroundProgresso] = useState(0);
    const now = new Date
    const {id} = useParams()

    const Uploadimage = (event) => {
        event.preventDefault();
        const file = event.target[0]?.files[0];
        if(!file) return;
        const filename = file.name+`(${now.getHours()}hour:${now.getMinutes()}min:${now.getSeconds()}sec_${now.getDate()}|${now.getMonth()+1}|${now.getFullYear()})`
        const storageRef = ref(storage, `imagem/${filename}`)
        const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progresso = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
                setImagemProgresso(progresso)
            },
            error => {
                alert(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url=>{
                    setImagemURL(url);
                    axios.post('http://localhost:3001/inseririmagem', {
                        id: id,
                        imagem: url
                    })
                }))
            }
        )
    }
    const Uploadbackground = (event) => {
        event.preventDefault();
        const file = event.target[0]?.files[0];
        if(!file) return;
        const filename = file.name+`(${now.getHours()}hour:${now.getMinutes()}min:${now.getSeconds()}sec_${now.getDate()}|${now.getMonth()+1}|${now.getFullYear()})`
        const storageRef = ref(storage, `background/${filename}`)
        const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progresso = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
                setBackgroundProgresso(progresso)
            },
            error => {
                alert(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url=>{
                    setBackgroundURL(url);
                    axios.post('http://localhost:3001/inserirbackground', {
                        id: id,
                        background: url
                    })
                }))
            }
        )
    }
    return(
        <div>
            <Nav>
                <Logo>Criar Postagem</Logo>
            </Nav>
            <h2>Envio de imagens (opcional)</h2>
            <form onSubmit={Uploadimage}>
                <div>
                    <input onChange={Uploadimage} type='file' name='image'/>
                    <button type='submit'>enviar imagem</button>
                    {!imagemURL && <progress value={imagemProgresso} max={100}/>}
                    {imagemURL && 
                    <CampoImg>
                        <img src={imagemURL} alt='imagemUpload'/>
                    </CampoImg>}
                </div>
            </form>
            <form onSubmit={Uploadbackground}>
                <div>
                    <input type='file' name='image'/>
                    <button type='submit'>enviar background</button>
                    {!backgroundURL && <progress value={backgroundProgresso} max={100}/>}
                    {backgroundURL &&
                    <CampoImg>
                        <img src={backgroundURL} alt='imagemUpload'/>
                    </CampoImg>}
                </div>
            </form>
            <button onClick={() => navigate('/principal')}>finalizar</button>
        </div>
    )
}

export default InserirImagens;