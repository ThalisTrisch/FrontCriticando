import { GenreButton, SelectGenreButton } from './style';
import { useState,useEffect } from 'react';

function CardGeneros({obra,genero,filtrar,generofiltrado}){
    const [cor, setCor] = useState();
    useEffect(()=>{
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        setCor(color)
    }, [])

    return(
        <>
            {generofiltrado == genero ?
            <SelectGenreButton color={cor} onClick={() => filtrar(genero)}><strong>{genero}</strong></SelectGenreButton>
            :
            <GenreButton color={cor} onClick={() => filtrar(genero)}><strong>{genero}</strong></GenreButton>
            }
            </>
    );
}

export default CardGeneros;