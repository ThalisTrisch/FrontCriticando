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
    * { font-size:20px;color:red }
`;

export const BlocoComent = Style.div`
    margin-top:20px
`

export const Global = Style.div`
    width:fit-content;margin-top:20px
`;

export const BlocoUserTeoria = Style.td`
    width:200px;background-color:grey;height:100px;
`;

export const BlocoConteudoTeoria = Style.td`
    width:300px;background-color:lightblue;text-align:center
`;

export const BlocoAvaliacaoTeoria = Style.td`
    width:200px;background-color:lightGrey;height:100px
`;