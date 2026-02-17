import React, { createContext, useContext, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useLocalStorage('todo-tasks', []);

    const addTask = useCallback((text) => {
        const newTask = {
            id: crypto.randomUUID(),
            text,
            completed: false,
            createdAt: new Date().toISOString(),
        };
        setTasks((prev) => [newTask, ...prev]);
    }, [setTasks]);

    const deleteTask = useCallback((id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    }, [setTasks]);

    const toggleTask = useCallback((id) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    }, [setTasks]);

    const editTask = useCallback((id, newText) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, text: newText } : task
            )
        );
    }, [setTasks]);

    const clearCompleted = useCallback(() => {
        setTasks((prev) => prev.filter((task) => !task.completed));
    }, [setTasks]);

    const stats = {
        total: tasks.length,
        completed: tasks.filter((t) => t.completed).length,
        pending: tasks.filter((t) => !t.completed).length,
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                addTask,
                deleteTask,
                toggleTask,
                editTask,
                clearCompleted,
                stats,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTasks must be used within a TaskProvider');
    }
    return context;
};
