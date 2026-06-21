import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

function AdicionarTarefa() {
  const [texto, setTexto] = useState('');
  const { dispatch } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() === '') return;

    const novaTarefa = {
      id: Date.now(),
      texto: texto.trim(),
      concluida: false,
    };

    dispatch({ type: 'ADD_TASK', payload: novaTarefa });
    setTexto('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-input"
        type="text"
        placeholder="Digite uma nova tarefa..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button className="btn-add" type="submit">
        Adicionar
      </button>
    </form>
  );
}

export default AdicionarTarefa;
