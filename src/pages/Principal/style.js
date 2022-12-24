import styled from 'styled-components';

export const Logo = styled.p`
    font-size:30px;margin:0px;padding-top:26px;padding-left:60px;width:300px;float:left;color:white
`;

export const Nav = styled.div`
    background-color:grey; height: 100px;border:grey,1px,solid;border-radius:0px 0px 0px 0px;
    width:100%;
`;

export const Center = styled.div`
    width:60%;margin-top:20px
`;

export const Bar = styled.div`
    margin-top:20px;width:100%;height:80px;justify-content:space-between;
`;

export const CriarPost = styled.div`
    button{
        font-size:16px;border-radius:16px;width:50px;height:40px;margin-top:10px;
        * {
            font-size:24px;padding-top:4px;color:green;
        }
    }
`;

export const Explorar = styled.div`
    button{
        width:140px;height:40px;font-size:14px;border-radius:20px;margin-top:10px;
    }
`

export const Layouts = styled.div`

`

export const FotoPerfilD = styled.img`
    float:right;width:80px;height:80px;margin:0px;background-color:white;
    border-radius:100px;margin-top:10px;margin-right:60px;
`;

export const Obra = styled.div`
    padding-top:50px;
`;

export const Teorias = styled.div`
    width:400px;float:right
`;

export const PerfilNav = styled.div`
    background:grey; height: 300px;border-radius:0px 0px 120px 0px
`;

export const DadosPerfil = styled.div`
    padding-top:50px; padding-left:76px;width:500px;
    h2{
        margin:0px;font-size:30px
    }
    p{
        margin:0px
    }
`;

export const Menu = styled.div`
    float:right;
    button{
        width:100px;border-radius:10px;border:0px;margin-right:40px;
    }
`;

export const MenuBar = styled.div`
    padding-top:35px;padding-right:40px; 
    * {
        float:right;width:80px;height:30px;background-color:transparent;border-radius:20px;
        font-size:40px;
    }
`;

export const Campo = styled.input`
    width:20%;text-align:center;font-size:16px;border-radius:10px;margin-top:12px;
`;

export const CampoMaior = styled.textarea`
    width:40%;text-align:center;font-size:14px;border-radius:10px;margin-top:12px;
`;

export const CampoImg = styled.div`
    width:200px;height:200px;background-color: grey;
    img{
        width:100%;height:auto;margin-top:20%;
    }
`;

export const PostTitulo = styled.h2`
    margin-top:60px
`;

export const ImgStar = styled.img`
    height:26px;width:26px;
`;

export const ImagePost = styled.img`
    width:60px;height:60px;border-radius:120px;
`;

export const Star = styled.div`
    * {
        color:orange
    }
`;

export const Blackout = styled.div`
    background-color:black;position:fixed;width:100%;height:120vh;z-index:10;
    h3{
        color:white;text-align:center;margin-top:50vh;
    }
`;

export const BotaoLayout = styled.button`
    background-color:white;border-radius:16px;width:50px;height:40px; margin:4px;margin-top:10px;
    font-size:16px;padding-top:4px
`;

export const BotaoSelecionado = styled(BotaoLayout)`
    background-color:grey;
`;

export const FilterBar = styled(Nav)`
    background-color:darkGrey;border-radius:0px 0px 80px 0px;height:140px;display:flex;
    div{
        width:100%;
    }
`

export const BtnCriar = styled.button`
    font-size:16px;border-radius:20px;width:160px;height:30px;margin-top:10px
`;


export const CampoPesq = styled.input`
    font-size:16px;border-radius:20px 0px 0px 20px;width:300px;height:24px;border-color:grey;
    text-align:center;border-right:none;

`;
export const BtnPesq = styled.button`
    border-radius:0px 20px 20px 0px;height:30px;width:40px;background-color:grey;
    *{
        font-size:13px
    }
`;

export const Postagens = styled.div`
    margin-top:90px;
`;

export const Filter = styled.div`
    background-color:#2e2d32;
    h2{
        text-align: center;color:white
    }
`

export const GenreSpace = styled.div`
    display:flex;justify-content: center;flex-wrap: wrap;
`