import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate , useNavigate} from 'react-router-dom';
import { FundoClaro } from './style.js'
import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
import logo from '../../images/logofullbranca.png';

function Informacoes(){
    const navigate = useNavigate()

    return(
        <FundoClaro>
            <div>
                
                <h1>Informações</h1>
                <p>
                    O Criticando é uma plataforma onde os usuários tem total liberdade para 
                    fazerem críticas a obras cinematográficas, sejam elas: filmes, séries, 
                    documentários, animes, novelas e outros.
                    Ao ingressar, você poderá criar suas próprias postagens, comentar outras 
                    postagens, seguir usuários, personalizar seu perfil criar seu próprio perfil
                     e entre outras várias funcioalidades.
                </p>
                <img src={logo} onClick={() => navigate('/')}></img>
                    <h2>Criado com as tecnologias</h2>
                    <div>
                        <FaNodeJs></FaNodeJs>
                        <IoLogoJavascript></IoLogoJavascript>
                        <FaReact></FaReact>
                        <GrMysql></GrMysql>
                    </div>
            </div>
        </FundoClaro>
    )
}

export default Informacoes;