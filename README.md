I have built a modern, premium To-Do List application using React, Vite, Framer Motion, and Lucide Icons. The application features a glassmorphic dark-mode design and full CRUD functionality with persistence via Local Storage.

Key Features
Full CRUD Support: Create, Read, Update (Edit), and Delete tasks.
Local Storage Persistence: Tasks are saved automatically and persist across page refreshes.
Premium UI/UX:
Glassmorphism: Sleek, semi-transparent background with blur effects.
Animations: Smooth entry, exit, and list reordering using framer-motion.
Responsive Design: Adapts beautifully to different screen sizes.
State Management: Uses React Context API for clean and modular logic.
Progress Tracking: Real-time progress bar and task statistics.
Project Structure
App.jsx
: Main entry point and layout.
TaskContext.jsx
: Global task logic and state management.
useLocalStorage.js
: Custom hook for synchronizing with browser storage.
Components
:
TaskInput
: Elegant input field for new tasks.
TaskList
: Container with smooth list transitions.
TaskItem
: Individual task cards with edit/delete/complete actions.
Stats
: Visual progress and "Clear Completed" functionality.
