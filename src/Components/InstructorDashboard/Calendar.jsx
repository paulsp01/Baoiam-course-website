import React, { useState } from 'react';

const Calendar = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // State to manage the current month, tasks, selected date, and new task
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tasks, setTasks] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const currentDay = new Date().getDate();

  // Calculate days in the current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const getTaskKey = (date) => `${year}-${month}-${date}`; // Unique key for each date

  const handleMonthChange = (direction) => {
    const newDate = new Date(year, month + direction, 1);
    setCurrentDate(newDate);
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      const taskKey = getTaskKey(selectedDate);
      const updatedTasks = tasks[taskKey] ? [...tasks[taskKey], newTask] : [newTask];
      setTasks({
        ...tasks,
        [taskKey]: updatedTasks,
      });
      setNewTask('');
    }
  };

  const handleEditTask = (index) => {
    setEditingTask({ index, text: tasks[getTaskKey(selectedDate)][index] });
  };

  const handleSaveEditTask = () => {
    const taskKey = getTaskKey(selectedDate);
    const updatedTasks = [...tasks[taskKey]];
    updatedTasks[editingTask.index] = editingTask.text;
    setTasks({
      ...tasks,
      [taskKey]: updatedTasks,
    });
    setEditingTask(null);
  };

  const handleDeleteTask = (index) => {
    const taskKey = getTaskKey(selectedDate);
    const updatedTasks = tasks[taskKey].filter((_, i) => i !== index);
    setTasks({
      ...tasks,
      [taskKey]: updatedTasks.length ? updatedTasks : undefined,
    });
  };

  return (
    <div className="bg-white p-4 my-4 rounded-lg shadow max-w-xl mx-auto">
      <h2 className="text-2xl text-center font-semibold my-4">
        {currentDate.toLocaleDateString('default', { month: 'long', year: 'numeric' })}
      </h2>

      {/* Month Navigation */}
      <div className="flex justify-between mb-4">
        <button onClick={() => handleMonthChange(-1)} className="bg-indigo-600 w-24 text-white px-4 py-2 rounded">
          Previous
        </button>
        <button onClick={() => handleMonthChange(1)} className="bg-indigo-600 w-24 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>

      {/* Days of the week */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => (
          <div key={day} className="text-center font-medium">
            {day}
          </div>
        ))}
      </div>

      {/* Dates of the current month */}
      <div className="grid grid-cols-7 gap-2 mt-2">
        {/* Blank cells for the previous month */}
        {Array.from({ length: firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1 }).map((_, i) => (
          <div key={i}></div>
        ))}

        {/* Dates */}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((date) => {
          const taskKey = getTaskKey(date);
          return (
            <div
              key={date}
              onClick={() => setSelectedDate(date)}
              className={`text-center text-sm md:text-base w-8 lg:w-10 flex items-center justify-center aspect-square cursor-pointer border rounded-lg
                ${date === currentDay && month === new Date().getMonth() ? 'bg-indigo-900 text-white' : ''}
                ${tasks[taskKey] ? 'border-2 border-green-600' : ''}
              `}
            >
              {date}
            </div>
          );
        })}
      </div>

      {/* Task Modal */}
      {selectedDate && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4">Tasks for {selectedDate}</h3>

            {/* Display Existing Tasks */}
            {tasks[getTaskKey(selectedDate)] && tasks[getTaskKey(selectedDate)].length > 0 ? (
              tasks[getTaskKey(selectedDate)].map((task, index) => (
                <div key={index} className="flex items-center justify-between mb-2">
                  {editingTask && editingTask.index === index ? (
                    <input
                      type="text"
                      value={editingTask.text}
                      onChange={(e) => setEditingTask({ ...editingTask, text: e.target.value })}
                      className="border p-2 rounded w-full"
                    />
                  ) : (
                    <span>{task}</span>
                  )}
                  <div className="ml-4">
                    {editingTask && editingTask.index === index ? (
                      <button
                        onClick={handleSaveEditTask}
                        className="text-indigo-600 hover:underline mr-2"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEditTask(index)}
                        className="text-indigo-600 hover:underline mr-2"
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteTask(index)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No tasks for this date.</p>
            )}

            {/* Add New Task */}
            <div className="mt-4">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter new task"
                className="w-full p-2 border rounded-lg mb-2"
              />
              <button
                onClick={handleAddTask}
                className="bg-indigo-600 text-white py-2 px-4 rounded-lg w-full hover:bg-indigo-700"
              >
                Add Task
              </button>
            </div>

            {/* Close Modal */}
            <button
              onClick={() => setSelectedDate(null)}
              className="mt-4 w-full py-2 px-4 text-indigo-600 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
