import axios from 'axios';
import { useEffect , useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Logo , LargeNav, Obra, Teorias, ImagePost, Star} from './style.js'
import Comentario from '../../components/Comentario.js'
import FotoPerfil from '../../images/imagemusuariodefault.png';
import { BsStar,BsStarFill } from "react-icons/bs";

function Postagem(){
    const [postagem,setPostagem] = useState('');
    const [usuario,setUsuario] = useState('');
    const [comentario,setComentario] = useState();
    const [avaliado,setAvaliado] = useState(false);
    const [stars,setStars] = useState(0);
    const [newComentario,setNewComentario] = useState('');
    const navigate = useNavigate()
    const {id} = useParams()
    document.title = 'Criticando - postagem '+id;

    const changecomentario = (value) => {setNewComentario(value.target.value)}

    function deleteComentario(posicao){
        axios.post('http://localhost:3001/deletarcomentario', {
            id: id,
            email: localStorage['useremail'],
            posicao: posicao
        })
        setComentario(comentario.filter(comentario => comentario.posicao !== posicao))
    }

    function comentar(){
        axios.post('http://localhost:3001/comentar', {
             id: id,
             comentario: newComentario,
            email: localStorage['useremail']
        })
        const newcomentario = {curtidas:0,email:`${localStorage['useremail']}`,conteudo:newComentario}
        console.log(newcomentario);
    }

    function avaliar(star){
        axios.post(`http://localhost:3001/avaliarpostagem`,{
            email: localStorage['useremail'],
            star: star,
            id: id
        })
        setStars(star)
        setAvaliado(true)
    }

    useEffect(()=>{
        axios.get(`http://localhost:3001/getcomentario/${id}`).then((response) => {
            setComentario(response.data); 
        })
        axios.get(`http://localhost:3001/getpostagem/${id}/${localStorage['useremail']}`).then((response)=>{
            setPostagem(response.data[0]);
        })
        axios.get(`http://localhost:3001/getuser/${localStorage['useremail']}`).then((response)=>{
            setUsuario(response.data[0]);
        })
        axios.get(`http://localhost:3001/getstars/${id}/${localStorage['useremail']}`).then((response)=>{
            if(response.data.length > 0){
                setStars(response.data[0].stars);
                setAvaliado(true)
            }else{
                setAvaliado(false)
            }
        })
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
            {avaliado?<p>{stars}</p>:<p>Você não avaliou ainda</p>}
            <Star>
            {stars>=1 ? <BsStarFill onClick={() => avaliar(1)}></BsStarFill> : <BsStar onClick={() => avaliar(1)}></BsStar>}
            {stars>=2 ? <BsStarFill onClick={() => avaliar(2)}></BsStarFill> : <BsStar onClick={() => avaliar(2)}></BsStar>}
            {stars>=3 ? <BsStarFill onClick={() => avaliar(3)}></BsStarFill> : <BsStar onClick={() => avaliar(3)}></BsStar>}
            {stars>=4 ? <BsStarFill onClick={() => avaliar(4)}></BsStarFill> : <BsStar onClick={() => avaliar(4)}></BsStar>}
            {stars>=5 ? <BsStarFill onClick={() => avaliar(5)}></BsStarFill> : <BsStar onClick={() => avaliar(5)}></BsStar>}
            </Star>
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
                            <div key={coment.posicao}>
                                <Comentario
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
                            </div>
                        )
                    })
                }   
            </center>
        </>
    )
}

export default Postagem;