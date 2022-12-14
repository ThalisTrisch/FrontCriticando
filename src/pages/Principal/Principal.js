import axios from 'axios';
import { useEffect , useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardPostagemGrande from '../../components/CardPostagemGrande.js'
import CardPostagemMedio from '../../components/CardPostagemMedio.js'
import CardPostagemPequeno from '../../components/CardPostagemPequeno.js'
import FotoPerfil from '../../images/imagemusuariodefault.png';
import { Logo, Nav, CriarPost, Bar, FotoPerfilD, Blackout, BotaoSelecionado,
     BotaoLayout, Layouts, Explorar, Postagens } from './style.js'
import { BsSearch, BsFillSquareFill } from "react-icons/bs";
import { TfiLayoutGrid3Alt,TfiLayoutGrid2Alt } from "react-icons/tfi";
import { IoIosAddCircle } from "react-icons/io";

function Principal(){
    const [listaPostagem,setListaPostagem] = useState();
    const [blackout,setBlackout] = useState(true)
    const [layout, setLayout] = useState('grande')
    const [usuario, setUsuario] = useState('');
    const navigate = useNavigate()
    document.title = 'Criticando - Principal';

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
                <Logo>Logo</Logo>
                {usuario.foto == 'imagemusuariodefault.png'?
                <FotoPerfilD src={FotoPerfil} onClick={() => navigate('/meuperfil')}></FotoPerfilD>: 
                <FotoPerfilD src={usuario.foto} onClick={() => navigate('/meuperfil')}></FotoPerfilD>}
            </Nav>
            <center>
                <Bar>
                    <Layouts>
                        {layout == 'grande' ?<BotaoSelecionado><BsFillSquareFill/></BotaoSelecionado>:
                        <BotaoLayout onClick={() => selecionarbotao('grande')}><BsFillSquareFill/></BotaoLayout>}
                        {layout == 'medio' ?<BotaoSelecionado><TfiLayoutGrid2Alt/></BotaoSelecionado>:
                        <BotaoLayout onClick={() => selecionarbotao('medio')}><TfiLayoutGrid2Alt/></BotaoLayout>}
                        {layout == 'pequeno' ?<BotaoSelecionado><TfiLayoutGrid3Alt/></BotaoSelecionado>:
                        <BotaoLayout onClick={() => selecionarbotao('pequeno')}><TfiLayoutGrid3Alt/></BotaoLayout>}
                    </Layouts>
                    <Explorar>
                        <button onClick={() => navigate('/Explorar')}>
                            Explorar
                        </button>
                    </Explorar>
                    <CriarPost>
                        <button onClick={() => navigate('/criarpostagem')}><IoIosAddCircle/></button>
                    </CriarPost>
                </Bar>
            </center>
            <Postagens>
            {typeof listaPostagem !== "undefined" && layout == 'grande' &&
                listaPostagem.map((postagens) => {
                    return(
                        <CardPostagemGrande
                            key={postagens.id}
                            id={postagens.id}
                            titulo={postagens.titulo}
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
            {typeof listaPostagem !== "undefined" && layout == 'medio' &&
                listaPostagem.map((postagens) => {
                    return(
                        <CardPostagemMedio
                            key={postagens.id}
                            id={postagens.id}
                            titulo={postagens.titulo}
                            conteudo={postagens.conteudo}
                            autor={postagens.nome}
                            email={postagens.email}
                            foto={postagens.foto}
                            imagem={postagens.imagem}
                            background={postagens.bgimagem}
                            stars={postagens.stars}
                            comentarios={postagens.comentarios}
                        ></CardPostagemMedio>
                    )
                })
            }
            {typeof listaPostagem !== "undefined" && layout == 'pequeno' &&
                listaPostagem.map((postagens) => {
                    return(
                        <CardPostagemPequeno
                            key={postagens.id}
                            id={postagens.id}
                            titulo={postagens.titulo}
                            conteudo={postagens.conteudo}
                            autor={postagens.nome}
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
            </Postagens>
        </div>
    )
}

export default Principal;