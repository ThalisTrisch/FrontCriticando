import Styled from 'styled-components';

export const Imagem = Styled.div`
    width: 350px; height: 150px; margin-top:50px;border-radius: 40px 40px 0px 0px;background-color:grey;
    img{
        width:100%;border-radius: 40px 40px 0px 0px;max-height:150px;position:cover;min-height:150px;
    }
`;

export const FotoPerfilPost = Styled.img`
    height:46px;width:46px;border-radius:100px
`;

export const IconUser = Styled.img`
    height:50px;width:50px;border-radius:100px;
`;

export const Heath = Styled.div`
    * { font-size:32px;color:red }
`;

export const BlocoComent = Styled.div`
    margin-top:20px;display:flex;border:black
`

export const Global = Styled.div`
    width:fit-content;margin-top:20px
`;

export const BlocoUserTeoria = Styled.td`
    width:200px;background-color:grey;height:100px;display:flex;
    img{
        width:50px;height:50px;border-radius:25px;
    }
`;

export const BlocoConteudoTeoria = Styled.td`
    width:300px;background-color:lightblue;text-align:center
`;

export const BlocoAvaliacaoTeoria = Styled.td`
    width:200px;background-color:lightGrey;height:100px
`;

export const User = Styled.div`
    width:250px;display:flex;background-color:darkGrey;height:60px;border-radius:25px;
    img{
        margin:5px;
    }
    p{margin:16px;}
`;

export const Conteudo = Styled.div`
    width:500px;display:flex;
    p{margin:16px;text-align:center;width:100%}
`;

export const Deletar = Styled.button`
    font-size:30px;background-color:transparent;
`

export const Opcoes = Styled.div`
    width:200px;display:flex;background-color:grey;border-radius:20px;height:60px;
    p{
        margin:16px;margin-right:8px
    }
    *{margin-top:8px}
`

export const GenreButton = Styled.button`
    border-radius:10px;background-color:${(props) => props.color};width:fit-content;
    border-width:0px;margin:2px;justify-content: center;
`

export const SelectGenreButton = Styled(GenreButton)`
    border-width:2px;border-color:white;margin:2px;
`