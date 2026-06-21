import React from 'react';
import { useTasks } from '../context/TaskContext';

function Tarefa({ tarefa }) {
  const { dispatch } = useTasks();

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_TASK', payload: tarefa.id });
  };

  return (
    <li className="task-item">
      <input
        className="task-checkbox"
        type="checkbox"
        checked={tarefa.concluida}
        onChange={handleToggle}
      />
      <span className={`task-text ${tarefa.concluida ? 'completed' : ''}`}>
        {tarefa.texto}
      </span>
    </li>
  );
}

export default Tarefa;
