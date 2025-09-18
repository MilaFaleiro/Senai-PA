// src\components\Footer\index.jsx

import './style.css'

function Footer() {
    return (
        <footer className="footer">
            <div className='footer_wrap'>
            </div>
            <div>
                <strong>Ciência Da Computação</strong> - CNPJ: 12.345.678/0001-90
            </div>
            <div>
                Avenida Dendezeiros, 890 - Bonfim - Salvador, BA
            </div>
            <div className='copy'>
                © {new Date().getFullYear()} All rights reserved.
            </div>
        </footer>
    )
}
export default Footer
