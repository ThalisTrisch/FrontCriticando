import axios from 'axios';
import { useEffect , useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Logo , LargeNav, Obra, Teorias, ImgStar, ImagePost} from './style.js'
import Comentario from '../components/Comentario.js'
import Star from '../images/star.png'
import FotoPerfil from '../images/imagemusuariodefault.png';

function Postagem(){
    const [postagem,setPostagem] = useState('');
    const [usuario,setUsuario] = useState('');
    const [comentario,setComentario] = useState();
    const [stars,setStars] = useState(null);
    const [newComentario,setNewComentario] = useState('');
    const navigate = useNavigate()
    const {id} = useParams()
    document.title = 'Criticando - postagem '+id;

    const changecomentario = (value) => {setNewComentario(value.target.value)}

    function repetirStars(){
        
    }

    async function deleteComentario(posicao){
        setComentario(comentario.filter(comentario => comentario.posicao !== posicao))
        await axios.post('http://localhost:3001/deletarcomentario', {
            id: id,
            email: localStorage['useremail']
        })
    }

    async function comentar(){
        await axios.post('http://localhost:3001/comentar', {
            id: id,
            comentario: newComentario,
            email: localStorage['useremail']
        })
        const {data} = await axios.get(`http://localhost:3001/getcomentario/${id}`)
        console.log(data)
        setComentario(comentario.push(data));
    }

    function avaliar(star){
        axios.post(`http://localhost:3001/avaliarpostagem/${id}`,{
            email: localStorage['useremail'],
            star: star
        })
    }

    useEffect(()=>{
        axios.get(`http://localhost:3001/getcomentario/${id}`).then((response)=>{
            setComentario(response.data); 
        })
        axios.get(`http://localhost:3001/getpostagem/${id}/${localStorage['useremail']}`).then((response)=>{
            setPostagem(response.data[0]);
        })
        axios.get(`http://localhost:3001/getuser/${localStorage['useremail']}`).then((response)=>{
            setUsuario(response.data[0]);
        })
        axios.post(`http://localhost:3001/getstars`,{
            email: localStorage['useremail'],
            id : id
        }).then((response)=>{
            setStars(response.data[0]);
        })
        /*axios.get(`http://localhost:3001/getpostagemstars/${id}/${localStorage['useremail']}`).then((response)=>{
            setStars(response.data);
        })*/
    }, []);

    return(
        <>
            <LargeNav>
                <Obra><p>{postagem.obra}</p></Obra>
                <Teorias>
                    <button onClick={() => navigate('/aviso/teoria/'+id)}>Sala de teorias</button>
                    <button onClick={() => navigate('/principal')}>voltar</button>
                </Teorias>
            </LargeNav>
            <h1>{postagem.titulo}</h1>
            <p>{postagem.conteudo}</p>
            <h3>Avalie a obra! </h3>
            <ImgStar src={Star} onClick={() => avaliar(1)}/>
            <ImgStar src={Star} onClick={() => avaliar(2)}/>
            <ImgStar src={Star} onClick={() => avaliar(3)}/>
            <ImgStar src={Star} onClick={() => avaliar(4)}/>
            <ImgStar src={Star} onClick={() => avaliar(5)}/>
            <br></br>
            {postagem.foto == 'imagemusuariodefault.png'?
                <ImagePost src={FotoPerfil} onClick={() => navigate('/meuperfil')}/>: 
                <ImagePost src={postagem.foto} onClick={() => navigate('/meuperfil')}/>}
            <p>{postagem.nome}</p>
            <center>
                <button onClick={comentar}>Comentar</button>
                <input onChange={changecomentario} name='comentario' placeholder='Comentario'></input>
                {typeof comentario !== "undefined" && 
                    comentario.map((coment)=>{
                        return(
                            <>
                                <Comentario
                                    key={coment.posicao}
                                    posicao={coment.posicao}
                                    foto={coment.foto}
                                    resposta={coment.resposta}
                                    nome={coment.nome}
                                    email={coment.email}
                                    curtidas={coment.curtidas}
                                    id={coment.id}
                                ></Comentario>
                                { coment.email == localStorage['useremail'] &&
                                    <button onClick={() => deleteComentario(coment.posicao)}>deletar</button>
                                }
                            </>
                        )
                    })
                }   
            </center>
        </>
    )
}

export default Postagem;