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
    margin-top:10px;display:flex;border:black;justify-content: space-evenly;margin-right:10px;
    margin-left:20px;
`

export const Global = Styled.div`
    width:fit-content;margin-top:10px;
`;

export const BlocoUserTeoria = Styled.div`
    width:200px;background-color:lightgray;height:200px;display:flex;align-content:center;
    justify-content:center;align-items: center;flex-direction: column; 
    border-radius: 10px 0px  0px 10px;
    div{
        margin-top:20px;margin-bottom:20px;
    }
    img{
        width:50px;height:50px;border-radius:25px;
    }
`;

export const BlocoConteudoTeoria = Styled.div`
    width:320px;background-color:lightgray;text-align:center;display:flex;align-content:center;
    justify-content:center;align-items: center;flex-direction: row;justify-content: flex-start;
    border-radius: border-radius: 0px 10px 10px 0px;
    
`;

export const BlocoAvaliacaoTeoria = Styled.div`
    width:200px;background-color:lightgrey;height:100px
`;

export const User = Styled.div`
    width:250px;display:flex;background-color:darkGrey;height:60px;border-radius:50px 0px 0px 50px;
    justify-content: space-between;align-items: center;
    *{
        margin:4px;
    }
    p{
        margin-right:16px;
    }
`;

export const Conteudo = Styled.div`
    width:100%;border-color:black;border:2px;display:flex;align-items: center;
    background-color:lightGrey;
    p{text-align:left;max-width:100%;width:90%;font-size:14px;margin-right:10px;margin-left:10px;}
`;

export const Opcoes = Styled.div`
    width:150px;display:flex;background-color:white;height:60px;border-radius:0px 50px 50px 0px;
    justify-content: space-evenly;align-items: center;
    svg{
        font-size:24px;color:red;
    }
    div{
        display:flex;justify-content: center;
        p{
            margin-right:6px;font-size:16px;
        }
    }
`

export const SelectGenreButton = Styled.button`
    border-radius:10px;background-color:${(props) => props.color};width:fit-content;
    border-width:0px;margin:4px;justify-content: center;border:2px solid white;color:white;
`

export const GenreButton = Styled(SelectGenreButton)`
    border:3px solid black;border-left:none;border-bottom:none;color:black;
`

export const Teoria = Styled.div`
    display:flex;border-color:black;width:fit-content;border-radius:10px;
`

export const Coluna = Styled.div`
    width:2px;height:80%;background:black;
`

export const Texto = Styled.div`
    display:flex;align-content:center;justify-content:center;align-items: center;
    flex-direction: column;width:100%;
    button{
        width:100px;height:30px;border-radius:5px;border-width:1px;margin-left:4px;margin-right:4px;
    }
`

export const AlternarLados = Styled.div`
    width:80%;height:160px;display:flex;flex-direction: column;justify-content: space-between;
    div{
        p{
            font-size:12px;
        }
    }
`

export const Bar = Styled.div`
    width:100%;display:flex;justify-content:space-around;align-items: center;background-color:#141414;
    height:120px;color:white;margin-bottom: 0px;position:absolute;margin-top:4%;
    img{height:60px;width:auto;}
`

export const Logo = Styled.img`
    width:180px;
`;


export const Aprovar = Styled.button`
    border: 2px solid white;background-color:lightgreen;
`;


export const Reprovar = Styled(Aprovar)`
    background-color:lightcoral;
`;