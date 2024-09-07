
import React, { useState } from 'react';
import heart from '../assets/purpleheart.svg'
import '../style/message.css'

const Message = () => {

    return (
        <div className="message-container">
            <div className="message-content">
                <img src= {heart} />
                <p className="message-text">
                    O governo de Pernambuco cuida de você.  Continue buscando oportunidades para crescer e se fortalecer.
                </p>
            </div>
        </div>
      );
}

export default Message;