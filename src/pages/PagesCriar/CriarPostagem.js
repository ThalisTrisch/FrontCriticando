import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate , useNavigate} from 'react-router-dom';
import {Nav , Logo , Campo, CampoMaior, BtnCriarPost, SelectObras, BtnPesq, CampoPesq } from './style.js'
import { BsSearch } from "react-icons/bs";

function CriarPostagem(){
    const navigate = useNavigate();
    const [postagem,setPostagem] = useState();
    const [obraSelecionada, setObraSelecionada] = useState();
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('filme');
    const [obras, setObras] = useState('');
    const [pesquisarObras, setPesquisarObras] = useState();
    const apiKey = '4a49fe14c0b24414ccad90db84a53e26'
    const apiSearchUrl = 'https://api.themoviedb.org/3/search/movie'
    const apiInfoUrl = 'https://api.themoviedb.org/3/movie'
    const now = new Date()

    const searchFilms = async () => {
        const urlSearchMovies = `${apiSearchUrl}?api_key=${apiKey}&language=pt-br&query=${obras}`
        const apiSearchResponse = await fetch(urlSearchMovies)
        const resMovies = await apiSearchResponse.json()
        console.log(resMovies.results)
        setPesquisarObras(resMovies.results)
    }

    const mudarValoresPostagem = (value) => {
        setPostagem((prevPostagem) => ({
            ...prevPostagem,
            [value.target.name]: value.target.value
        }))
    }

    const mudarValoresCategoria = (value) => {setCategoriaSelecionada(value.target.value)}
    const mudarValoresObra = (value) => {setObras(value.target.value)}

    const mudarObraSelecionada = (value) => {
        pesquisarObras.map((obras)=> {
            if(obras.title==value.target.value){
                InfoMovies(obras.id)
            }
        })
    }

    async function InfoMovies(id){
        const urlInfoMovies = `${apiInfoUrl}/${id}?api_key=${apiKey}&language=pt-br`
        const apiInfoResponse = await fetch(urlInfoMovies)
        const resInfo = await apiInfoResponse.json()
        console.log(resInfo)
        setObraSelecionada(resInfo)
    }

    async function Criarpost(){
        const {data} = await axios.get('http://localhost:3001/getidpostagem')
        const datahoje = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
        axios.post('http://localhost:3001/criarpostagem', {
            titulo: postagem.titulo,
            conteudo: postagem.conteudo,
            id: postagem.id,
            email: localStorage['useremail'],
            obra: obraSelecionada.title,
            obraid: obraSelecionada.id,
            categoria:  categoriaSelecionada,
            linguagem: obraSelecionada.original_language,
            lancamento: obraSelecionada.release_date,
            genero: obraSelecionada.genres,
            data: datahoje
        })
        console.log(`Id da postagem criada: ${data[0].id+1}`)
        navigate('/criarpostagem/inseririmagens/'+(data[0].id+1))
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
                    <BtnPesq onClick={searchFilms}><BsSearch/></BtnPesq>
                </div>
                <SelectObras onChange={mudarObraSelecionada}>
                    <option>selecione uma opção</option>
                    {pesquisarObras && 
                        pesquisarObras.map((filmes)=> {
                            return(
                                <option key={filmes.id}>{filmes.title}</option>
                            )
                        })
                    }
                </SelectObras>
                <SelectObras onChange={mudarValoresCategoria}>
                    <option>Filme</option>
                    <option>Série</option>
                    <option>Anime</option>
                    <option>Documentário</option>
                    <option>Novela</option>
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