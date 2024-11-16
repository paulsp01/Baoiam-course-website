import React, { useState } from 'react';
import { School } from '../../Data';

const ChatBot = () => {
    const [response, setResponse] = useState('');
    const [messages, setMessages] = useState([]);
    const [chatOpen, setChatOpen] = useState(false);
    const [botResponse, setBotResponse] = useState('');
    const [userInput, setUserInput] = useState('');
    const [conversation, setConversation] = useState({});

    const course = School[0].subCate;

    const handleSubmit = (event) => {
        event.preventDefault();
        const userInputValue = userInput;
        setMessages([...messages, { user: userInputValue }]);
        setResponse(`You said: ${userInputValue}`);

        let response;
        if (userInputValue.toLowerCase() === 'hi' || userInputValue.toLowerCase() === 'hello') {
            response = 'Hello! How can I assist you today?';
        } else if (userInputValue.toLowerCase() === 'Courses List' || userInputValue.toLowerCase() === 'courses' || userInputValue.toLowerCase() === 'Show me courses' || userInputValue.toLowerCase() === 'School Courses') {
            response = course.map((c) => {
                return <p key={c.id}>{c.course}</p>
            });
        } else {
            response = 'Sorry, I didn\'t understand that. Can you please rephrase?';
        }
        setBotResponse(response);
        setUserInput('');

        setConversation((prevConversation) => ({
            ...prevConversation,
            [messages.length]: response,
        }));
    };
    return (
        <>
            <button
                onClick={() => setChatOpen(!chatOpen)}
                className="fixed bottom-8 right-8 z-[100] inline-flex items-center justify-center text-xs font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-14 h-14 bg-indigo-600 hover:bg-indigo-400 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5"
                type="button"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-white block border-gray-200 align-middle"
                >
                    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" className="border-gray-200"></path>
                </svg>
            </button>

            {chatOpen && (
                <div className="fixed bottom-24 right-2 md:right-8 w-72 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 bg-white dark:bg-[#15104d] rounded-2xl shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold dark:text-white">Chatbot</h2>
                        <button
                            onClick={() => setChatOpen(false)}
                            className="text-gray-500 dark:text-white hover:text-gray-900 transition duration-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="overflow-y-auto py-4 h-72">
                        <div className="overflow-y-auto py-4 h-72">
                            {messages.map((message, index) => (
                                <div key={index} className="mb-2">
                                    <span className="text-gray-700 dark:text-white font-bold">You:</span>
                                    <span className="text-gray-700 dark:text-white ml-2">{message.user}</span>
                                    <br />
                                    <span className="text-gray-700 dark:text-white font-bold">Chatbot:</span>
                                    {conversation[index]}
                                </div>
                            ))}
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="flex items-center border border-black dark:border-white rounded-full overflow-hidden mt-4">
                        <input
                            type="text"
                            name="userInput"
                            value={userInput}
                            onChange={(event) => setUserInput(event.target.value)}
                            placeholder="Type a message..."
                            className="w-full px-4 py-2 text-sm text-gray-700 dark:text-white bg-transparent rounded outline-none"
                        />
                        <button type="submit" className="bg-indigo-600 hover:bg-indigo-400 text-white font-bold py-1 px-4 rounded-full">
                            Send
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default ChatBot;