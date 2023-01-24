import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate , useNavigate, useParams} from 'react-router-dom';
import {Nav , Logo , Campo, CampoMaior, BtnCriarPost, TituloTeoria } from './style.js'
import { BsSearch } from "react-icons/bs";

function CriarTeoria(){
    const navigate = useNavigate();
    const [teoria,setTeoria] = useState();
    const {id} = useParams();

    const mudarValores = (value) => {
        setTeoria((prevTeoria) => ({
            ...prevTeoria,
            [value.target.name]: value.target.value
        }))
    }

    function Criar(){
        console.log(teoria)
        axios.post('http://localhost:3001/criarteoria', {
            titulo: teoria.titulo,
            conteudo: teoria.conteudo,
            email: localStorage['useremail'],
            id: id
        }).then((message) => {
            console.log(message)
        })
        navigate('/postagem/teoria/'+id)
    }

    return(
        <>
            <Nav>
                <Logo>Criar Teoria</Logo>
            </Nav>
            <center>
                <TituloTeoria>Informações da teoria</TituloTeoria>
                <Campo
                    type='text'
                    name='titulo'
                    placeholder='titulo'
                    onChange={mudarValores}
                /><br></br>
                <CampoMaior
                    type='text'
                    name='conteudo'
                    placeholder='conteúdo'
                    onChange={mudarValores}
                    rows={8}
                    cols={20}
                /><br></br>
                <BtnCriarPost onClick={Criar}>Criar</BtnCriarPost>
            </center>
        </>
    )
}

export default CriarTeoria;