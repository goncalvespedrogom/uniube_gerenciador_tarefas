import React from 'react';
import { useTasks } from '../context/TaskContext';
import Tarefa from './Tarefa';

function ListaTarefas() {
  const { state } = useTasks();
  const { tarefas, filtro } = state;

  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === 'concluidas') return tarefa.concluida;
    if (filtro === 'pendentes') return !tarefa.concluida;
    return true;
  });

  const total = tarefas.length;
  const concluidas = tarefas.filter((t) => t.concluida).length;

  return (
    <>
      <ul className="task-list">
        {tarefasFiltradas.length === 0 ? (
          <div className="empty-message">
            <span>📋</span>
            <p>Nenhuma tarefa {filtro !== 'todas' ? ` ${filtro}` : ''} encontrada</p>
          </div>
        ) : (
          tarefasFiltradas.map((tarefa) => (
            <Tarefa key={tarefa.id} tarefa={tarefa} />
          ))
        )}
      </ul>

      {total > 0 && (
        <div className="task-counter">
          <span>
            <strong>{total}</strong> tarefa{total !== 1 ? 's' : ''} no total
          </span>
          <span>
            <strong>{concluidas}</strong> concluída{concluidas !== 1 ? 's' : ''}
          </span>
        </div>
      )}
    </>
  );
}

export default ListaTarefas;
