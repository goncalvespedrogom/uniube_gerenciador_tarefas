import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  tarefas: [],
  filtro: 'todas'
};

function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tarefas: [...state.tarefas, action.payload]
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tarefas: state.tarefas.map(tarefa =>
          tarefa.id === action.payload
            ? { ...tarefa, concluida: !tarefa.concluida }
            : tarefa
        )
      };
    case 'SET_FILTER':
      return {
        ...state,
        filtro: action.payload
      };
    default:
      return state;
  }
}

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks deve ser usado dentro de um TaskProvider');
  }
  return context;
}
