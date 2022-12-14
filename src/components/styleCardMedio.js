import Style from 'styled-components';

export const Imagem = Style.div`
    width: 300px; height: 125px; margin-top:50px;border-radius: 40px 40px 0px 0px;background-color:grey;
    img{
        width:100%;border-radius: 40px 40px 0px 0px;max-height:150px;position:cover;min-height:125px;
    }
`;
export const Cardbottom = Style.div`
    background: grey;margin:0px;border-radius: 0px 0px 40px 40px;width: 300px; height: 125px;
`;

export const Titulo = Style.div`
    margin-top:105px;background-color:white;position: absolute;
    text-decoration: none;width:200px;border-radius:40px;height:40px;
    margin-left:50px;text-align:center;box-shadow: 0px 4px 10px -4px black;
`;
export const Global = Style.div`
    width:fit-content;
`;

export const PgTitulo = Style.p`
    margin-top:10px;font-size:14px;font-color:black;text-decoration: none;margin-left:10px
`;

export const CardD = Style.div`
    float:right;margin-top:48px;width:140px;
    div{
        margin-top:4px;
    }
    p{
        margin-top:0px;padding-top:20px
    }
`;

export const CardE = Style.div`
    float:left;max-height:40px;margin-top:32px;margin-left:20px;width:140px;
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
    height:20px;width:150px;
    p {
        margin-right:6px;padding-bottom:10px;
    }div{
        margin-right:10px;
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
    height:50px;width:50px;border-radius:50px;
`;

export const Heath = Style.div`
    * { font-size:20px;color:red }
`;

export const BlocoComent = Style.div`
    margin-top:20px
`
export const Bandeira = Style.div`
    *{
        font-size: 24px; position: absolute; margin-top: 216px;margin-left:100px;color:white;
        transition: transform 0.4s;
    }
    *:hover {
        transform: scale(1.06);
        transform: color:blue;
    }
`
export const Star = Style.div`
    * {
        color:orange
    }
`;