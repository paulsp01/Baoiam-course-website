import React from "react";

function Notifications() {
  const notifications = [
    { id: 1, message: "Assignment due in 2 days", type: "warning" },
    { id: 2, message: "New course available: GraphQL Basics", type: "info" },
  ];

  return (
    <div
    className="text-white backdrop-filter overflow-hidden bg-indigo-100 backdrop-blur-lg dark:text-white dark:border dark:border-white rounded-lg"
  >
      <h2 className="text-2xl font-bold text-black p-4">Notifications</h2>
      <ul className="p-4">
        {notifications.map((notification) => (
          <li key={notification.id} className="mb-2">
            <div
              className={`p-2 rounded-md text-sm lg:text-base text-white ${
                notification.type === "warning"
                  ? "bg-amber-400"
                  : "bg-blue-600"
              }`}
            >
              {notification.message}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
