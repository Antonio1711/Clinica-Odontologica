import React from 'react';
import EstruturaPagina from '../../componentes/EstruturaPagina';
import './estilo.css';

const Missao = () => {
    return(
        <EstruturaPagina>
            <div className='missao-container'>
                <h2 className='titulo-sessao'>Sobre a <b>Dentes Saudáveis</b></h2>
                <p>Há mais de 25 anos localizada em Santo Amaro, na R. Bento de Andrade Filho, 379, a Dentes Saudáveis tem completa infraestrutura e equipe para oferecer a você tratamentos em todas as especialidades. "Trabalhamos de forma integrada com toda equipe para desenvolvermos os melhores tratamentos e resultados aos nossos pacientes" define Dr. José, diretor clínico da Dentes Saudáveis.</p>
                <img className='img-missao' src="assets/odontologia.jpg" alt='Imagem ilustrativa' title='|Imagem ilustrativa' />
            </div>
        </EstruturaPagina>
    );
}

export default Missao;