import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface Task {
    title: string;
    description: string;
    percentage: number;
}

interface TaskColumnProps {
    title: string;
    tasks: Task[];
}
  

  const TaskColumn: React.FC<TaskColumnProps> = ({ title = "Default Title", tasks = [] }) => {

    return (
        <div style={columnStyle}>
            <h3 style={titleStyle}>{title}</h3>
            <div>
                {tasks.map((task, index) => (
                    <div key={index} style={taskStyle}>
                        <div style={progressWrapperStyle}>
                            <CircularProgressbar
                                value={task.percentage}
                                text={`${task.percentage}%`}
                                styles={buildStyles({
                                    pathColor: '#6c63ff',
                                    textColor: '#6c63ff',
                                    trailColor: '#eee',
                                })}
                            />
                        </div>
                        <div style={contentStyle}>
                            <h4>{task.title}</h4>
                            <p>{task.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Styles
const columnStyle: React.CSSProperties = {
    backgroundColor: '#2c2b5a',
    padding: '20px',
    borderRadius: '10px',
    width: '300px',
};

const titleStyle: React.CSSProperties = {
    color: '#fff',
    marginBottom: '20px',
};

const taskStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
    marginBottom: '20px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
};

const progressWrapperStyle: React.CSSProperties = {
    width: '60px',
    height: '60px',
    marginRight: '20px',
};

const contentStyle: React.CSSProperties = {
    flex: 1,
};

export default TaskColumn;
