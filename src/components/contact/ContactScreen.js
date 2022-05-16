import React from 'react'

export const ContactScreen = () => {
    return (
        <div className='w-container contact'>
            <div className='contact-item '>
                <h1>
                    Contactanos
                </h1>
                <div className='contact-item-social'>
                    <a href='https://wa.me/51948867980' target={'_blank'} rel="noopener noreferrer" >

                        <img className='contact-item-img' alt='whatsapp' src='./assets/whatsapp.png' />
                    </a>
                    <a href="mailto:developer.jr.bc@gmail.com" target={'_blank'} rel="noopener noreferrer"  >
                        <img className='contact-item-img' alt='gmail' src='./assets/gmail.png' />
                    </a>
                    <a href="https://www.instagram.com/deveveloperjr" target={'_blank'} rel="noopener noreferrer"  >
                        <img className='contact-item-img' alt='instagram' src='./assets/instagram.png' />
                    </a>
                </div>
            </div>
            <div className='contact-item'>
                <div className='contact-item-gif'>

                    <img alt='typing gif' src='./assets/typing.gif' />
                </div>

            </div>

        </div>
    )
}
