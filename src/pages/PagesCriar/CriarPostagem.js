import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate , useNavigate} from 'react-router-dom';
import {Nav , Logo , Campo, CampoMaior, BtnCriarPost, SelectObras, BtnPesq, CampoPesq, Form } from './style.js'
import { BsSearch } from "react-icons/bs";
import CreditBar from '../../components/CreditBar.js'

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

    const searchFilms = async (obra) => {
        const urlSearchMovies = `${apiSearchUrl}?api_key=${apiKey}&language=pt-br&query=${obra.target.value}`
        const apiSearchResponse = await fetch(urlSearchMovies)
        const resMovies = await apiSearchResponse.json()
        setPesquisarObras(resMovies.results)
        setObraSelecionada(resMovies.results[0])
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
        setObraSelecionada(resInfo)
    }

    async function Criarpost(){
            axios.get('http://localhost:3001/getidpostagem').then((res)=>{
                const novoid = res.data[0].id+1
                const datahoje = `${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()}`
                axios.post('http://localhost:3001/criarpostagem', {
                    titulo: postagem.titulo,
                    conteudo: postagem.conteudo,
                    id: novoid,
                    email: localStorage['useremail'],
                    obra: obraSelecionada.title,
                    obraid: obraSelecionada.id,
                    categoria:  categoriaSelecionada,
                    adult: obraSelecionada.adult,
                    linguagem: obraSelecionada.original_language,
                    lancamento: obraSelecionada.release_date,
                    genero: obraSelecionada.genres,
                    data: datahoje
                })
                console.log(`Id da postagem criada: ${novoid}`)
                navigate(`/criarpostagem/inseririmagens/${novoid}`)
            })
    }
    return(
        <>
            <Nav>
                <Logo>Criar Postagem</Logo>
            </Nav>
            <Form>
                <center>
                    <h2>Sobre qual obra será a postagem?</h2>
                    <p>insira um nome de obra e selecione no menu abaixo<br></br> o resultado que seja compativel com seu desejo</p>
                    <div>
                        <CampoPesq onChange={searchFilms} name='obra' type="text" placeholder="pesquise pelo nome"/>
                        <BtnPesq><BsSearch/></BtnPesq>
                    </div>
                    <p>Nome</p>
                    <SelectObras onChange={mudarObraSelecionada}>
                        {pesquisarObras && 
                            pesquisarObras.map((filmes)=> {
                                return(
                                    <option key={filmes.id}>{filmes.title}</option>
                                )
                            })
                        }
                    </SelectObras><br></br>
                    <p>Categoria</p>
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
                        rows='5'
                        cols='20'
                        type='text'
                        name='conteudo'
                        placeholder='conteúdo da postagem'
                        wrap='soft'
                        onChange={mudarValoresPostagem}
                    /><br/>
                    
                    <BtnCriarPost onClick={Criarpost}>Criar postagem</BtnCriarPost>
                </center>
            </Form>
            <CreditBar></CreditBar>
        </>
    )
}

export default CriarPostagem;