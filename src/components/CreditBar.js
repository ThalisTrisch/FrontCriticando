import { useNavigate , Link } from 'react-router-dom'
import { Bar, Logo } from './style.js'
import logo from '../images/logofullbranca.png';

function CreditBar(){
    
    return(
        <>
            <Bar>
                <div>
                    <Logo src={logo}></Logo>
                </div>
                <div>
                    <p>desenvolvido por: Thalis Trisch</p>
                </div>
            </Bar>
        </>
    );
}

export default CreditBar;