import axios from 'axios';
import { useState } from 'react';
import { Navigate , useNavigate , useParams } from 'react-router-dom';
import { storage } from '../../firebase.js';
import { ref , uploadBytesResumable , getDownloadURL } from 'firebase/storage';
import { Nav, CampoImg , Logo, TituloTeoria, Form, FormImg, InputSeparado, BtnCriarPost} from './style.js'

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
        <>
            <Nav>
                <Logo>Inserir Imagens</Logo>
            </Nav>
            <center>
                <TituloTeoria>Insira Imagens (Opcional)</TituloTeoria>
                <p>Para enviar a imagem, Clique no botão do topo e posteriormente no botão de cor verde</p>
            </center>
            <FormImg>
                <InputSeparado>
                    <div>
                        <form onSubmit={Uploadimage} >
                            <div>
                                <label name='image'>
                                    <span>Imagem</span>
                                    <input type='file' name='image' onChange={Uploadimage}/>
                                </label>
                            </div>
                            <p>Dimensões da imagem: livre</p>
                            <button type='submit'>enviar imagem</button>
                        </form>
                    </div>
                    <div>
                        {imagemURL 
                        ? 
                        <CampoImg>
                            <img src={imagemURL} alt='imagemUpload'/>
                        </CampoImg>
                        :
                        <CampoImg><progress value={imagemProgresso} max={100}/></CampoImg>
                        }
                    </div>
                </InputSeparado>
                <InputSeparado>
                    <div>
                        <form onSubmit={Uploadbackground} >
                            <div>
                                <label name='image'>
                                    <span>Background</span>
                                    <input type='file' name='image' onChange={Uploadbackground}/>
                                </label>
                            </div>
                            <p>Preferencialmente: Insira uma imagem com proporções de computador (1980x1080px)</p>
                            <button type='submit'>enviar background</button>
                        </form>
                    </div>
                    <div>
                        {backgroundURL 
                        ? 
                        <CampoImg>
                            <img src={backgroundURL} alt='imagemUpload'/>
                        </CampoImg>
                        :
                        <CampoImg><progress value={backgroundProgresso} max={100}/></CampoImg>
                        }
                    </div>
                </InputSeparado>
            </FormImg>
            <center><BtnCriarPost onClick={() => navigate('/principal')}>finalizar</BtnCriarPost></center>
        </>
    )
}

export default InserirImagens;