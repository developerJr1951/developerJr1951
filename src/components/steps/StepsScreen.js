import React from 'react'

export const StepsScreen = () => {
    return (
        <div className='w-container step-containt'>
            <div className='step-title'>
                <h1>Como trabajamos?</h1>
            </div>
            <div className='steps'>

                <div className='steps-img'>
                    <img src='./assets/conversation.png' alt='meeting' />
                </div>
                <div className='steps-text'>
                    <h2>Conocernos</h2>
                    <p>
                        Conocernos con esto nos referimos, a poder saber que es lo que necesitan, quieren o podemos mejorar segun los servicios que ofrecen
                    </p>
                </div>


            </div>
            <div className='steps'>

                <div className='steps-img'>
                    <img src='./assets/ux.png' alt='meeting' />
                </div>
                <div className='steps-text'>
                    <h2>Diseño y Elaboración</h2>
                    <p>
                        Una vez tengamos los requisitos que necesitan, procedemos a diseñar con un estilo enfocado a su gusto y elaboracion de esta
                    </p>
                </div>


            </div>
            <div className='steps'>

                <div className='steps-img'>
                    <img src='./assets/contrato.png' alt='meeting' />
                </div>
                <div className='steps-text'>
                    <h2>Despliegue</h2>
                    <p>
                        Una vez cumplamos con los requisitos solicitados y confirmacion del prototipo, se procedera al despliegue para que puedan utilizar el aplicativo
                    </p>
                </div>
            </div>



        </div>
    )
}
