import React from 'react';
import { format } from 'date-fns';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Calender.css"
import Sidebar from "./Sidebar"

<Sidebar/>

interface Task {
  date: Date;
  title: string;
}

interface CalendarProps {
  selectedDate: Date;
  tasks: Task[];
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, tasks }) => {
  const renderTasks = (date: Date) => {
    return tasks
      .filter((task) => format(task.date, 'yyyy/MM/dd') === format(date, 'yyyy/MM/dd'))
      .map((task, index) => (
        <div key={index} style={{ color: 'red', fontSize: '0.8em' }}>
          {task.title}
        </div>
      ));
  };

  return (
    <div>
      <h2>Selected Date:</h2>
      <p>{format(selectedDate, 'yyyy/MM/dd')}</p>
      <ReactCalendar
        value={selectedDate}
        tileContent={({ date, view }) =>
          view === 'month' && renderTasks(date)
        }
      />
    </div>
  );
};

export default Calendar;
