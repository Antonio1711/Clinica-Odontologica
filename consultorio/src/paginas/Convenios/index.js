import React from 'react';
import EstruturaPagina from '../../componentes/EstruturaPagina';
import './estilo.css';

const Convenios = () => {
    return(
        <EstruturaPagina>
            <div className='convenios-container'>
                <h2 className='titulo-sessao'>Convênios que atendemos</h2>

                <ul className='lista-convenios'>
                    <li>
                        <img className='img-convenio' src='assets/convenio1.jpg' alt='Logo do convênio Alliaz' title='|Logo do convênio Alliaz' />
                        <p>Alliaz</p>
                    </li>
                    <li>
                        <img className='img-convenio' src='assets/convenio2.png' alt='Logo do convênio Axa Assistance' title='|Logo do convênio Axa Assistance' />
                        <p>Axa Assistance</p>
                    </li>
                    <li>
                        <img className='img-convenio' src='assets/convenio3.jpg' alt='Logo do convênio Bradesco' title='|Logo do convênio Bradesco' />
                        <p>Bradesco</p>
                    </li>
                </ul>
                <ul className='lista-convenios' id='lista2'>
                    <li>
                        <img className='img-convenio' src='assets/convenio4.jpg' alt='Logo do convênio Fundação Itaú' title='|Logo do convênio Fundação Itaú' />
                        <p>Fundação Itaú</p>
                    </li>
                    <li>
                        <img className='img-convenio' src='assets/convenio5.png' alt='Logo do convênio NotreDame Intermédica' title='|Logo do convênio NotreDame Intermédica' />
                        <p>NotreDame Intermédica</p>
                    </li>
                    <li>
                        <img className='img-convenio' src='assets/convenio6.png' alt='Logo do convênio Sul América' title='|Logo do convênio Sul América' />
                        <p>Sul América</p>
                    </li>
                </ul>
            </div>
        </EstruturaPagina>
    )
}

export default Convenios;