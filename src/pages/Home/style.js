import Styled from 'styled-components';

//Image, Nav, Logo, MenuBar, BackLogin, Msg , Shadow


export const Logo = Styled.img`
    width:200px
`;

export const Nav = Styled.div`
    background:white; height: 100px;border:grey,1px,solid;border-radius:0px 0px 40px 0px;
    display:flex;justify-content:space-between;align-items:center;
    svg{font-size:30px;margin-right:4%}
    img{margin-left:4%}
`;

export const Bemvindo = Styled.div`
    display:flex; justify-content:space-around;flex-wrap: wrap;align-items:center;height:80vh;
`;

export const Msg = Styled.p`
    font-size:45px;font-weight:bold;color:white;margin-right:4%;margin-left:4%;text-align:center;
    width:320px;
`;

export const Image = Styled.img`
    width:100%;height:auto;position:absolute;z-index:-10;filter: blur(2px);min-width:1000px;
    position:center;overflow:hidden;border-bottom:2px solid black;
`;
export const MenuBar = Styled.div`
    padding-top:35px;padding-right:40px; 
    * {
        font-size:40px;color:#141414;
    }
`;
export const BackLogin = Styled.div`
    height:200px;width:320px;border-radius:20px;border-Styled: solid;background-color:#34173d;
    border-width: thin;
    background: rgba( 255, 255, 255, 0.35 );box-shadow: 0px 8px 40px 10px #141414;
    backdrop-filter: blur( 13.5px );-webkit-backdrop-filter: blur( 13.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );display:flex;justify-content: space-evenly;
    flex-direction: column;align-items: center;
    button{
        border-radius:10px;
    }
    h2{
        width:100%;text-align:center;font-size:30px;color:white;
    }
    p{
        text-align:center;font-weight: bold;color:white;height:26px;margin-bottom:10px;
    }
`;

export const Shadow = Styled.div`
    width:100%;height:80vh;position:absolute;z-index:-1;background: linear-gradient(black, transparent);
`;

export const Apresentacao = Styled.div`
    text-align:center;margin-bottom:6%;height:fit-content;display:flex;justify-content:center;
    @media screen and (min-width: 0px){margin-top:10%;}
    @media screen and (min-width: 500px){margin-top:12%;}
    @media screen and (min-width: 1000px){margin-top:20%;}
    div{
        padding:20px;border-radius:20px;width:360px;color:white;
        box-shadow: 0px 10px 40px 2px #141414;background: #141414;
        backdrop-filter: blur( 13.5px );-webkit-backdrop-filter: blur( 13.5px );
        border: 1px solid rgba(47,23,86,0.8);
    }
    
`;

export const Clouds = Styled.div`
    background-image:url('https://services.meteored.com/img/article/o-que-torna-o-ceu-azul-195151-1_768.jpg');
    width:100%;background-position:center;background-size:cover;background-repeat: no-repeat;
    display:flex;justify-content:center;margin-bottom:80px;box-shadow: 0px 10px 40px 1px #64c7dc;
    /* @keyframes clouds {
        0% {margin-left:80%;}
        100% {margin-right:80%;}
        100% {margin-left:80%;}
    }
    .cloud{
        width:60%;min-width:380px;animation: clouds 20s linear 20s infinite;
    } */
`;

export const CloudText = Styled.p`
    color:black;position:absolute;margin-top:106px;z-index:11;text-align:center;width:240px;
`

export const BestPosts = Styled.div`
    p{width:fit-content}
`

export const BestUsers = Styled.div`
    margin-top:80px;display:flex;flex-wrap: wrap;justify-content: center;align-items: flex-end;
    background-color: #Eaeaea;margin-bottom:60px;
    h1{text-align:center;width:100%;margin-bottom:40px;margin-top:20px;}
`


export const FirstPlace = Styled.div`
    width:300px;display:flex;flex-wrap: wrap;justify-content: center;flex-direction: column;
    align-content: center;margin-top:40px;
    svg{color: ${props => props.svgcolor}}
    div{display:flex; align-content: center;flex-direction: row;flex-wrap: wrap;
        flex-direction: column
    }
`

export const SecondPlace = Styled.div`
    width:300px;display:flex;flex-wrap: wrap;justify-content: center;flex-direction: column;
    align-content: center;margin-top:40px;
    svg{color: ${props => props.svgcolor}}
    div{display:flex; align-content: center;flex-direction: row;flex-wrap: wrap;
        justify-content: center
    }
`

export const ThirdPlace = Styled.div`
    width:300px;display:flex;flex-wrap: wrap;justify-content: center;flex-direction: column;
    align-content: center;margin-top:40px;
    svg{color: ${props => props.svgcolor}}
    div{display:flex; align-content: center;flex-direction: row;flex-wrap: wrap;
        justify-content: center;
    }
`

export const ImagePost = Styled.img`
    width:60px;height:60px;border-radius:120px;
`;

export const Podium = Styled.div`
    background-color: ${(props) => props.color};width:180px;height:${props => props.tamanho};
    display:flex;justify-content: center;border-radius: 6px 6px 0px 0px;
    *{margin-top:60px;font-size:26px;}
`

export const TituloUsuarios = Styled.h1`
    text-align:center;
`

export const MsgDefault = Styled.p`
    font-size:16px;margin-bottom:40px;
`

export const MelhoresPostagens = Styled.h1`
    margin-bottom:40px;
`

export const Npost = Styled.div`
    display:flex;justify-content: center;align-content:center;align-items: center;height:60vh;
    p{text-align:center;}
`

export const Popcorn = Styled.div`
    *{position:fixed; width:120px; animation: mov1 3s linear;display:none}
`