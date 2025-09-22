// src/pages/Servicos/index.jsx
import './style.css';

const servicos = [
    {
        titulo: "Desenvolvimento de Software",
        descricao: "Criação de sistemas, aplicativos e soluções personalizadas utilizando as melhores práticas de engenharia de software.",
    },
    {
        titulo: "Consultoria em TI",
        descricao: "Auxílio na escolha de tecnologias, arquitetura de sistemas e otimização de processos de TI.",
    },
    {
        titulo: "Treinamentos e Workshops",
        descricao: "Capacitação em programação, inteligência artificial, segurança da informação e outras áreas da computação.",
    },
    {
        titulo: "Suporte Técnico",
        descricao: "Atendimento especializado para resolução de problemas e manutenção de sistemas computacionais.",
    },
    {
        titulo: "Pesquisa e Inovação",
        descricao: "Desenvolvimento de projetos inovadores em ciência da computação, incluindo IA, computação em nuvem e análise de dados.",
    },
];

export default function Servicos() {
    return (
        <div className="servicos-container">
            <section className="servicos-header">
                <h1>Serviços</h1>
                <p>
                    Conheça os principais serviços oferecidos na área de Ciência da Computação:
                </p>
            </section>

            <section className="servicos-lista">
                {servicos.map((servico, idx) => (
                    <div key={idx} className="servico-card">
                        <h2>{servico.titulo}</h2>
                        <p>{servico.descricao}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}
