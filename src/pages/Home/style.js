import Styled from 'styled-components';

//Image, Nav, Logo, MenuBar, BackLogin, Msg , Shadow

export const Nav = Styled.div`
    background:grey; height: 100px;border:grey,1px,solid;border-radius:0px 0px 40px 0px;
`;

export const Logo = Styled.p`
    font-size:30px;margin:0px;padding-top:26px;padding-left:60px;width:300px;float:left;color:white
`;

export const Msg = Styled.p`
    font-size:45px;margin-left:10%;margin-top:10%;font-weight:bold;color:white;
`;

export const Image = Styled.img`
    width:100%;height:120vh;position:absolute;z-index:-1;filter: blur(2px);
`;
export const MenuBar = Styled.div`
    padding-top:35px;padding-right:40px; 
    * {
        float:right;width:80px;height:30px;background-color:transparent;border-radius:20px;
        font-size:40px;
    }
`;
export const BackLogin = Styled.div`
    background: rgba(5, 5, 5, 0.6);height:200px;width:360px;border-radius:40px;border-Styled: solid;
    float:right;margin-right:10%;margin-top:4%;border-color:rgba(120, 120, 120, 0.5);border-width: thin;
    button{
        margin-left:30%;border-radius:10px;margin-top:12px;
    }
    h2{
        width:100%;text-align:center;margin-top:20px;font-size:30px;color:white;
    }
    p{
        text-align:center;margin-top:16px;font-weight: bold;color:white;height:26px;
    }
`;

export const Shadow = Styled.div`
    width:100%;height:80vh;position:absolute;z-index:-1;background: linear-gradient(black, transparent);
`;

export const Apresentacao = Styled.div`
    margin-top:40%;text-align:center;margin-bottom:6%;
`;

export const Clouds = Styled.div`
    display:flex;flex-wrap: wrap;
    svg{
        font-size:200px;width:240px;z-index:10;color:cyan;
    }div{
        width:220px;
    }
`;

export const CloudText = Styled.p`
    color:black;position:absolute;margin-top:106px;z-index:11;text-align:center;width:240px;
`

export const BestPosts = Styled.div`
    h1{
        text-align:center
    }
`

export const BestUsers = Styled.div`
    margin-top:60px;
    h1{
        text-align:center
    }
`