import axios from 'axios';
import { useEffect , useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Logo, LargeNav, Obra, Teorias, ImagePost, Star, AddComentario, Sombra, TopInfo, BtnTeoria, ConteudoPage,
    Coments, FinalBar, ConteudoFinal, ImagemPost, ConteudoPostagem } from './style.js'
import Comentario from '../../components/Comentario.js'
import FotoPerfil from '../../images/imagemusuariodefault.png';
import { BsStar,BsStarFill } from "react-icons/bs";
import logo from "../../images/logofullbranca.png"

function Postagem(){
    const [postagem,setPostagem] = useState('');
    const [usuario,setUsuario] = useState('');
    const [comentario,setComentario] = useState();
    const [avaliado,setAvaliado] = useState(false);
    const [stars,setStars] = useState(0);
    const [newComentario,setNewComentario] = useState('');
    const navigate = useNavigate()
    const {id} = useParams()

    const changecomentario = (value) => {setNewComentario(value.target.value)}

    function deleteComentario(posicao){
        axios.post('http://localhost:3001/deletarcomentario', {
            id: id,
            email: localStorage['useremail'],
            posicao: posicao
        })
        setComentario(comentario.filter(comentario => comentario.posicao !== posicao))
    }

    async function comentar(){
        axios.post('http://localhost:3001/comentar', {
             id: id,
             comentario: newComentario,
            email: localStorage['useremail']
        })
        const maiorposicao = await axios.get('http://localhost:3001/getmaiorid') 
        const novocomentario = {
            curtidas:0,
            resposta:newComentario,
            email: `${localStorage['useremail']}`,
            foto: `${localStorage['userfoto']}`,
            nome:`${localStorage['usernome']}`,
            posicao: maiorposicao.data.posicao+1,
            id: id
        }
        const allnewcoments = comentario.concat(novocomentario)
        setComentario(allnewcoments)
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

    function salateoria(){
        usuario.salateorias=='perguntar'? navigate('/aviso/teoria/'+id) : navigate('/postagem/teoria/'+id)
    }
    useEffect(()=>{
        axios.get(`http://localhost:3001/getcomentario/${id}`).then((response) => {
            setComentario(response.data); 
        })
        axios.get(`http://localhost:3001/getpostagem/${id}/${localStorage['useremail']}`).then((response)=>{
            setPostagem(response.data[0]);
            localStorage.setItem('userfoto',response.data[0].foto)
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
        document.title = 'Criticando - postagem '+id;
    }, []);

    return(
        <>
            <LargeNav imagem={postagem.bgimagem}>
                <Sombra></Sombra>
                <TopInfo>
                    <Obra><p>{postagem.obra}</p></Obra>
                    <Teorias>
                        <button onClick={() => navigate('/principal')}>Voltar</button>
                        <BtnTeoria onClick={salateoria}>Teorias</BtnTeoria>
                    </Teorias>
                </TopInfo>
            </LargeNav>
            <ConteudoPage>
                <h1>{postagem.titulo}</h1>
                <p>{postagem.conteudo}</p>
            </ConteudoPage>
            <ConteudoPostagem>
                <ImagemPost src={postagem.imagem}></ImagemPost>
                <ConteudoFinal>
                    {localStorage['useremail'] != postagem.email &&
                        <>
                            <h3>Avalie a postagem!</h3>
                            {avaliado?<p>avaliação: {stars} estrelas</p>:<p>Você não avaliou ainda</p>}
                            <Star>
                                {stars>=1 ? <BsStarFill onClick={() => avaliar(1)}></BsStarFill> : <BsStar onClick={() => avaliar(1)}></BsStar>}
                                {stars>=2 ? <BsStarFill onClick={() => avaliar(2)}></BsStarFill> : <BsStar onClick={() => avaliar(2)}></BsStar>}
                                {stars>=3 ? <BsStarFill onClick={() => avaliar(3)}></BsStarFill> : <BsStar onClick={() => avaliar(3)}></BsStar>}
                                {stars>=4 ? <BsStarFill onClick={() => avaliar(4)}></BsStarFill> : <BsStar onClick={() => avaliar(4)}></BsStar>}
                                {stars>=5 ? <BsStarFill onClick={() => avaliar(5)}></BsStarFill> : <BsStar onClick={() => avaliar(5)}></BsStar>}
                            </Star>
                            <br></br>
                        </>
                    }
                    <strong><p>Autor da postagem:</p></strong>
                    {postagem.email == localStorage['useremail'] 
                        ?
                        <>
                            {postagem.foto == 'imagemusuariodefault.png'?
                            <ImagePost src={FotoPerfil} onClick={() => navigate('/meuperfil')}/>: 
                            <ImagePost src={postagem.foto} onClick={() => navigate('/meuperfil')}/>}
                            <p onClick={() => navigate('/meuperfil')}>{postagem.nome}</p>
                            <p>Postado em: {postagem.data}</p>
                        </>
                        :
                        <>
                            {postagem.foto == 'imagemusuariodefault.png'?
                            <ImagePost src={FotoPerfil} onClick={() => navigate('/perfil/'+postagem.email)}/>: 
                            <ImagePost src={postagem.foto} onClick={() => navigate('/perfil/'+postagem.email)}/>}
                            <p onClick={() => navigate('/perfil/'+postagem.email)}>{postagem.nome}</p>
                            <p>Postado em: {postagem.data}</p>
                        </>
                    }
                    
                </ConteudoFinal>
            </ConteudoPostagem>
            <Coments>
                <AddComentario>
                    <button onClick={comentar}>Comentar</button>
                    <textarea  cols="30" rows="5" onChange={changecomentario} name='comentario' placeholder='Comentario'></textarea>
                </AddComentario>
                {comentario && 
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
                                    deletar={deleteComentario}
                                ></Comentario>
                            </div>
                        )
                    })
                }   
            </Coments>
            <FinalBar>
                <Logo src={logo}></Logo>
                <p>
                    postagem criada por: {usuario.nome}<br></br>desenvolvido por: Thalis Trisch
                </p>
            </FinalBar>
        </>
    )
}

export default Postagem;