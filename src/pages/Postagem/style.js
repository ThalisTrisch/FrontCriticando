import styled from 'styled-components';

//Usadas: LargeNav, Obra, Teorias, ImagePost, Star, AddComentario, Sombra, TopInfo, BtnTeoria 

export const Logo = styled.img`
    width:190px;height:auto;padding-top:10px;padding-left:40px
`;

export const LayoutPosts = styled.div`
    display:flex;justify-content: space-evenly;flex-wrap: wrap;
`

export const LogoEditar = styled.p`
    font-size:30px;margin:0px;padding-top:26px;padding-left:60px;width:300px;float:left;color:white;
`;

export const NavEditar = styled.div`
    background:rgba(47,23,86,0.6); height: 100px;border:grey,1px,solid;
    border-radius:0px 0px 40px 0px;margin-bottom:80px;
`;

export const EditarPost = styled.div`
    h1{margin-bottom:20px;}
    button{width:160px;font-size:18px;margin-top:20px; background-color:#34173d;color:white;
    border-radius:50px;border-color:transparent; height:30px;}
`

export const Campo = styled.input`
    width:360px;text-align:center;font-size:16px;border-radius:20px;margin-top:12px;border:solid;
    border-width:1px;height:24px;
`;

export const CampoMaior = styled.textarea`
    width:360px;text-align:center;font-size:14px;border-radius:14px;margin-top:12px;resize:vertical;
    border:solid;border-width:1px;
`;

export const Nav = styled.div`
    background-color: #34173d;
    height: 100px;border:grey,1px,solid;border-radius:0px 0px 40px 0px;width:100%;display:flex;
    justify-content:space-between;background-repeat:no-repeat;background-position:cover;
    background-size:100%;background-position-y:center;z-index:-10;
    box-shadow: 0px 40px 30px 20px #d8bce0;
    /* background-image:url('https://img.freepik.com/fotos-gratis/textura-escura-em-aquarela_125540-769.jpg?w=2000'); */
`;

export const Titulo = styled.h2`
    text-align:center;margin-top:40px;
`

export const LargeNav = styled.div`
    height: 60vh;min-height:auto;width:100%;border-radius:0px 0px 100px 0px;background-color:rgb(38, 38, 38,0.5);
    background-image: url('${(props) => props.imagem}');background-repeat:no-repeat;
    background-position-y:center;background-size:160%;
    @media screen and (min-width: 300px){background-size:280%;}
    @media screen and (min-width: 350px){background-size:240%;}
    @media screen and (min-width: 420px){background-size:180%;}
    @media screen and (min-width: 540px){background-size:120%;}
    @media screen and (min-width: 700px){background-size:100%;}
`;

export const Sombra = styled.div`
    width:100%;height:60vh;position:absolute;z-index:1;background: linear-gradient(black, transparent);
`;

export const BtnCriar = styled.button`
    font-size:16px;border-radius:20px;width:160px;height:30px;margin-top:10px
`;

export const Center = styled.div`
    width:60%;margin-top:20px
`;

export const Bar = styled.div`
    width:500px;margin-top:20px
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

export const FotoPerfilD = styled.img`
    float:right;width:80px;height:80px;margin:0px;background-color:white;
    border-radius:100px;margin-top:10px;margin-right:60px;
`;

export const FotoPerfilE = styled(FotoPerfilD)`
    float:left;margin-top:60px;width:200px;height:200px;margin-left:0px;position:absolute;
`;

export const TopInfo = styled.div`
    display:flex;justify-content: space-between;padding-top:26vh;margin-left:2%;margin-right:2%;
    div{
        z-index:10
    }
`;

export const Obra = styled.div`
    background-color:white;width:240px;height:60px;border-radius:40px;display: flex;align-items: center;
    p{
        text-align:center;width:100%;
    }
`;

export const Teorias = styled.div`
    display:flex;flex-direction: column;align-items: flex-end;
    button{
       border-radius:16px;border-width:0px;height:30px;margin-bottom:4px;width:100px
    }
`;

export const BtnTeoria = styled.button`
    background-image: url('https://media.istockphoto.com/id/1151411469/pt/foto/abstract-watercolor-background-hot-pink.jpg?s=612x612&w=0&k=20&c=EPP3HdopIrgL1csOHrD4tomzJGFmUjW1HyYH6MR2Ujs=');
    background-color:transparent;background-size:cover;
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

export const Image = styled.img`
    width:100%;height:120vh;position:absolute;z-index:-1;filter: blur(2px);
`;
export const MenuBar = styled.div`
    padding-top:35px;padding-right:40px; 
    * {
        float:right;width:80px;height:30px;background-color:transparent;border-radius:20px;
        font-size:40px;
    }
`;

export const Shadow = styled.div`
    width:100%;height:80vh;position:absolute;z-index:-1;background: linear-gradient(black, transparent);
`;

export const CampoImg = styled.div`
    width:200px;height:200px;background-color: grey;
    img{
        width:100%;height:auto;margin-top:20%;
    }
`;

export const ConfigPost = styled.div`
    float:left;margin:0px;margin-left:20px;
`;

export const ImagePost = styled.img`
    width:60px;height:60px;border-radius:120px;
`;

export const Star = styled.div`
    width:fit-content;
    * {
        color:orange;font-size:24px;
    }
`;

export const Blackout = styled.div`
    background-color:black;position:fixed;width:100%;height:120vh;z-index:10;
    h3{
        color:white;text-align:center;margin-top:50vh;
    }
`;

export const BotaoSelecionado = styled.button`
    background-color:grey
`;

export const Deletar = styled.button`
    width:50px;height:36px;background-color:white;border-color:red;border-radius:10px;
    position:absolute;
    *{
        color:red;font-size:20px
    }
`

export const AddComentario = styled.div`
    display:flex;flex-direction: row;justify-content:space-between;
    button{
        margin-left:20px;border-radius:10px 0px 0px 10px;font-size:16px;width:100px;
        background-color:#141414;color:white;height:40px;border-color:transparent;
    }
    textarea{
        margin-right:20px;width:100%; resize: vertical;font-size:14px;text-align:center
    }
`

export const ConteudoPage = styled.div`
    display:flex;align-items: center;justify-content: center;width:100%;flex-direction: column;
    h1{
        font-size:40px;margin-top:40px;max-width:80%;
    }
    p{
        text-align:center;margin-top:40px;max-width:80%;word-break: break-word;
    }

`
export const FinalBar = styled.div`
    width:100%;height:100px;background-color:#141414;display:flex;justify-content: space-around;
    align-items:center;
    p{
        color:white;
    }
    *{
    }
`

export const Coments = styled.div`
    width:100%;background-color:grey;padding-bottom:32px;padding-top:20px;

`

export const ConteudoPostagem = styled.div`
    display:flex;justify-content:center;flex-wrap: wrap;margin-top:40px;margin-bottom:40px;
`

export const ConteudoFinal = styled.div`
    width:400px;display:flex;flex-direction: column;align-items: center;justify-content: center;
    h3{
        margin-top:20px;margin-bottom:20px;
    }
    p{margin-bottom:10px;}
`

export const ImagemPost = styled.img`
    width:400px;border-radius:10px;
`