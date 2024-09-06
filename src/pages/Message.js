
import React, { useState } from 'react';
import heart from '../assets/purpleheart.svg'
import '../style/message.css'

const Question = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    return (
        <div className="message-container">
            <div className="message-content">
                <img src= {heart} />
                <p className="text">
                    O governo de Pernambuco cuida de você.  Continue buscando oportunidades para crescer e se fortalecer.
                </p>
            </div>
        </div>
      );
}

export default Question;