import axios from 'axios';
import { useState } from 'react';
import { Navigate , useNavigate, useParams } from 'react-router-dom';

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
        <div>
            <nav>
                <h2>Criar Teoria</h2>
            </nav>
            <input
                type='text'
                name='titulo'
                placeholder='titulo'
                onChange={mudarValores}
            />
            <input
                type='text'
                name='conteudo'
                placeholder='conteúdo'
                onChange={mudarValores}
            />
            <button onClick={Criar}>Finalizar</button>
        </div>
    )
}

export default CriarTeoria;