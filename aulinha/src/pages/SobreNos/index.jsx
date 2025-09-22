// src/pages/SobreNos/index.jsx
import './style.css';

function SobreNos() {
    return (
        <section className='sobre-nos-container'>
            <section className='sobre-nos-header'>
                <h1>Sobre nós</h1>
                <p>
                    A Ciência da Computação é um campo dinâmico e em constante evolução, que abrange o estudo dos fundamentos teóricos e práticos da computação. Nossa missão é promover a inovação tecnológica, capacitar profissionais qualificados e contribuir para o avanço da sociedade por meio da pesquisa e do desenvolvimento de soluções computacionais.
                </p>
            </section>
            
            <section className='sobre-nos-lista'>
                <ul>
                    <li>
                        <h3>Missão</h3>
                        <p>Promover a inovação tecnológica e capacitar profissionais qualificados.</p>
                    </li>
                    <li>
                        <h3>Visão</h3>
                        <p>Ser referência em educação e pesquisa na área de Ciência da Computação.</p>
                    </li>
                    <li>
                        <h3>Valores</h3>
                        <p>Ética, inovação, colaboração e excelência acadêmica.</p>
                    </li>
                </ul>
            </section>
        </section>
    );
}

export default SobreNos;
