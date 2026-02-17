import React from 'react';
import { useTasks } from '../context/TaskContext';
import { motion } from 'framer-motion';

const Stats = () => {
    const { stats, clearCompleted } = useTasks();

    if (stats.total === 0) return null;

    const progress = (stats.completed / stats.total) * 100;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 pt-6 border-t border-glass-border"
        >
            <div className="flex justify-between items-end mb-4">
                <div>
                    <h2 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-1">
                        Progress
                    </h2>
                    <p className="text-2xl font-bold">
                        {stats.completed} <span className="text-sm font-normal text-text-muted">/ {stats.total} Tasks</span>
                    </p>
                </div>

                {stats.completed > 0 && (
                    <button
                        onClick={clearCompleted}
                        className="text-sm text-secondary hover:text-pink-400 transition-colors mb-1"
                    >
                        Clear Completed
                    </button>
                )}
            </div>

            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                    style={{
                        background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                        width: `${progress}%`
                    }}
                />
            </div>
        </motion.div>
    );
};

export default Stats;
