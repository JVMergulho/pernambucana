
import React, { useState } from 'react';
import Popup from './Popup'; // Importe o componente Popup
import '../style/question.css'

const Question = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    return(
        <div className='question-content'>
            <p>Quão preparada você se sente para atuar no mercado de trabalho com as qualificações que possui?</p>
            <button onClick={openPopup}>Abrir Popup</button>

            <Popup isOpen={isPopupOpen} onClose={closePopup}>
                <p>Notamos que você pode estar vivenciando uma situação de violência doméstica. 
                    Esse tipo de violência é grave e pode ter consequências físicas, emocionais e 
                    psicológicas a longo prazo. Você não está sozinha!existem redes de apoio e caminhos 
                    seguros para buscar ajuda. Denunciar pode ser o primeiro passo para recuperar 
                    sua segurança e seu bem-estar.</p>
                <button onClick={closePopup}>Fechar</button>
            </Popup>
        </div>
    )
}

export default Question;