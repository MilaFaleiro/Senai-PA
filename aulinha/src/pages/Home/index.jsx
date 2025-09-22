// src\pages\Home\index.jsx
import "./style.css";


const topics = [
    { title: "Algoritmos", desc: "Desvende a lógica por trás das máquinas." },
    { title: "Inteligência Artificial", desc: "O futuro começa com aprendizado de máquina." },
    { title: "Redes", desc: "Conectando o mundo, um pacote por vez." },
    { title: "Desenvolvimento Web", desc: "Crie experiências digitais inovadoras." },
    { title: "Segurança", desc: "Proteja dados e sistemas com conhecimento." },
];

export default function Home() {
    return (
        <div className="home-container">
            <header className="hero">
                <h1>Ciência da Computação</h1>
                <p>
                    Bem-vindo ao portal onde a lógica encontra a criatividade. Explore, aprenda e transforme o mundo com tecnologia!
                </p>
            </header>
            <section className="topics">
                <h2>Áreas em destaque</h2>
                <div className="topics-list">
                    {topics.map((topic) => (
                        <div className="topic-card" key={topic.title}>
                            <h3>{topic.title}</h3>
                            <p>{topic.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
            <footer className="footer">
                <span>© {new Date().getFullYear()} Ciência da Computação • Feito com 💻 e criatividade</span>
            </footer>
        </div>
    );
}

