import styled from 'styled-components';

export const Logo = styled.img`
    width:auto;height:40px;margin-left:10%;
`;
export const Nav = styled.div`
    background:rgba(47,23,86,0.8); height: 100px;border:grey,1px,solid;border-radius:0px 0px 40px 0px;
`;
// export const LargeNav = styled.div`
//     height: 160px;border-radius:0px 0px 60px 0px
// `;

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
    background-color:white;border-radius:1000px;
`

export const FotoPerfilE = styled(FotoPerfilD)`
    float:left;position:absolute;z-index:2;
    @media screen and (min-width: 0px) {
        width:140px;height:140px;margin-top:80px;
    }
    @media screen and (min-width: 400px) {
        width:160px;height:160px;margin-top:70px;
    }
    @media screen and (min-width: 600px) {
        width:180px;height:180px;margin-top:60px;
    }
    @media screen and (min-width: 800px) {
        width:200px;height:200px;margin-top:50px;
    }
`;

export const Obra = styled.div`
    padding-top:50px;
`;

export const Teorias = styled.div`
    width:400px;float:right
`;

export const PerfilNav = styled.div`
    height: 300px;border-radius:0px 0px 120px 0px;
    display:flex; justify-content:space-around;align-items: flex-start;background-color:#34173d;
    /* box-shadow: 0px 2px 20px 0px black; */
`;

export const DadosPerfil = styled.div`
    min-width: 240px;width:fit-content;margin-top:60px;margin-left:20px;margin-right:20px;color:whitesmoke;
    h2{
        font-size:30px
    }
    p{
        width:fit-content;padding-right:10px;font-size:12px;
    }
`;

export const Menu = styled.div`
    float:right;width:260px;margin-top:60px;
    button{
        width:fit-content;border-radius:10px;border:0px;
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
    margin-top:100px;margin-bottom:40px;
`;

export const SelectObras = styled.select`
    width:220px;height:32px;background-color:LightGrey;border-radius:20px;margin:10px;
    text-align:center;
    option{
        background-color:LightGrey
    }
`;

export const ConfigPost = styled.div`
    display:flex;justify-content:center;width:90%;margin-left:80px;position:absolute;margin-top:10px;
    button{
        border-radius:10px;border-width:2px;background-color:white;
    }
`;

export const Deletar = styled.button`
    margin-left:10px;width:70px;height:28px;border-color:red;cursor: pointer;
    svg{
        color:red;font-size:16px;margin:2px;
    }
`;

export const Editar = styled.button`
    width:60px;height:28px;border-color:green;cursor: pointer;
    svg{
        color:green;font-size:16px; margin:2px;
    }
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

export const AreaEditar = styled.div`
    display:flex;justify-content: center;flex-wrap: wrap
`

export const UploadImg = styled.div`
    margin-right:40px;margin-top:20px;
`


export const InfoUser = styled.div`
    height:100%;width:50%;
`


export const CardInfoUser = styled.div`
    width:80%;max-width:400px;height:160px;background-color:rgba(223, 218, 235,0.8);border-radius:20px;margin-top:60px;
    display:flex;align-items: center; justify-content: space-evenly;flex-direction: column;box-shadow: 0px 4px 10px 1px #141414;
    div{display:flex;flex-direction:row}
    svg{margin:2px;margin-left:6px;margin-right:6px;color:#34173d;font-size:18px}
`

export const TopBar = styled.div`
    display:flex;flex-direction: row;justify-content: space-evenly;align-items: center;
    button{
        width:fit-content;height:50px;background-color:transparent;border:none;
    }
    div{
        display:flex;flex-direction:row;align-items: center
    }svg{
        font-size:26px;margin-left:10px;
    }
`

export const PostagensFav = styled.div`
    
`

export const InputRedes = styled.div`
    p{
        max-width:300px;margin-top:4px;margin-bottom:4px;
    }   
    input{
        width:300px;background-color:transparent;border-radius:5px;border-style:solid;border-color:lightblue;
        padding:8px;
    }
`


export const InputDados = styled(InputRedes)`
    display:flex;align-items:center;
`

export const SubmitEdit = styled.div`
    display: flex; justify-content: center;margin-top:20px;
    button{
        width:140px;height:32px;background-color:#34173d;border-radius:20px;
        margin:10px;border-width:1px;font-size:16px;color:white;margin-top:20px;
    }
`

export const Bio = styled.div`
    margin-top:10px;
`


export const IconsRedes = styled.div`
    margin-top:10px;text-decoration:none;display:flex;justify-content:space-between;
    svg{
        text-decoration:none;font-size:24px;margin-right:6px;
    }
    a{text-decoration:none;}
`

export const FormularioUpload = styled.div`
    position:absolute;margin-left:40%;margin-right:10%;
    form{
        width:300px;height:100px;
        div{
            margin-top:120px;
            label{
                input[type="file"]{
                    display:none;
                }
                span{
                    padding:16px;background-color:rgba(47,23,86,1);font-size:12px;
                    border-radius:40px;
                }
            }
        }
        button{background-color:lightgreen;border-radius:40px;border-color:transparent;
                width:100px;height:40px;margin-left:130px;}
    }
`

export const BtnDelete = styled.button`
    position:absolute;margin-top:130px;border-radius:100px;border-color:rgba(47,23,86,0.7);
    background-color: white;width:60px;height:40px;border-radius:0px 20px 20px 0px;z-index:1;
    svg{
        padding:6px;color:red;font-size:20px;padding-left:20px;
    }
    @media screen and (min-width: 0px) {margin-left:125px}
    @media screen and (min-width: 400px) {margin-left:140px}
    @media screen and (min-width: 600px) {margin-left:160px}
    @media screen and (min-width: 800px) {margin-left:180px}
`

export const Desc = styled.p`
    @media screen and (max-width: 600px) {
        display:none;
    }
`

export const Follow = styled.button`
    width:fit-content;padding-left:10px;padding-right:10px;border-radius:6px;border-color:transparent;
    height:24px;font-size:16px;background-color:rgba(223, 218, 235,0.8);color:white
`

export const Unfollow = styled(Follow)`
    border-color:red;background-color:red;color:white
`

export const Npost = styled.div`
    display:flex;justify-content: center;align-content:center;align-items: center;height:60vh;
    p{text-align:center;}
`