import Style from 'styled-components';

//Image, Nav, Logo, MenuBar, BackLogin, Msg , Shadow

export const Nav = Style.div`
    background:grey; height: 100px;border:grey,1px,solid;border-radius:0px 0px 40px 0px;
`;

export const Logo = Style.p`
    font-size:30px;margin:0px;padding-top:26px;padding-left:60px;width:300px;float:left;color:white
`;

export const Msg = Style.p`
    font-size:45px;margin-left:10%;margin-top:8%;font-weight:bold;color:white;
`;

export const Image = Style.img`
    width:100%;height:120vh;position:absolute;z-index:-1;filter: blur(2px);
`;
export const MenuBar = Style.div`
    padding-top:35px;padding-right:40px; 
    * {
        float:right;width:80px;height:30px;background-color:transparent;border-radius:20px;
        font-size:40px;
    }
`;
export const BackLogin = Style.div`
    background: rgba(221,217,206, 0.5);height:200px;width:360px;
    border-radius:40px;float:right;margin-right:10%;margin-top:4%;
    button{
        margin-left:30%;border-radius:10px;
    }
    h2{
        width:100%;text-align:center;margin-top:20px;font-size:30px
    }
    p{
        width:100%;text-align:center;magin-top:10px;
    }
`;

export const Shadow = Style.div`
    width:100%;height:80vh;position:absolute;z-index:-1;background: linear-gradient(black, transparent);
`;