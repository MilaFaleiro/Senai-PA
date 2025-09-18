// src\pages\Servicos\index.jsx

import './styles.css';

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
        <div style={{ padding: "2rem" }}>
            <h1>Serviços</h1>
            <p>
                Conheça os principais serviços oferecidos na área de Ciência da Computação:
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {servicos.map((servico, idx) => (
                    <li key={idx} style={{ marginBottom: "1.5rem" }}>
                        <h2 style={{ margin: 0 }}>{servico.titulo}</h2>
                        <p style={{ margin: "0.5rem 0 0 0" }}>{servico.descricao}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}