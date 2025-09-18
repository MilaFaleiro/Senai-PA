// src\components\Header\index.jsx

import { NavLink, Link } from "react-router-dom";
import './style.css';
import logo from '../../assets/logo.png'

function Header() {
    return (
        <header className="header">
            <div className="header__wrap">
                <Link to="/" className="brand">
                    <img src={logo} alt="Logo Ciência da Computação" />
                    <span>Ciência da Computação</span>
                </Link>

                <nav className="nav">
                    <NavLink to="/servicos" className={({ isActive }) => isActive ? 'link active' : 'link'}>
                        Serviços
                    </NavLink>
                    <NavLink to="/sobre-nos" className={({ isActive }) => isActive ? 'link active' : 'link'}>
                        Sobre nós
                    </NavLink>
                    <NavLink to="/contato" className={({ isActive }) => isActive ? 'link active' : 'link'}>
                        Contato
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header;

