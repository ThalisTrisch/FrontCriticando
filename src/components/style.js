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
    margin-top:125px;background-color:white;position: absolute;
    text-decoration: none;width:280px;border-radius:40px;height:50px;
    margin-left:30px;text-align:center;box-shadow: 0px 4px 10px -4px black;
`;
export const Global = Style.div`
    width:fit-content;
`;
export const PgTitulo = Style.p`
    margin-top:10px;font-size:20px;font-color:black;text-decoration: none;margin-left:10px
`;

export const ImgStar = Style.img`
    height:30px;width:30px;position:absolute;margin-top:60px;margin-left:20px
`;

export const CardD = Style.div`
    float:right;margin-top:48px;
    div{
        margin-top:4px;
    }
    p{
        margin-top:0px;padding-top:20px
    }
`;

export const CardE = Style.div`
    float:left;max-height:40px;margin-top:50px;margin-left:20px;
    div{
        margin-top:8px;
    }
    p{
        float:right;margin-top:14px;margin-left:6px
    }
`;

export const FotoPerfilPost = Style.img`
    height:46px;width:46px;border-radius:100px
`;

export const InfoStars = Style.div`
    height:50px;width:150px;
    p {
        margin-right:6px
    }
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