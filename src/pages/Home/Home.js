import Login from '../../components/Login'
import { Image, Nav, Logo, MenuBar, BackLogin, Msg , Shadow } from './style.js'
import imagem from '../../images/backgroundhome.png'
import { BiMenu } from "react-icons/bi";

function Home(){
    return(
        <div>

            <Image src={imagem}/>
            <Shadow></Shadow>
            <Nav>
                <Logo>Logo</Logo>
                <MenuBar><BiMenu/></MenuBar>
            </Nav>
                <Msg>Bem vindo ao Criticando!</Msg>
                <BackLogin>
                    <h2>Login</h2>
                    <Login></Login>
                    <p>Para entrar, faça login com o google</p>
                </BackLogin>
        </div>
    )
}

export default Home;