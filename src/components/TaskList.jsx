import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTasks } from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
    const { tasks } = useTasks();

    if (tasks.length === 0) {
        return (
            <div className="text-center py-12 opacity-50">
                <p className="text-lg">No tasks yet. Start by adding one above!</p>
            </div>
        );
    }

    return (
        <div className="space-y-2">
            <AnimatePresence mode="popLayout">
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default TaskList;
