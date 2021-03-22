import React from 'react';
import { Link } from 'react-router-dom';
import EstruturaPagina from '../../componentes/EstruturaPagina';
import './estilo.css';

const Agenda = () => {
    return(
        <EstruturaPagina>
                <div className="agenda-container">
                    <h1>Agende uma Consulta</h1>
                    <div className='consulta-container'>
                        <form className="agenda-consulta">
                            <label><input type="text" className='dados-consulta' placeholder='Nome Completo'/> </label>
                            <br></br>

                            <label><input type="text" className='dados-consulta' placeholder='CPF'/></label>
                            <br></br>

                            <label><input type="text" className='dados-consulta' placeholder='Telefone'/></label>
                            <br></br>

                            <label><input type="text" className='dados-consulta' placeholder='E-mail'/></label>
                            <br></br>

                            <label><input type="text" className='dados-consulta' placeholder='Especialista'/></label>
                            <br></br>

                            <label>Dia: <input type="date" className='dados-consulta' placeholder='Dia da consulta'/></label>
                            <br></br>

                        </form>
                        <input type='submit' className='dados-consulta dado-botao' placeholder='Marcar consulta'></input>
                    </div>
                </div>
        </EstruturaPagina>
    );
}

export default Agenda;