import { useState, useEffect } from 'react';
import { useNavigate , Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { LargeNav, Obra, Bar, BtnCriar, Teorias, Global, RemoverTeoria, ImagemPost, Sombra,
    ItensNav, Npost } from './style.js'
import CardTeorias from '../../components/CardTeoria.js'
import { FaTrashAlt } from 'react-icons/fa';
import CreditBar from '../../components/CreditBar.js';

function SalaTeorias(){
    const [listaTeorias,setListaTeorias] = useState(undefined);
    const [postagem,setPostagem] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();

    const FuncRemoverTeoria = (numero) => {
        axios.post(`http://localhost:3001/deletarteoria`,{
            numero: numero,
            email: localStorage['useremail']
        })
        setListaTeorias(listaTeorias.filter(teoria => teoria.numero !== numero))
    }
    useEffect(()=>{
        axios.get(`http://localhost:3001/getteoria/${id}`).then((response)=>{
            if(response.data.length > 0){
                setListaTeorias(response.data);
            }
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
            <LargeNav imagem={postagem.bgimagem}>
                <Sombra></Sombra>
                <ItensNav>
                    <Obra>{postagem ? <p>Teorias - {postagem.obra}</p> : <p>Default</p>}</Obra>
                    <Teorias>
                        <button onClick={() => navigate('/principal')}>Voltar</button>
                    </Teorias>
                </ItensNav>
            </LargeNav>
            <Bar>
                <center>
                    <BtnCriar onClick={() => navigate('/postagem/criarteoria/'+id)}>criar teoria</BtnCriar>
                </center>
            </Bar>
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
            {!listaTeorias && 
                <Npost>Não ha nenhuma teoria nessa sessão</Npost>
            }
            <center>
                {postagem && <ImagemPost src={postagem.imagem}></ImagemPost>}
            </center>
            <CreditBar></CreditBar>
        </Global>
    );
}

export default SalaTeorias;