import * as C from './styled';
import { useState } from 'react';
import Cookies from "js-cookie";
import { FiPackage } from "react-icons/fi";
import { TbPackages, TbLogout } from "react-icons/tb";
import { MdOutlineLockPerson } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { LuPackageMinus, LuPackagePlus } from "react-icons/lu";
import {isLogged, doLogout } from "../../helpers/auth/AuthHandler";
import Logo from '../../assets/images/logo.svg';

export const Dashboard = () => {

   let logged = isLogged();

  const handleLogout = () => {
    doLogout();
    let token = Cookies.get('token')

    if(!token){
      window.location.href = "/entrar"
    }
  }
  
  return (
    <>
        {logged && 
        <div>
            <C.ButtonLogout>
             <TbLogout onClick={handleLogout} alt="Sair" style={{ color: '#fff' , fontSize: '24px'}} />
           </C.ButtonLogout>
           <C.DashboardArea>
             <C.Header>
               <C.Img src={Logo} alt="" />
               <C.Title>StockManager</C.Title>
             </C.Header>
             <C.Nav>
               <C.Ul>
                <C.TitleNav>
                    GERENCIAMENTO
                </C.TitleNav>
                <C.Li>
                 <AiOutlineHome style={{ color:'#fff', fontSize: '24px'}}/>
                   <C.StyledLink
                     to="/"
                     onMouseOver={(e) => {
                         e.target.style.color = '#ccc';
                     }}
                     onMouseLeave={(e) => {
                         e.target.style.color = '#fff';
                     }}
                     >
                     Home
                     </C.StyledLink>
                 </C.Li>
     
                 <C.Li>
             
                   <FiPackage style={{ color:'#fff', fontSize: '24px'}}/>
                   <C.StyledLink
                     to="/mercadorias"
                     onMouseOver={(e) => {
                       e.target.style.color = '#ccc';
                     }}
                     onMouseLeave={(e) => {
                       e.target.style.color = '#fff';
                     }}
                   >
                     Mercadorias
                   </C.StyledLink>
                 </C.Li>
                 <C.Li>
                     <TbPackages style={{ color:'#fff', fontSize: '24px'}}/>
                   <C.StyledLink
                     to="/estoque"
                     onMouseOver={(e) => {
                       e.target.style.color = '#ccc';
                     }}
                     onMouseLeave={(e) => {
                       e.target.style.color = '#fff';
                     }}
                   >
                     Estoque
                   </C.StyledLink>
                 </C.Li>
                 <C.Li>
                 <MdOutlineLockPerson style={{ color:'#fff', fontSize: '24px'}}/>
     
                   <C.StyledLink
                     to="/fornecedores"
                     onMouseOver={(e) => {
                       e.target.style.color = '#ccc';
                     }}
                     onMouseLeave={(e) => {
                       e.target.style.color = '#fff';
                     }}
                   >
                     Fornecedores
                   </C.StyledLink>
                 </C.Li>
               </C.Ul> 
               <C.Ul>
                <C.TitleNav>
                    MOVIMENTAÇÃO
                </C.TitleNav>
     
                 <C.Li>
             
                   <LuPackagePlus style={{ color:'#fff', fontSize: '24px'}}/>
                   <C.StyledLink
                     to="/entradas"
                     onMouseOver={(e) => {
                       e.target.style.color = '#ccc';
                     }}
                     onMouseLeave={(e) => {
                       e.target.style.color = '#fff';
                     }}
                   >
                     Entradas
                   </C.StyledLink>
                 </C.Li>
                 <C.Li>
                 <LuPackageMinus style={{ color:'#fff', fontSize: '24px'}}/>
     
                   <C.StyledLink
                     to="/saidas"
                     onMouseOver={(e) => {
                       e.target.style.color = '#ccc';
                     }}
                     onMouseLeave={(e) => {
                       e.target.style.color = '#fff';
                     }}
                   >
                     Saídas
                   </C.StyledLink>
                 </C.Li>
               </C.Ul>
             </C.Nav>
             <C.Section />
           </C.DashboardArea>
           
        </div>
        }
    </>
  );
};
