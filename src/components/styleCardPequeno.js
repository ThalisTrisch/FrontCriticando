import Style from 'styled-components';

export const Imagem = Style.div`
    width: 350px; height: 150px; margin-top:50px;border-radius: 40px 40px 0px 0px;background-color:grey;
    img{
        width:100%;border-radius: 40px 40px 0px 0px;max-height:150px;position:cover;min-height:150px;
    }
`;
export const Cardbottom = Style.div`
    background: grey;margin:0px;border-radius: 0px 0px 40px 40px;width: 350px; height: 150px;
`;

export const Titulo = Style.div`
    margin-top:125px;background-color:white;position: absolute;width:350px;border-radius:40px;
    height:40px;text-align:center;box-shadow: 0px 4px 10px -4px black;
    p{
        margin-top:8px
    }
`;
export const Global = Style.div`
    width:fit-content;
`;

export const GlobalMedio = Style.div`
    width:fit-content;
`;

export const CardD = Style.div`
    float:right;margin-top:30px
`;

export const CardE = Style.div`
    float:left;max-height:40px;margin-left:20px;margin-top:20px;
    div{
        margin-top:8px;
    }
    p{
        float:right;;margin-left:10px;font-size:12px
    }
`;

export const FotoPerfilPost = Style.img`
    height:40px;width:40px;border-radius:100px
`;

export const InfoStars = Style.div`
    height:50px;width:150px;
`;

export const InfoPost = Style.div`
    height:50px;width:150px;display: flex;align-items: center;
    * {
        position:relative;float:center;height:20px;font-size:20px;margin-left:4px
    }
    p {
        margin-top:-10px;margin-right:20px
    }
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
export const Bandeira = Style.div`
    *{
        font-size: 24px; position: absolute; margin-top: 268px;margin-left: 120px;color:white
    }
`
export const Star = Style.div`
    * {
        color:orange
    }
`;