import styled from 'styled-components';

export const Logo = styled.img`
    width:190px;height:auto;padding-top:10px;padding-left:40px
`;

export const LogoExplorar = styled.img`
    height:50px;padding-left:40px;margin-top:5px;
`;

export const Nav = styled.div`
    background-color: #34173d;
    height: 100px;border:grey,1px,solid;border-radius:0px 0px 40px 0px;width:100%;display:flex;
    justify-content:space-between;background-repeat:no-repeat;background-position:cover;
    background-size:100%;background-position-y:center;z-index:-10;
    box-shadow: 0px 40px 30px 20px #d8bce0;
    /* background-image:url('https://img.freepik.com/fotos-gratis/textura-escura-em-aquarela_125540-769.jpg?w=2000'); */
`;

export const Center = styled.div`
    width:60%;margin-top:20px
`;

export const Bar = styled.div`
    margin-top:10px;width:100%;height:60px;display:flex;justify-content:space-around;
    align-items: top;z-index:10;
    div{
        width:160px;
    }
`;

export const ExplorarBar = styled.div`
    margin-top:10px;width:100%;height:fit-content;display:flex;justify-content:center;

`;

export const CriarPost = styled.div`
    svg{
        font-size:40px;color:#34173d;margin-top:6px
    }
`;

export const Explorar = styled.div`
    button{
        width:120px;height:40px;font-size:16px;border-radius:20px;margin-top:10px;
        background-color:rgba(47,23,86,0.8);border-color:transparent;color:white;font-weight:bold;
    }
`

export const Layouts = styled.div`

`

export const FotoPerfilD = styled.img`
    float:right;width:70px;height:70px;margin:0px;background-color:white;
    border-radius:100px;margin-top:15px;margin-right:20px;
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
    background-color:#9184c8cc;border-radius:16px;width:36px;height:30px; margin:4px;margin-top:10px;
    font-size:16px;padding-top:4px;border-width:1px;border-color:transparent;
    svg{
        font-size:14px;
    }
`;

export const BotaoSelecionado = styled(BotaoLayout)`
    background-color:#34173d;
    svg{color:white}
`;

export const BotaoLayoutMenor = styled.button`
    background-color:#9184c8cc;border-radius:16px;width:36px;height:30px; margin:4px;
    font-size:16px;padding-top:4px;border-width:1px;border-color:transparent;
    svg{
        font-size:8px;padding-top:0px;padding-bottom:3px;
    }
`;

export const BotaoSelecionadoMenor = styled(BotaoLayoutMenor)`
    background-color:#34173d;
    svg{color:white}
`;

export const FilterBar = styled(Nav)`
    background-image: none;background-color:rgba(47,23,86,0.8);border-radius:0px 0px 80px 0px;height:140px;display:flex;
    div{
        width:100%;
    }h3{
        margin-top:20px;margin-bottom:10px;
    }
`

export const BtnCriar = styled.button`
    font-size:16px;border-radius:20px;width:160px;height:30px;margin-top:10px;
`;


export const CampoPesq = styled.input`
    font-size:16px;border-radius:20px 0px 0px 20px;width:300px;height:26px;border-color:#141414;
    text-align:center;border-right:none;margin-top:2px;

`;
export const BtnPesq = styled.button`
    border-radius:0px 20px 20px 0px;height:30px;width:40px;background-color:#141414;
    *{
        font-size:14px;color:white
    }
`;

export const Postagens = styled.div`
    margin-top:0px;
`;

export const Filter = styled.div`
    background-color:#141414;height: 60px;display:flex;justify-content:space-between;
    img{height:50px;width:auto;}
    button{width:80px;height:30px;margin-top:15px;margin-right:4%;font-weight:bold;color:#141414;
    background-color:rgba(223, 218, 235,0.8);border-radius:10px;border-color:transparent}
`

export const GenreSpace = styled.div`
    display:flex;justify-content: center;flex-wrap: wrap;
`

export const DivCardColunas = styled.div`
    display:flex;justify-content: space-around;flex-wrap: wrap;max-width:800px;
`

export const Npost = styled.div`
    display:flex;justify-content: center;align-content:center;align-items: center;height:60vh;
    p{text-align:center;}
`