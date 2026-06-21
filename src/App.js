import React from 'react';
import { TaskProvider, useTasks } from './context/TaskContext';
import AdicionarTarefa from './components/AdicionarTarefa';
import ListaTarefas from './components/ListaTarefas';

function Filtros() {
  const { state, dispatch } = useTasks();
  const { filtro } = state;

  const setFiltro = (novoFiltro) => {
    dispatch({ type: 'SET_FILTER', payload: novoFiltro });
  };

  return (
    <div className="filters">
      <button
        className={`filter-btn ${filtro === 'todas' ? 'active' : ''}`}
        onClick={() => setFiltro('todas')}
      >
        Todas
      </button>
      <button
        className={`filter-btn ${filtro === 'pendentes' ? 'active' : ''}`}
        onClick={() => setFiltro('pendentes')}
      >
        Pendentes
      </button>
      <button
        className={`filter-btn ${filtro === 'concluidas' ? 'active' : ''}`}
        onClick={() => setFiltro('concluidas')}
      >
        Concluídas
      </button>
    </div>
  );
}

function App() {
  return (
    <TaskProvider>
      <div className="app-container">
        <div className="app-title">
          Tarefas <span>✓</span>
        </div>
        <div className="subtitle">Organize seu dia com simplicidade</div>
        <AdicionarTarefa />
        <Filtros />
        <ListaTarefas />
      </div>
    </TaskProvider>
  );
}

export default App;
