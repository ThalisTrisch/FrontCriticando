import axios from 'axios';
import { useEffect , useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardPostagem from '../components/CardPostagem.js'
import { Logo, Nav, BtnCriar, Bar, BtnPesq, CampoPesq, FotoPerfilD} from './style.js'
import FotoPerfil from '../images/imagemusuariodefault.png';

function Principal(){
    const [listaPostagem,setListaPostagem] = useState();
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

    useEffect(()=>{
        buscarpostagem();
        axios.get(`http://localhost:3001/getuser/${localStorage['useremail']}`).then((response)=>{
            setUsuario(response.data[0]);
        })
    }, []);

    function buscarpostagem(){
        axios.get(`http://localhost:3001/getpostagens`).then((response)=>{
            setListaPostagem(response.data);
        })
    }

    return(
        <div>
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
                        <BtnPesq>Pesquisar</BtnPesq>
                    </div>
                    <div>
                        <BtnCriar onClick={() => navigate('/criarpostagem')}>criar postagem</BtnCriar>
                    </div>
                </Bar>
            </center>
            {typeof listaPostagem !== "undefined" &&
                listaPostagem.map((obras)=>{
                    return(
                        <CardPostagem
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
                        ></CardPostagem>
                    )
                })
            }
        </div>
    )
}

export default Principal;