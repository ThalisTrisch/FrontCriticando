import styled from 'styled-components';

export const Imagem = styled.div`
    width: 350px; height: 150px; margin-top:50px;border-radius: 20px 20px 0px 0px;background-color:grey;
    background-image: url('${props => props.url}');background-size: cover;background-position:bottom;
    div{
        width:fit-content;background-color:black;float:left;margin-top:80px;
        border-radius:0px 20px 20px 0px;height:fit-content;
    }
    p{
        padding:4px;font-size:12px;color:white;padding-right:8px;
    }
`;
export const Cardbottom = styled.div`
    background:  #34173d;margin:0px;border-radius: 0px 0px 20px 20px;width: 350px; height: 150px;color:white
`;

export const Titulo = styled.div`
    margin-top:125px;background-color:white;position: absolute;
    text-decoration: none;width:300px;border-radius:40px;height:50px;
    margin-left:25px;text-align:center;box-shadow: 0px 4px 10px -4px black;
    display:flex;align-content:center;align-items: center;
    p{
        font-size:18px;color:black;margin-left:10px;width:98%;
    }
`;

export const Global = styled.div`
    width:fit-content;cursor: pointer;
`;

export const GlobalMedio = styled.div`
    width:fit-content;
`;

export const CardD = styled.div`
    float:right;margin-top:48px;
    div{
        margin-top:4px;
    }
    p{
        margin-top:0px;padding-top:20px
    }
`;

export const CardE = styled.div`
    float:left;max-height:40px;margin-top:50px;margin-left:20px;
    div{
        margin-top:8px;
    }
    p{
        float:right;margin-top:14px;margin-left:6px
    }
`;

export const FotoPerfilPost = styled.img`
    height:46px;width:46px;border-radius:100px
`;

export const InfoStars = styled.div`
    height:50px;width:150px;
    p {
        margin-right:6px;
    }div{
        margin-right:10px;padding-top:20px;
    }
`;
export const InfoPost = styled.div`
    height:50px;width:150px;display: flex;align-items: center;
    * {
        position:relative;float:center;height:20px;font-size:20px;margin-left:4px;
    }
    p {
        margin-bottom:32px;margin-right:20px;
    }
    svg{
        margin-left:20px;
    }
`;
export const IconUser = styled.img`
    height:50px;width:50px;border-radius:100px;
`;

export const Heath = styled.div`
    * { font-size:20px;color:red }
`;

export const BlocoComent = styled.div`
    margin-top:20px
`

export const Star = styled.div`
    * {
        color:orange;font-size:20px
    }
`;


export const EnginePost = styled.div`
    background-color:grey;width:36px;height:34px; border-radius:0px 0px 16px 16px;margin-right:200px;
    svg{
        font-size:24px;transition: 10s;margin-top:4px;
    }
    svg:active{
        transform: rotate(50deg);
    }
`
export const Bandeira = styled.div`
    *{
        font-size: 24px; position: absolute;margin-top: 318px;margin-left: 120px;
        color:white
    }
    *{
        transition: transform 0.4s;
    }
    *:hover {
        transform: scale(1.1);
    }
`