import { useState, useEffect } from 'react';
import { useNavigate , Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { LargeNav, Obra, Teorias, Bar, BtnCriar } from './style.js'
import CardTeorias from '../../components/CardTeoria.js'

function SalaTeorias(){
    const [listaTeorias,setListaTeorias] = useState();
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:3001/getteoria/${id}`).then((response)=>{
            setListaTeorias(response.data);
        })
    }, []);

    return(
        <div>
            <LargeNav>
                <Obra><p>Obra</p></Obra>
                <Teorias><button onClick={() => navigate('/postagem/'+id)}>Voltar</button></Teorias>
            </LargeNav>
            <Bar>
                <div>
                    <BtnCriar onClick={() => navigate('/postagem/criarteoria/'+id)}>criar teoria</BtnCriar>
                </div>
            </Bar>
            {typeof listaTeorias !== "undefined" &&
                listaTeorias.map((teorias)=>{
                    return(
                        <CardTeorias
                            key={teorias.posicao}
                            id={teorias.id}
                            titulo={teorias.titulo}
                            conteudo={teorias.conteudo}
                            autor={teorias.nome}
                            email={teorias.email}
                        ></CardTeorias>
                    )
                })
            }
        </div>
    );
}

export default SalaTeorias;