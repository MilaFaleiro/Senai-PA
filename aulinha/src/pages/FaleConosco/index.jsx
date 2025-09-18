// src\pages\FaleConosco\index.jsx

import './style.css';

function FaleConosco() {
    function handleSubmit(event) {
        event.preventDefault();
        alert('mensagem enviada com sucesso!');
    }
        return (
            <section className='contato'>
                <h1>Fale Conosco</h1>
                <p>Entre em contato conosco para qualquer dúvida ou
                    solicitação de serviços. Estamos aqui para ajudar!</p>

                <form className='form' onSubmit={handleSubmit}>
                <div className='grid cols-3'>
                    <label className='field'>
                        <span>Nome:</span>
                        <input type="text" name='nome' placeholder='Seu nome completo' required />
                    </label>
                    <label className='field'>
                        <span>Email:</span>
                        <input type="email" name='email' placeholder='voce@email.com' required />
                    </label>
                    <label className='field'>
                        <span>Telefone:</span>
                        <input type="tel" name='telefone' placeholder='(00) 00000-0000' required />
                    </label>
                    <label className='field'>
                        <span>Assunto:</span>
                        <input type="text" name='assunto' placeholder='Assunto da mensagem' required />
                    </label>
                    <label className='field'>
                        <span>Mensagem:</span>
                        <textarea rows="6" placeholder='Escreva sua mensagem aqui...' required></textarea>
                    </label>
                    <button className='btn primary' type='submit'>Enviar Mensagem</button>
                </div>
            </form>
                </section >
    )
    }

    export default FaleConosco;
