import React from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Stats from './components/Stats';
import { CheckSquare } from 'lucide-react';

function App() {
  return (
    <TaskProvider>
      <header className="mb-10 text-center">
        <div className="inline-flex items-center justify-center p-3 mb-4 rounded-2xl bg-primary/10 text-primary">
          <CheckSquare size={32} />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
          Task Master
        </h1>
        <p className="text-text-muted">Stay organized, stay productive.</p>
      </header>

      <main>
        <TaskInput />
        <TaskList />
        <Stats />
      </main>

      <footer className="mt-12 text-center text-xs text-text-muted opacity-50">
        <p>Built with React & Local Storage</p>
      </footer>
    </TaskProvider>
  );
}

export default App;
