import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/Logo.svg';

export default function NewIncident() { 
  const ongId = localStorage.getItem('ongId');
  const history = useHistory();

  const [title, setTtitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);

  async function handleSubmit(e) { 
    e.preventDefault();
    try {
      const data = { title, description, value };
      await api.post('incidents', data, {
        headers:{ Authorization: ongId}
      })
      history.push('/profile');

    } catch (err) {
      alert('Erro ao cadastrar novo caso, tente novamente.')
    }
  };

  return (
    <div className="newIncident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041"/>
            Voltar para Home
          </Link>
        </section>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Tíutulo do caso"
            value={title}
            onChange={e => setTtitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em Reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};