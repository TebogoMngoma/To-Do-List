import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTasks } from '../context/TaskContext';

const TaskInput = () => {
    const [text, setText] = useState('');
    const { addTask } = useTasks();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTask(text.trim());
            setText('');
        }
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="flex gap-2 mb-8"
        >
            <div className="relative flex-1">
                <label htmlFor="task-input" className="sr-only">New Task</label>
                <input
                    id="task-input"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add a new task..."
                    className="w-full h-12 pr-4 pl-4"
                />
            </div>
            <button
                type="submit"
                disabled={!text.trim()}
                className="h-12 px-6 bg-primary hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-white"
                style={{ backgroundColor: 'var(--primary)' }}
                aria-label="Add Task"
            >
                <Plus size={24} />
            </button>
        </motion.form>
    );
};

export default TaskInput;
