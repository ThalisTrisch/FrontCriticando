import styled from 'styled-components';

export const Logo = styled.p`
    font-size:30px;margin:0px;padding-top:26px;padding-left:60px;width:300px;float:left;color:white
`;

export const Nav = styled.div`
    background:grey; height: 100px;border:grey,1px,solid;border-radius:0px 0px 40px 0px;
`;
export const LargeNav = styled.div`
    background:grey; height: 160px;border-radius:0px 0px 60px 0px
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
export const Shadow = styled.div`
    width:100%;height:80vh;position:absolute;z-index:-1;background: linear-gradient(black, transparent);
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

export const Deletar = styled.button`
    width:50px;height:36px;background-color:white;border-color:red;border-radius:10px;
    position:absolute;
    *{
        color:red;font-size:20px
    }
`