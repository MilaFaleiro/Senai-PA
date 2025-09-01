// src\components\InfoCurso\index.jsx
import './styles.css';

function InfoCurso() {
    const nome = "Camilla";
    const carga_horaria = "1200 Horas";
    const local = "Dendezeiros";
    const data_inicio = "01/02/2025";
    const data_termino = "20/11/2027";
    return (
        <div className="info-curso">
            <h2>Dados Do Curso</h2>
            <p>Nome: {nome} </p>
            <p>Carga Horária: {carga_horaria} </p>
            <p>Local: {local} </p>
            <p>Data Início: {data_inicio} </p>
            <p>Data Término: {data_termino} </p>
        </div>
    );
}
export default InfoCurso;