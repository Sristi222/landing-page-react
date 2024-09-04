import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Calendar from './Calender'; // Assuming Calendar is in the same directory
import Sidebar from './Sidebar'; // Importing the Sidebar component
import "./Calender.css"

interface Task {
  date: Date;
  title: string;
}

const DateSelector: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState<string>('');

  const addTask = () => {
    if (selectedDate && taskTitle.trim()) {
      setTasks([...tasks, { date: selectedDate, title: taskTitle }]);
      setTaskTitle(''); // Clear the input field after adding the task
    }
  };

  return (
    <div className="dashboard"> {/* Use a flex container for the layout */}
      <Sidebar /> {/* Include the Sidebar */}
      <div className="main-content">
        <h2>Select a Date and Add a Task</h2>
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date | null) => setSelectedDate(date)}
          dateFormat="yyyy/MM/dd"
        />
        <div>
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Enter task title"
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <Calendar selectedDate={selectedDate || new Date()} tasks={tasks} />
      </div>
    </div>
  );
};

export default DateSelector;
