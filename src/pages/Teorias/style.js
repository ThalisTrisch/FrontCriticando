import styled from 'styled-components';

export const Logo = styled.img`
    width:190px;height:auto;padding-top:10px;padding-left:40px
`;
export const Nav = styled.div`
    background:rgba(47,23,86,1); height: 100px;border:grey,1px,solid;border-radius:0px 0px 40px 0px;
`;

export const LargeNav = styled.div`
    height: 50vh;min-height:auto;width:100%;border-radius:0px 0px 100px 0px;
    background-image: url('${(props) => props.imagem}');background-repeat:no-repeat;
    background-position-y:center;background-size:160%;z-index:-2;
    @media screen and (min-width: 300px){background-size:280%;}
    @media screen and (min-width: 350px){background-size:240%;}
    @media screen and (min-width: 420px){background-size:180%;}
    @media screen and (min-width: 540px){background-size:120%;}
    @media screen and (min-width: 700px){background-size:100%;}
`;


export const ItensNav = styled.div`
    height: 50vh;min-height:auto;width:100%;display:flex;justify-content:space-around;align-items:center;z-index:20;
`;

export const Sombra = styled.div`
    width:100%;height:60vh;position:absolute;z-index:-1;
    background: linear-gradient(black, transparent);
`;

export const BtnCriar = styled.button`
    font-size:18px;border-radius:20px;width:160px;height:30px;margin-top:10px;border-color:transparent;
    background-color:#34173d;color:white
`;

export const Center = styled.div`
    width:60%;margin-top:20px
`;

export const Bar = styled.div`
    width:100%;margin-top:20px;margin-bottom:30px;
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

export const Obra = styled.div`
    background-color:black;width:fit-content;height:fit-content;border-radius:20px;
    p{
        margin-left:20px;margin-right:20px;color:white;font-size:24px;padding-bottom:4px;
    }
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
export const BackLogin = styled.div`
    background: rgba(221,217,206, 0.5);height:200px;width:360px;
    border-radius:40px;float:right;margin-right:10%;margin-top:4%;
    button{
        margin-left:30%;border-radius:10px;
    }
    h2{
        width:100%;text-align:center;margin-top:20px;font-size:30px
    }
    p{
        width:100%;text-align:center;margin-top:10px;
    }
`;
export const Msg = styled.p`
    font-size:45px;margin-left:10%;margin-top:8%;font-weight:bold;color:white;
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
export const BtnCriarPost = styled.button`
    width:120px;height:28px;background-color:LightGrey;border-radius:20px;margin:10px
`;

export const PostTitulo = styled.h2`
    margin-top:60px
`;

export const ImgStar = styled.img`
    height:26px;width:26px;
`;

export const SelectObras = styled.select`
    width:220px;height:32px;background-color:LightGrey;border-radius:20px;margin:10px;
    text-align:center;
    option{
        background-color:LightGrey
    }
`;

export const ConfigPost = styled.div`
    float:left;margin:0px;margin-left:20px;
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

export const BotaoSelecionado = styled.button`
    background-color:grey
`;

export const TelaAviso = styled.div`
    height:100vh;background-image: url('https://i.pinimg.com/originals/62/02/b9/6202b931f3d654284e53d6a3e8616a4a.jpg');
    background-size:cover;
`

export const CardAviso = styled.div`
    background-color:rgba(223, 218, 235,1);height:400px;width:80%;max-width:500px;border-radius:40px;display:flex;
    justify-content: center;align-items: center;flex-direction: column;margin-top:60px;
`

export const Aviso = styled.div`
    display:flex;justify-content: center;
    p{width:90%;font-size:22px;}
`

export const BtnTeoria = styled.div`
    margin-top:40px;
    p{
        margin-bottom:2px;margin-left:10px;
    }
    input{
        height:20px;width:20px;cursor:pointer;background-color:transparent;
    }
    button{
        width:80px;height:30px;border-radius:20px;margin:10px;cursor:pointer;
    }
    div{
        display:flex;justify-content: center;
    }
`

export const AvisoBody = styled.div`
    display:flex;justify-content: center;
`

export const TopInfo = styled.div`
    display:flex;justify-content: space-between;
`;

export const Global = styled.div`
    background-image:url('${props=> props.url}');background-position:cover;background-color: linear-gradient(black, transparent);
`

export const Teorias = styled.div`
    button{
        width:80px;height:30px;border-radius:20px;font-size:16px;background-color:lightgray;border-color:transparent;
    }
`

export const RemoverTeoria = styled.div`
    background-color: rgba(223, 218, 235,0.8);width:40px;height:40px;border-radius:0px 20px 20px 0px;
    margin-top:75px;
    svg{
        padding:12px;color:red
    }
`

export const ImagemPost = styled.img`
    width:60%;margin-bottom:20px;border-radius:20px;opacity:0.8
`


export const Pass = styled.button`
    border-color:transparent;background-color:rgba(47,23,86,0.8);color:white
`

export const Back = styled(Pass)`
    background-color:#141414
`


export const Npost = styled.div`
    display:flex;justify-content: center;align-content:center;align-items: center;height:60vh;
    p{text-align:center;}
`