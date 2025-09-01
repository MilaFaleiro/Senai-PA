// src\components\InfoAluno\index.jsx
import './styles.css';

function InfoAluno() {
    const nome = "Camilla Gomes";
    const idade = 20;
    const curso = "Ciência da Computação, Desevolvimento de Sistemas";
    return (
        <div className="info-aluno">
            <h2>Informações Do Aluno</h2>
            <p>Nome: {nome} </p>
            <p>Idade: {idade} </p>
            <p>Curso: {curso} </p>
        </div>
    );
}
export default InfoAluno;