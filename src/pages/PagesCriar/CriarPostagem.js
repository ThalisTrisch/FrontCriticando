import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate , useNavigate} from 'react-router-dom';
import {Nav , Logo , Campo, CampoMaior, BtnCriarPost, SelectObras, BtnPesq, CampoPesq } from './style.js'

function CriarPostagem(){
    const navigate = useNavigate();
    const [postagem,setPostagem] = useState();
    const [obraSelecionada, setObraSelecionada] = useState('');
    const [obras, setObras] = useState('');
    const [pesquisarObras, setPesquisarObras] = useState();
    const apiKey = '4a49fe14c0b24414ccad90db84a53e26'
    const apiurl = 'https://api.themoviedb.org/3/search/movie'
    const now = new Date()

    const searchFilms = async () => {
        const urlSearchMovies = `${apiurl}?api_key=${apiKey}&language=pt-br&query=${obras}`
        const apiResponse = await fetch(urlSearchMovies)
        const resMovies = await apiResponse.json()
        setPesquisarObras(resMovies.results)
    }

    const mudarValoresPostagem = (value) => {
        setPostagem((prevPostagem) => ({
            ...prevPostagem,
            [value.target.name]: value.target.value
        }))
    }

    const mudarValoresObra = (value) => {
        setObras(value.target.value)
    }

    const mudarObraSelecionada = (value) => {
        setObraSelecionada(value.target.value)
        console.log(value.target.value)
    }

    async function Criarpost(){
        const datahoje = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
        const {data} = await axios.get('http://localhost:3001/getidpostagem')
        await axios.post('http://localhost:3001/criarpostagem', {
            titulo: postagem.titulo,
            conteudo: postagem.conteudo,
            email: localStorage['useremail'],
            obra: obraSelecionada,
            data: datahoje
        })
        navigate('/criarpostagem/inseririmagens/'+data[0].id)
    }

    return(
        <>
            <Nav>
                <Logo>Criar Postagem</Logo>
            </Nav>
            <center>
                <h2>Sobre qual obra será a postagem?</h2>
                <div>
                    <CampoPesq onChange={mudarValoresObra} name='obra' type="text" placeholder="pesquise pelo nome"/>
                    <BtnPesq onClick={searchFilms}>Pesquisar</BtnPesq>
                </div>
                <SelectObras onClick={mudarObraSelecionada}>
                    {pesquisarObras && 
                        pesquisarObras.map((filmes)=> {
                            return(
                                <option key={filmes.title}>{filmes.title}</option>
                            )
                        })
                    }
                </SelectObras>
                <h2>Informações sobre a postagem</h2>
                <Campo
                    type='text'
                    name='titulo'
                    placeholder='titulo'
                    onChange={mudarValoresPostagem}
                /><br/>
                <CampoMaior
                    maxlength='20'
                    rows='4'
                    type='text'
                    name='conteudo'
                    placeholder='conteúdo da postagem'
                    wrap='soft'
                    onChange={mudarValoresPostagem}
                /><br/>
                
                <BtnCriarPost onClick={Criarpost}>Criar postagem</BtnCriarPost>
            </center>
        </>
    )
}

export default CriarPostagem;