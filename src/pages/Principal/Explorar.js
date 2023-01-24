import axios from 'axios';
import { useEffect , useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardPostagemGrande from '../../components/CardPostagemGrande.js'
import CardPostagemMedio from '../../components/CardPostagemExtraGrande.js'
import CardPostagemPequeno from '../../components/CardPostagemPequeno.js'
import CardGeneros from '../../components/CardGeneros.js'
import FotoPerfil from '../../images/imagemusuariodefault.png';
import { LogoExplorar, Nav, Bar, BtnPesq, CampoPesq, FotoPerfilD, Blackout,
    BotaoSelecionado, BotaoLayout, FilterBar, Filter, GenreSpace, ExplorarBar, DivCardColunas} from './style.js'
import { BsSearch, BsFillSquareFill } from "react-icons/bs";
import { TfiLayoutGrid3Alt,TfiLayoutGrid2Alt } from "react-icons/tfi";
import logo from '../../images/logofullbranca.png';
import CreditBar from "../../components/CreditBar.js";

function Principal(){
    const [listaPostagem,setListaPostagem] = useState();
    const [listaGeneroFiltrados,setlistaGeneroFiltrados] = useState();
    const [listaFiltrados,setlistaFiltrados] = useState();
    const [generos,setGeneros] = useState();
    const [generoFiltrado,setGeneroFiltrado] = useState('');
    const [blackout,setBlackout] = useState(true)
    const [usuario, setUsuario] = useState('');
    const navigate = useNavigate()
    document.title = 'Criticando - Explorar';

    const pesquisar = (valor) =>{
        const campopesq = valor.target.value
        if(campopesq == ''){
            buscarPostagem()
        }else{
            axios.get(`http://localhost:3001/pesquisar/${campopesq}`).then((response)=>{
                setlistaFiltrados(response.data);
            })
        }
    }

    function filtrargenero(genero){

        if(typeof listaFiltrados !== "undefined"){
            if(generoFiltrado == genero){
                setGeneroFiltrado('')
                setlistaFiltrados()
            }else{
                setGeneroFiltrado(genero)
                setlistaFiltrados(listaFiltrados.filter(postagem => postagem.genero === genero))
            }
        }else{
            if(generoFiltrado == genero){
                setGeneroFiltrado('')
                setlistaGeneroFiltrados()
            }else{
                setGeneroFiltrado(genero)
                setlistaGeneroFiltrados(listaPostagem.filter(postagem => postagem.genero === genero))
            }
        }
    }

    function buscarPostagem(){
        setlistaFiltrados()
        setlistaGeneroFiltrados()
        axios.get(`http://localhost:3001/getpostagensdetalhadas`).then((response)=>{
            setListaPostagem(response.data);
        })
        filtrargenero(generoFiltrado)
    }

    useEffect(()=>{
        buscarPostagem()
        axios.get(`http://localhost:3001/getgeneros`).then((response)=>{
            setGeneros(response.data);
        })
        axios.get(`http://localhost:3001/getuser/${localStorage['useremail']}`).then((response)=>{
            setUsuario(response.data[0]);
        })
        setBlackout(false)
    }, []);

    return(
        <div>
            {blackout && 
                <Blackout><h3>Carregando...</h3></Blackout>
            }
            <Filter>
                <LogoExplorar src={logo}></LogoExplorar>
                <button onClick={() => navigate('/principal')}>voltar</button>
            </Filter>
            <FilterBar>
                <div>
                    <center><h3>Filtrar por Genero</h3></center>
                    <GenreSpace>
                    { typeof generos !== "undefined" ?
                        generos.map((genre) => {
                            return(
                                <CardGeneros
                                    key={genre.obra}
                                    obra={genre.obra}
                                    genero={genre.genero}
                                    filtrar={filtrargenero}
                                    generofiltrado={generoFiltrado}
                                >
                                </CardGeneros>
                            )
                        }) :
                        <p>Não há registros de generos ainda</p>
                    }
                    </GenreSpace>
                </div>
            </FilterBar>
            <center>
                <ExplorarBar>
                    <div>
                        <CampoPesq type="text" placeholder="Pesquisa por obra" onChange={pesquisar}/>
                        <BtnPesq><BsSearch/></BtnPesq>
                    </div>
                </ExplorarBar>
            <DivCardColunas>
            {typeof listaFiltrados !== "undefined" ?
                listaFiltrados.map((obras)=>{
                    return(
                        <CardPostagemPequeno
                            key={obras.id}
                            id={obras.id}
                            obra= {obras.obra}
                            titulo={obras.titulo}
                            conteudo={obras.conteudo}
                            autor={obras.nome}
                            email={obras.email}
                            foto={obras.foto}
                            genero={obras.genero}
                            imagem={obras.imagem}
                            background={obras.bgimagem}
                            stars={obras.stars}
                            comentarios={obras.comentarios}
                        />
                    )}
                )
                :
                typeof listaGeneroFiltrados !== "undefined" ?
                listaGeneroFiltrados.map((obras)=>{
                    return(
                        <CardPostagemPequeno
                            key={obras.id}
                            id={obras.id}
                            titulo={obras.titulo}
                            obra= {obras.obra}
                            conteudo={obras.conteudo}
                            autor={obras.nome}
                            email={obras.email}
                            foto={obras.foto}
                            genero={obras.genero}
                            imagem={obras.imagem}
                            background={obras.bgimagem}
                            stars={obras.stars}
                            comentarios={obras.comentarios}
                        />
                    )}):
                typeof listaPostagem !== "undefined" && 
                    listaPostagem.map((obras) => {
                        return (
                            <CardPostagemPequeno
                                key={obras.id}
                                id={obras.id}
                                titulo={obras.titulo}
                                obra= {obras.obra}
                                conteudo={obras.conteudo}
                                autor={obras.nome}
                                genero={obras.genero}
                                email={obras.email}
                                foto={obras.foto}
                                imagem={obras.imagem}
                                background={obras.bgimagem}
                                stars={obras.stars}
                                comentarios={obras.comentarios}
                            />
                        )
                    }
                )
            }
            </DivCardColunas>
            </center>
            <CreditBar></CreditBar>
        </div>
    )
}

export default Principal;