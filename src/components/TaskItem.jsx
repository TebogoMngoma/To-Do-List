import React, { useState } from 'react';
import { Trash2, CheckCircle, Circle, Edit2, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTasks } from '../context/TaskContext';

const TaskItem = ({ task }) => {
    const { toggleTask, deleteTask, editTask } = useTasks();
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);

    const handleUpdate = () => {
        if (editText.trim() && editText !== task.text) {
            editTask(task.id, editText.trim());
        }
        setIsEditing(false);
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            className="glass p-4 mb-3 flex items-center justify-between gap-3 group"
        >
            <div className="flex items-center gap-3 flex-1 min-w-0">
                <button
                    onClick={() => toggleTask(task.id)}
                    className="text-text-muted hover:text-primary transition-colors flex-shrink-0"
                    aria-label={task.completed ? "Mark incomplete" : "Mark complete"}
                >
                    {task.completed ? (
                        <CheckCircle className="text-secondary" size={24} />
                    ) : (
                        <Circle size={24} />
                    )}
                </button>

                {isEditing ? (
                    <input
                        autoFocus
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleUpdate()}
                        className="flex-1 bg-transparent border-none p-0 focus:ring-0 text-white"
                    />
                ) : (
                    <span
                        className={`flex-1 truncate transition-all duration-300 ${task.completed ? 'text-text-muted line-through opacity-50' : 'text-text-main'
                            }`}
                    >
                        {task.text}
                    </span>
                )}
            </div>

            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {isEditing ? (
                    <>
                        <button
                            onClick={handleUpdate}
                            className="p-2 text-success hover:bg-success/10 rounded-full"
                            aria-label="Save"
                        >
                            <Check size={18} />
                        </button>
                        <button
                            onClick={() => { setIsEditing(false); setEditText(task.text); }}
                            className="p-2 text-danger hover:bg-danger/10 rounded-full"
                            aria-label="Cancel"
                        >
                            <X size={18} />
                        </button>
                    </>
                ) : (
                    <>
                        {!task.completed && (
                            <button
                                onClick={() => setIsEditing(true)}
                                className="p-2 text-text-muted hover:text-primary hover:bg-primary/10 rounded-full"
                                aria-label="Edit"
                            >
                                <Edit2 size={18} />
                            </button>
                        )}
                        <button
                            onClick={() => deleteTask(task.id)}
                            className="p-2 text-text-muted hover:text-danger hover:bg-danger/10 rounded-full"
                            aria-label="Delete"
                        >
                            <Trash2 size={18} />
                        </button>
                    </>
                )}
            </div>
        </motion.div>
    );
};

export default TaskItem;
