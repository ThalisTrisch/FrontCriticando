import Style from 'styled-components';

export const Imagem = Style.div`
    width: 350px; height: 150px; margin-top:50px;border-radius: 40px 40px 0px 0px;background-color:grey;
    img{
        width:100%;border-radius: 40px 40px 0px 0px;max-height:150px;position:cover;min-height:150px;
    }
`;

export const FotoPerfilPost = Style.img`
    height:46px;width:46px;border-radius:100px
`;

export const IconUser = Style.img`
    height:50px;width:50px;border-radius:100px;
`;

export const Heath = Style.div`
    * { font-size:32px;color:red }
`;

export const BlocoComent = Style.div`
    margin-top:20px;display:flex;border:black
`

export const Global = Style.div`
    width:fit-content;margin-top:20px
`;

export const BlocoUserTeoria = Style.td`
    width:200px;background-color:grey;height:100px;display:flex;
    img{
        width:50px;height:50px;border-radius:25px;
    }
`;

export const BlocoConteudoTeoria = Style.td`
    width:300px;background-color:lightblue;text-align:center
`;

export const BlocoAvaliacaoTeoria = Style.td`
    width:200px;background-color:lightGrey;height:100px
`;

export const User = Style.div`
    width:250px;display:flex;background-color:darkGrey;height:60px;border-radius:25px;
    img{
        margin:5px;
    }
    p{margin:16px;}
`;

export const Conteudo = Style.div`
    width:500px;display:flex;
    p{margin:16px;text-align:center;width:100%}
`;

export const Deletar = Style.button`
    width:50px;height:36px;background-color:white;border-color:red;border-radius:10px;margin-top:10px;
    *{
        color:red;font-size:20px;
    }
`

export const Opcoes = Style.div`
    width:200px;display:flex;background-color:grey;border-radius:20px;height:60px;
    p{
        margin:16px;margin-right:8px
    }
    *{margin-top:8px}
`