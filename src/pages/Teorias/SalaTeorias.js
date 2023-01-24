import { useState, useEffect } from 'react';
import { useNavigate , Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { LargeNav, Obra, Bar, BtnCriar, Teorias, Global, RemoverTeoria, ImagemPost, Sombra, ItensNav } from './style.js'
import CardTeorias from '../../components/CardTeoria.js'
import { FaTrashAlt } from 'react-icons/fa';

function SalaTeorias(){
    const [listaTeorias,setListaTeorias] = useState();
    const [postagem,setPostagem] = useState();
    const {id} = useParams();
    const navigate = useNavigate();

    const FuncRemoverTeoria = (numero) => {
        console.log(numero)
        axios.post(`http://localhost:3001/deletarteoria`,{
            numero: numero,
            email: localStorage['useremail']
        })
        setListaTeorias(listaTeorias.filter(teoria => teoria.numero !== numero))
    }
    useEffect(()=>{
        axios.get(`http://localhost:3001/getteoria/${id}`).then((response)=>{
            setListaTeorias(response.data);
        })
        axios.get(`http://localhost:3001/getpostagem/${id}/${localStorage['useremail']}`).then((response)=>{
            setPostagem(response.data[0])
            console.log(postagem)
            localStorage.setItem('userfoto',response.data[0].foto)
        })
        document.title = 'Criticando - Teorias'
    }, []);

    return(
        <Global>
            {postagem? 
                <LargeNav imagem={postagem.bgimagem}>
                    <Sombra></Sombra>
                    <ItensNav>
                        <Obra>{postagem ? <p>{postagem.obra}</p> : <p>Default</p>}</Obra>
                        <Teorias>
                            <button onClick={() => navigate('/principal')}>Voltar</button>
                        </Teorias>
                    </ItensNav>
                </LargeNav>
                :
                <LargeNav>
                </LargeNav>
            }
            <Bar>
                <center>
                    <BtnCriar onClick={() => navigate('/postagem/criarteoria/'+id)}>criar teoria</BtnCriar>
                </center>
            </Bar>
            <center>
                {postagem && <ImagemPost src={postagem.imagem}></ImagemPost>}
            </center>
            {listaTeorias &&
                listaTeorias.map((teorias)=>{
                    return(
                        <CardTeorias
                            key={teorias.numero}
                            numero= {teorias.numero}
                            id={teorias.id}
                            titulo={teorias.titulo}
                            conteudo={teorias.conteudo}
                            autor={teorias.nome}
                            email={teorias.email}
                            foto={teorias.foto}
                        >
                            <RemoverTeoria>
                                <FaTrashAlt onClick={() => FuncRemoverTeoria(teorias.numero)}></FaTrashAlt>
                            </RemoverTeoria>
                        </CardTeorias>
                    )
                })
            }
        </Global>
    );
}

export default SalaTeorias;