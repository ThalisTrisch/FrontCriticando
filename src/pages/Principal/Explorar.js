import axios from 'axios';
import { useEffect , useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardPostagemGrande from '../../components/CardPostagemGrande.js'
import CardPostagemMedio from '../../components/CardPostagemMedio.js'
import CardPostagemPequeno from '../../components/CardPostagemPequeno.js'
import FotoPerfil from '../../images/imagemusuariodefault.png';
import { Logo, Nav, BtnCriar, Bar, BtnPesq, CampoPesq, FotoPerfilD, Blackout,
    BotaoSelecionado, BotaoLayout, FilterBar} from './style.js'
import { BsSearch, BsFillSquareFill } from "react-icons/bs";
import { TfiLayoutGrid3Alt,TfiLayoutGrid2Alt } from "react-icons/tfi";

function Principal(){
    const [listaPostagem,setListaPostagem] = useState();
    const [blackout,setBlackout] = useState(true)
    const [layout, setLayout] = useState('grande')
    const [usuario, setUsuario] = useState('');
    const navigate = useNavigate()
    document.title = 'Criticando - Explorar';

    const pesquisar = (valor) =>{
        const campopesq = valor.target.value;
        if(campopesq == ''){
            buscarpostagem();
        }else{
            axios.get(`http://localhost:3001/pesquisar/${campopesq}`).then((response)=>{
                setListaPostagem(response.data);
            })
        }
    }

    function selecionarbotao(botao){setLayout(botao)}

    function buscarpostagem(){
        axios.get(`http://localhost:3001/getpostagens`).then((response)=>{
            setListaPostagem(response.data);
        })
    }

    useEffect(()=>{
        buscarpostagem();
        axios.get(`http://localhost:3001/getuser/${localStorage['useremail']}`).then((response)=>{
            setUsuario(response.data[0]);
        })
        window.setTimeout(mostrarpagina() , 1000);
        async function mostrarpagina(){setBlackout(false)}
    }, []);

    return(
        <div>
            {blackout && 
                <Blackout><h3>Carregando...</h3></Blackout>
            }
            <Nav>
                <Logo>Logo</Logo>
                {usuario.foto == 'imagemusuariodefault.png'?
                <FotoPerfilD src={FotoPerfil} onClick={() => navigate('/meuperfil')}></FotoPerfilD>: 
                <FotoPerfilD src={usuario.foto} onClick={() => navigate('/meuperfil')}></FotoPerfilD>}
            </Nav>
            <FilterBar>
            </FilterBar>
            <center>
                <Bar>
                    <div>
                        <CampoPesq type="text" placeholder="Pesquisa por título" onChange={pesquisar}/>
                        <BtnPesq><BsSearch/></BtnPesq>
                    </div>
                    <div>
                        {layout == 'grande' ?<BotaoSelecionado><BsFillSquareFill/></BotaoSelecionado>:
                        <BotaoLayout onClick={() => selecionarbotao('grande')}><BsFillSquareFill/></BotaoLayout>}
                        {layout == 'medio' ?<BotaoSelecionado><TfiLayoutGrid2Alt/></BotaoSelecionado>:
                        <BotaoLayout onClick={() => selecionarbotao('medio')}><TfiLayoutGrid2Alt/></BotaoLayout>}
                        {layout == 'pequeno' ?<BotaoSelecionado><TfiLayoutGrid3Alt/></BotaoSelecionado>:
                        <BotaoLayout onClick={() => selecionarbotao('pequeno')}><TfiLayoutGrid3Alt/></BotaoLayout>}
                    </div>
                </Bar>
            </center>
            {typeof listaPostagem !== "undefined" && layout == 'grande' &&
                listaPostagem.map((obras)=>{
                        return(
                            <CardPostagemGrande
                                key={obras.id}
                                id={obras.id}
                                titulo={obras.titulo}
                                conteudo={obras.conteudo}
                                autor={obras.nome}
                                email={obras.email}
                                foto={obras.foto}
                                imagem={obras.imagem}
                                background={obras.bgimagem}
                                stars={obras.stars}
                                comentarios={obras.comentarios}
                            />
                        )
                })
            }
            {typeof listaPostagem !== "undefined" && layout == 'medio' &&
                listaPostagem.map((obras)=>{
                        return(
                            <CardPostagemMedio
                                key={obras.id}
                                id={obras.id}
                                titulo={obras.titulo}
                                conteudo={obras.conteudo}
                                autor={obras.nome}
                                email={obras.email}
                                foto={obras.foto}
                                imagem={obras.imagem}
                                background={obras.bgimagem}
                                stars={obras.stars}
                                comentarios={obras.comentarios}
                            />
                        )
                })
            }
            {typeof listaPostagem !== "undefined" && layout == 'pequeno' &&
                listaPostagem.map((obras)=>{
                        return(
                            <CardPostagemPequeno
                                key={obras.id}
                                id={obras.id}
                                titulo={obras.titulo}
                                conteudo={obras.conteudo}
                                autor={obras.nome}
                                email={obras.email}
                                foto={obras.foto}
                                imagem={obras.imagem}
                                background={obras.bgimagem}
                                stars={obras.stars}
                                comentarios={obras.comentarios}
                            />
                        )
                })
            }
        </div>
    )
}

export default Principal;