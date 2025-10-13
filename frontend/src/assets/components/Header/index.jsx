// frontend\src\assets\components\Header\index.jsx

import { Link } from 'react-router-dom';
import 'styles.css';

function Header() {
  return (
    <header className="header-container">
        <div className= 'logo'>Sistema de Clientes</div>
        <nav>

            <Link to="/">Home</Link>
            <Link to = "/cadastro">Cadastro</Link>
            <Link to = "/lista">Listar</Link>
        </nav>
    </header>
  );
}
export default Header;