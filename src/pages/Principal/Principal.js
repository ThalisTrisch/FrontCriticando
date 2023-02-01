import axios from 'axios';
import { useEffect , useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardPostagemGrande from '../../components/CardPostagemGrande.js'
import CardPostagemExtraGrande from '../../components/CardPostagemExtraGrande.js'
import CardPostagemPequeno from '../../components/CardPostagemPequeno.js'
import FotoPerfil from '../../images/imagemusuariodefault.png';
import { Logo, Nav, CriarPost, Bar, FotoPerfilD, Blackout, BotaoSelecionado, BotaoSelecionadoMenor,
    BotaoLayoutMenor,BotaoLayout, Layouts, Explorar, Postagens, DivCardColunas, Npost } from './style.js'
import { BsSearch, BsFillSquareFill } from "react-icons/bs";
import { TfiLayoutGrid3Alt,TfiLayoutGrid2Alt } from "react-icons/tfi";
import { IoIosAddCircle } from "react-icons/io";
import Postagem from '../Postagem/Postagem.js';
import logo from '../../images/logobranca.png'
import CreditBar from "../../components/CreditBar.js"

function Principal(){
    const [listaPostagem,setListaPostagem] = useState(undefined);
    const [blackout,setBlackout] = useState(true)
    const [layout, setLayout] = useState('medio')
    const [usuario, setUsuario] = useState('');
    const navigate = useNavigate()
    document.title = 'Criticando - Principal';

    function selecionarbotao(botao){setLayout(botao)}

    function buscarpostagem(){
        axios.get(`http://localhost:3001/getpostagens`).then((response)=>{
            if(response.data.length > 0){
                setListaPostagem(response.data);
            }
        })
    }

    useEffect(()=>{
        buscarpostagem();
        axios.get(`http://localhost:3001/getuser/${localStorage['useremail']}`).then((response)=>{
            setUsuario(response.data[0]);
            console.log(response.data[0])
            localStorage.setItem('userfoto',response.data[0].foto)
        })
        window.setTimeout(setBlackout(false) , 4000);
    }, []);

    return(
        <div>
            {blackout && 
                <Blackout><h3>Carregando...</h3></Blackout>
            }
            <Nav>
                <div>
                    <Logo src={logo}></Logo>
                </div>
                <div>
                    {localStorage['userfoto'] == 'imagemusuariodefault.png'?
                    <FotoPerfilD src={FotoPerfil} onClick={() => navigate('/meuperfil')}></FotoPerfilD>: 
                    <FotoPerfilD src={localStorage['userfoto']} onClick={() => navigate('/meuperfil')}></FotoPerfilD>}
                </div>
            </Nav>
            <center>
                <Bar>
                    <Layouts>
                        {layout == 'grande' ?<BotaoSelecionado><BsFillSquareFill/></BotaoSelecionado>:
                        <BotaoLayout onClick={() => selecionarbotao('grande')}><BsFillSquareFill/></BotaoLayout>}
                        {layout == 'medio' ?<BotaoSelecionadoMenor><BsFillSquareFill/></BotaoSelecionadoMenor>:
                        <BotaoLayoutMenor onClick={() => selecionarbotao('medio')}><BsFillSquareFill/></BotaoLayoutMenor>}
                        {layout == 'pequeno' ?<BotaoSelecionado><TfiLayoutGrid2Alt/></BotaoSelecionado>:
                        <BotaoLayout onClick={() => selecionarbotao('pequeno')}><TfiLayoutGrid2Alt/></BotaoLayout>}
                    </Layouts>
                    <Explorar>
                        <button onClick={() => navigate('/Explorar')}>
                            Explorar
                        </button>
                    </Explorar>
                    <CriarPost>
                        <IoIosAddCircle onClick={() => navigate('/criarpostagem')}/>
                    </CriarPost>
                </Bar>
            </center>
            <Postagens>
            {listaPostagem == undefined &&
                <Npost><p>Não há nenhuma postagem ainda, seja o primeiro!</p></Npost>
            }
            {listaPostagem && layout == 'grande' &&
                listaPostagem.map((postagens) => {
                    return(
                        <CardPostagemExtraGrande
                            key={postagens.id}
                            id={postagens.id}
                            obra = {postagens.obra}
                            titulo={postagens.titulo}
                            conteudo={postagens.conteudo}
                            autor={postagens.nome}
                            email={postagens.email}
                            foto={postagens.foto}
                            imagem={postagens.imagem}
                            background={postagens.bgimagem}
                            stars={postagens.stars}
                            comentarios={postagens.comentarios}
                        ></CardPostagemExtraGrande>
                    )
                })
            }
            {listaPostagem && layout == 'medio' &&
                listaPostagem.map((postagens) => {
                    return(
                        <CardPostagemGrande
                            key={postagens.id}
                            id={postagens.id}
                            titulo={postagens.titulo}
                            obra = {postagens.obra}
                            conteudo={postagens.conteudo}
                            autor={postagens.nome}
                            email={postagens.email}
                            foto={postagens.foto}
                            imagem={postagens.imagem}
                            background={postagens.bgimagem}
                            stars={postagens.stars}
                            comentarios={postagens.comentarios}
                        ></CardPostagemGrande>
                    )
                })
            }
            <center>
            <DivCardColunas>
                {listaPostagem && layout == 'pequeno' &&
                    listaPostagem.map((postagens) => {
                        return(
                            <CardPostagemPequeno
                                key={postagens.id}
                                id={postagens.id}
                                titulo={postagens.titulo}
                                conteudo={postagens.conteudo}
                                autor={postagens.nome}
                                obra = {postagens.obra}
                                email={postagens.email}
                                foto={postagens.foto}
                                imagem={postagens.imagem}
                                background={postagens.bgimagem}
                                stars={postagens.stars}
                                comentarios={postagens.comentarios}
                            ></CardPostagemPequeno>
                        )
                    })
                }
            </DivCardColunas>
            </center>
            </Postagens>
            <CreditBar></CreditBar>
        </div>
    )
}

export default Principal;