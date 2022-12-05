import axios from 'axios';
import { useEffect , useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardPostagemGrande from '../../components/CardPostagemGrande.js'
import CardPostagemMedio from '../../components/CardPostagemMedio.js'
import CardPostagemPequeno from '../../components/CardPostagemPequeno.js'
import { Logo, Nav, BtnCriar, Bar, BtnPesq, CampoPesq, FotoPerfilD, Blackout, BotaoSelecionado} from './style.js'
import FotoPerfil from '../../images/imagemusuariodefault.png';
import { BsSearch, BsFillSquareFill } from "react-icons/bs";
import { TfiLayoutGrid3Alt,TfiLayoutGrid2Alt } from "react-icons/tfi";

function Principal(){
    const [listaPostagem,setListaPostagem] = useState();
    const [blackout,setBlackout] = useState(true)
    const [layout, setLayout] = useState('grande')
    const [usuario, setUsuario] = useState('');
    const navigate = useNavigate()

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

    function mostrarpagina(){setBlackout(false)}

    useEffect(()=>{
        buscarpostagem();
        axios.get(`http://localhost:3001/getuser/${localStorage['useremail']}`).then((response)=>{
            setUsuario(response.data[0]);
        })
        window.setTimeout(mostrarpagina() , 10000);
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
            <center>
                <Bar>
                    <div>
                        <CampoPesq type="text" placeholder="Pesquisa por título" onChange={pesquisar}/>
                        <BtnPesq><BsSearch/></BtnPesq>
                    </div>
                    <div>
                        <BtnCriar onClick={() => navigate('/criarpostagem')}>criar postagem</BtnCriar>
                    </div>
                    <div>
                        {layout == 'grande' ?<BotaoSelecionado><BsFillSquareFill/></BotaoSelecionado>:
                        <button onClick={() => selecionarbotao('grande')}><BsFillSquareFill/></button>}
                        {layout == 'medio' ?<BotaoSelecionado><TfiLayoutGrid2Alt/></BotaoSelecionado>:
                        <button onClick={() => selecionarbotao('medio')}><TfiLayoutGrid2Alt/></button>}
                        {layout == 'pequeno' ?<BotaoSelecionado><TfiLayoutGrid3Alt/></BotaoSelecionado>:
                        <button onClick={() => selecionarbotao('pequeno')}><TfiLayoutGrid3Alt/></button>}
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