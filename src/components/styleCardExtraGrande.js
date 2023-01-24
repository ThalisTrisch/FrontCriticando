import styled from 'styled-components';

export const Imagem = styled.div`
    width: 460px; height: 300px; margin-top:50px;border-radius: 26px 26px 0px 0px;background-color:grey;
    background-image: url('${props => props.url}');background-size: cover;background-position:bottom;
    display:flex;justify-content: space-between;flex-direction: column;align-items: center;
`;

export const Cardbottom = styled.div`
    background: #34173d;margin:0px;border-radius: 0px 0px 26px 26px;width: 460px; height: 100px;
    display:flex;align-items: center;justify-content: space-around;flex-direction: row;
`;


export const Global = styled.div`
    width:fit-content;cursor: pointer;
`;

export const GlobalMedio = styled.div`
    width:fit-content;
`;

export const CardD = styled.div`

`;

export const CardE = styled.div`
    p{color:white;}
`;

export const FotoPerfilPost = styled.img`
    height:46px;width:46px;border-radius:100px
`;

export const InfoStars = styled.div`
    margin-left:10px;
    p{
        color:white;
    }
`;

export const InfoPost = styled.div`
    display: flex;align-items: center;margin-top:10px;
    *{font-size:20px;color:white;}
    p{margin-left:10px;color:white;}
    svg{
        margin-left:20px;margin-top:6px;color:white;
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
export const Bandeira = styled.div`
    *{
        font-size: 24px;color:white;
    }
    *{
        transition: transform 0.4s;
    }
    *:hover {
        transform: scale(1.1);
    }
`
export const Star = styled.div`
    * {
        color:orange;font-size:20px
    }
`;

export const Obra = styled.div`
    width:fit-content;background-color:black;min-width:100px;max-width:360px;
    border-radius:0px 0px 12px 12px;height:fit-content;
    p{
        padding:4px;font-size:18px;color:white;padding-right:12px;padding-left:12px;
    }
`

export const Titulo = styled.div`
    background-color: rgba( 255, 255, 255, 0.6 );text-decoration: none;width:460px;
    height:70px;text-align:center;box-shadow: 0px 4px 10px -4px black;display:flex;
    align-items: center;backdrop-filter: blur( 2px );border-top: 2px solid rgba( 255, 255, 255, 0.18 );
    p{
        font-size:22px;color:#141414;margin-left:10px;width:420px;font-weight:bold;margin-left:20px;
        margin-right: 20px;;
    }
`;
