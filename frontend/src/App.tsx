import React from 'react';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-semibold text-center mb-4">My Task App</h1>
      <TaskList />
    </div>
  );
}

export default App;