import styled from 'styled-components';

export const Logo = styled.p`
    font-size:30px;margin:0px;padding-top:26px;padding-left:60px;width:300px;float:left;color:white
`;
export const Nav = styled.div`
    background:rgba(47,23,86,0.6); height: 100px;border:grey,1px,solid;border-radius:0px 0px 40px 0px;
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
    font-size:16px;border-radius:20px 0px 0px 20px;width:320px;height:25px;border-color:black;
    text-align:center;border-right:none;border-width:1px;margin-top:10px;

`;
export const BtnPesq = styled.button`
    border-radius:0px 20px 20px 0px;height:28px;width:40px;background-color:rgba(223, 218, 235,0.8);
    border-width:1px;
    *{
        font-size:14px;color:#141414;
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
    width:360px;text-align:center;font-size:16px;border-radius:20px;margin-top:12px;border:solid;
    border-width:1px;height:24px;
`;
export const CampoMaior = styled.textarea`
    width:360px;text-align:center;font-size:14px;border-radius:14px;margin-top:12px;resize:vertical;
    border:solid;border-width:1px;
`;

export const CampoImg = styled.div`
    width:200px;height:200px;display:flex;align-items: center;justify-content: center;
    img{
        width:100%;height:auto;
    }
    progress{
        height:40px;color:#34173d;
    }
`;

export const BtnCriarPost = styled.button`
    width:140px;height:32px;background-color:#34173d;border-radius:20px;
    margin:10px;border-width:1px;font-size:16px;color:white
`;

export const PostTitulo = styled.h2`
    margin-top:60px
`;

export const ImgStar = styled.img`
    height:26px;width:26px;
`;

export const SelectObras = styled.select`
    width:220px;height:32px;background-color:white;border-radius:20px;margin-top:8px;
    text-align:center;
    option{
        background-color:white
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


export const TituloTeoria = styled.h2`
    margin-top:80px;margin-bottom:10px;font-size:30px;
`;

export const Form = styled.div`
    display:flex;align-content:center;justify-content: center;flex-direction: row;
    align-items: center;height:90vh;justify-content: space-evenly;flex-wrap: wrap;
    h2{margin-top:20px;}
    div{
        display:flex;flex-direction: column;align-items: center;
        div{
            flex-direction: row;
            button{margin-top:10px;height:29px;}
        }
        p{margin-top:10px;}
    }
`

export const FormImg = styled.div`
    display:flex;justify-content: center;flex-direction: row;flex-wrap: wrap;align-items: center;
`

export const InputSeparado = styled.div`
    width:400px;height:200px;background:linear-gradient(rgba(223, 218, 235,0.8),rgba(47,23,86,0.8));display:flex;margin:40px;
    justify-content: space-between;align-items: center;border-radius:6px;
    div{
        form{
            display:flex;flex-direction: column;align-items: center;margin:4px;
            div{
                background-color:rgba(223, 218, 235,0.8);margin:4px;border-radius:2px;padding:4px;width:172px;
                label{
                    height:100px;width:100%;padding:46px;
                    input[type="file"]{
                        display:none;
                    }
                    span{height:100%;width:100%;font-size:18px;}
                }
            }
            p{font-size:10px;padding:4px;margin-bottom:4px;}
            button{
                width:180px;background-color:lightgreen;border-radius:10px;border-color:transparent;
                height: 24px;font-size:16px;
            }
        }
    }
`

export const FundoClaro = styled.div`
    background-color:white; width:100%;min-height:100vh;height:100%;display:flex;justify-content:center;
    div{
        background-color:rgba(223, 218, 235,0.8);width:80%;height:100vh;box-shadow: 0px 0px 40px 6px #141414;
        display:flex;justify-content:center;flex-direction: column;align-items: center;
        h1{font-size:40px;z-index:10}
        p{width:60%;margin-top:40px;font-size:14px;margin-bottom:40px;z-index:10}
        img{height:20%;position:absolute;opacity:0.8;top:10px;}
        div{
            margin-top:20px;background-color:whitesmoke;border-radius:20px;width:60%;height:fit-content;
            box-shadow: 0px 0px 20px 1px #141414;padding:20px;display:flex;flex-direction: row;
            svg{color:#34173d;font-size:40px;margin-left:2%;margin-right:2%;}
        }
    }
`

export const FundoEscuro = styled.div`
    width:100%;height:100vh;display:flex;justify-content:center;color:white;
    div{
        background-color:#141414;width:80%;height:100vh;box-shadow: 0px 0px 40px 6px #141414;
        display:flex;justify-content:center;flex-direction: column;align-items: center;
        img{height:16%;position:absolute;opacity:0.6;top:10px;}
        div{
            display:flex;justify-content:center;align-items: center;
            p{width:80%;text-align:center;margin-bottom:10px;}
            input{width:200px;}
            height:160px;margin-top:20px;background-color:white;border-radius:10px;border-color:none;
            color:black;
        }
    }
`

export const Sair = styled.button`
    width:200px;background-color:lightblue;border-radius:10px;border-color:transparent;
    height:40px;font-size:20px;color:white;margin-top:20px;
`

export const Deletar = styled(Sair)`
    background-color:red
`