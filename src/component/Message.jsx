import React, { useState, useRef } from 'react';
import Avatar from "../image/Avatar.svg";

const Messages = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [message, setMessage] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const messages = [
        {
            id: 1,
            name: 'Hamish March',
            title: 'HR Manager · Grameenphone',
            message: 'You: Thank you very much for your support...',
            avatar: Avatar,
            pinned: true,
            online: true,
            timestamp: 'Feb 5, 2025 12:00 PM',
        },
        {
            id: 2,
            name: 'Hamish March',
            title: 'HR Manager · Grameenphone',
            message: 'You: Thank you very much for your support...',
            avatar: Avatar,
            pinned: false,
            online: true,
            timestamp: 'Feb 5, 2025 11:00 AM',
        },
        {
            id: 3,
            name: 'Hamish March',
            title: 'HR Manager · Grameenphone',
            message: 'You: Thank you very much for your support...',
            avatar: Avatar,
            pinned: true,
            online: true,
            timestamp: 'Feb 4, 2025 01:00 PM',
        },
        {
            id: 4,
            name: 'Hamish March',
            title: 'HR Manager · Grameenphone',
            message: 'You: Thank you very much for your support...',
            avatar: Avatar,
            pinned: false,
            online: false,
            timestamp: 'Feb 3, 2025 10:00 AM',
        },
        {
            id: 5,
            name: 'Hamish March',
            title: 'HR Manager · Grameenphone',
            message: 'You: Thank you very much for your support...',
            avatar: Avatar,
            pinned: true,
            online: true,
            timestamp: 'Feb 2, 2025 03:00 PM',
        },
        {
            id: 6,
            name: 'Hamish March',
            title: 'HR Manager · Grameenphone',
            message: 'You: Thank you very much for your support...',
            avatar: Avatar,
            pinned: false,
            online: false,
            timestamp: 'Feb 1, 2025 05:00 PM',
        },
        {
            id: 7,
            name: 'Hamish March',
            title: 'HR Manager · Grameenphone',
            message: 'You: Thank you very much for your support...',
            avatar: Avatar,
            pinned: true,
            online: true,
            timestamp: 'Jan 31, 2025 08:00 AM',
        },
        {
            id: 8,
            name: 'Hamish March',
            title: 'HR Manager · Grameenphone',
            message: 'You: Thank you very much for your support...',
            avatar: Avatar,
            pinned: false,
            online: false,
            timestamp: 'Jan 30, 2025 11:00 AM',
        },
    ];

    // Mock chat messages
    const chatMessages = [
        {
            id: 1,
            sender: 'other',
            message: 'Keeping this in mind, Grameenphone always brings future-proof technology in order to facilitate your progress.',
            timestamp: 'May 21, 2020, 7:51 PM',
        },
        {
            id: 2,
            sender: 'me',
            message: 'My goal was to craft a functional and delightful experience through web and mobile apps currently consisting of 1.2M+ & future billion users.',
            timestamp: 'May 21, 2020, 7:51 PM',
        },
    ];

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const fileInputRef = useRef(null);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log('File selected:', file.name);
            // Handle file upload logic here
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            <div className="w-full flex flex-col md:flex-row rounded-lg shadow-md overflow-hidden">
                {/* Sidebar Toggle Button (Mobile) */}
                <button
                    className="md:hidden fixed top-4 left-4 z-50 bg-blue-500 text-white p-2 rounded-md"
                    onClick={toggleSidebar}
                >
                    {isSidebarOpen ? 'Close' : 'Menu'}
                </button>

                {/* Left Sidebar */}
                <div
                    className={`w-full md:w-80 bg-white border-r border-gray-200 h-screen overflow-y-auto ${isSidebarOpen ? 'block' : 'hidden'} md:block`}
                >
                    {/* Navigation Tabs */}
                    <div className="flex items-center px-4 py-3 border-b border-gray-200">
                        <span className="text-sm font-medium mr-4">Messages</span>
                        <span className="text-sm font-medium text-blue-600 mr-4">Focused</span>
                        <span className="text-sm font-medium text-gray-500">Others</span>
                    </div>

                    {/* Search Box */}
                    <div className="p-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="search by name"
                                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-md bg-gray-50"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <svg
                                className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <button className="absolute right-2 top-2 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Message List */}
                    <div className="overflow-y-auto h-[calc(100vh-120px)]">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className="flex items-center px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-none"
                            >
                                <div className="relative">
                                    <img src={msg.avatar} alt={msg.name} className="w-10 h-10 rounded-full" />
                                    {msg.online && (
                                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                                    )}
                                </div>
                                <div className="ml-3 flex-1 min-w-0">
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm font-medium text-gray-900">{msg.name}</p>
                                        {msg.pinned && <span className="h-2 w-2 bg-pink-500 rounded-full"></span>}
                                    </div>
                                    <p className="text-xs text-gray-500">{msg.title}</p>
                                    <p className="text-xs text-gray-500 truncate">{msg.message}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Pagination */}
                    <div className="flex justify-center items-center p-4 border-t border-gray-200">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-3 py-1 rounded-md border border-gray-300 bg-white text-sm text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Prev
                        </button>
                        <div className="flex items-center mx-2">
                            {[...Array(5).keys()].map((i) => {
                                const pageNumber = i + 1;
                                return (
                                    <button
                                        key={pageNumber}
                                        onClick={() => handlePageChange(pageNumber)}
                                        className={`px-3 py-1 rounded-md text-sm ${currentPage === pageNumber
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-white text-gray-500 border border-gray-300'
                                            }`}
                                    >
                                        {pageNumber}
                                    </button>
                                );
                            })}
                            <span className="text-gray-500 mx-1">...</span>
                            <button
                                onClick={() => handlePageChange(89)}
                                className={`px-3 py-1 rounded-md text-sm ${currentPage === 89
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-white text-gray-500 border border-gray-300'
                                    }`}
                            >
                                89
                            </button>
                        </div>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === 89}
                            className="px-3 py-1 rounded-md border border-gray-300 bg-white text-sm text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Next
                        </button>
                    </div>
                </div>

                {/* Main Chat Area */}
                <div className="flex-1 flex flex-col bg-white">
                    {/* Chat Header */}
                    <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200">
                        <div className="flex items-center">
                            <img src={Avatar} alt="Hamish March" className="w-8 h-8 rounded-full" />
                            <div className="ml-3">
                                <h2 className="text-sm font-medium">Hamish March</h2>
                                <p className="text-xs text-gray-500">HR Manager · Grameenphone</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="text-blue-600 text-sm font-medium hidden md:block">View Profile</button>
                            <button className="text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* Chat Messages */}
                    <div className="flex-1 p-6 overflow-y-auto">
                        <div className="space-y-4">
                            {chatMessages.map((chatMessage) => (
                                <div
                                    key={chatMessage.id}
                                    className={`flex items-start space-x-3 ${chatMessage.sender === 'me' ? 'justify-end' : ''
                                        }`}
                                >
                                    {chatMessage.sender === 'other' && (
                                        <img src={Avatar} alt="Other Avatar" className="w-8 h-8 rounded-full" />
                                    )}
                                    <div>
                                        <div className="bg-blue-50 rounded-xl px-3 py-2">
                                            <p className="text-sm text-gray-700">{chatMessage.message}</p>
                                        </div>
                                        <p
                                            className={`text-xs text-gray-400 mt-1 ${chatMessage.sender === 'me' ? 'text-right' : ''
                                                }`}
                                        >
                                            {chatMessage.timestamp}
                                        </p>
                                    </div>
                                    {chatMessage.sender === 'me' && (
                                        <img src={Avatar} alt="My Avatar" className="w-8 h-8 rounded-full" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Message Input */}
                    <div className="border-t border-gray-200 px-6 py-3">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Write a message"
                                className="w-full px-4 py-2 text-sm border border-gray-200 rounded-lg pr-24 bg-gray-50"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        alert('Press Enter to Send');
                                        setMessage('');
                                    }
                                }}
                            />
                            <div className="absolute right-2 top-2 flex items-center space-x-2">
                                <button
                                    onClick={triggerFileInput}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 1.5c-1.669 0-3 1.331-3 3 0 .56-.234 1.093-.624 1.483L14.5 6.597c-.94.94-2.48.94-3.42 0l-1.286-1.286a2.25 2.25 0 00-3.182.636m1.957 6.166c.271.27.39.628.39 1.002V18a3 3 0 01-3 3H3.75a3 3 0 01-3-3V9.75c0-.374.119-.732.39-.998l1.5-1.5a2.25 2.25 0 013.182-.636l1.286 1.286c.94.94 2.48.94 3.42 0l.624-.624a2.25 2.25 0 013.002-.625c.716.716.893 1.823.633 3.012m-5.757 5.757a2.25 2.25 0 01-3.182 0l-.565-.564m3.6 3.6c.516-.516.913-1.118 1.148-1.776" />
                                    </svg>
                                </button>
                                <input
                                    type="file"
                                    id="fileInput"
                                    ref={fileInputRef}
                                    className="hidden"
                                    onChange={handleFileUpload}
                                />
                                <button className="text-gray-400 hover:text-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 00-6.364 0m-6.364 0a7.5 7.5 0 0110.607 0m10.607 0a10.5 10.5 0 01-14.85 0M16.214 12.182a2.25 2.25 0 01-3.182 0m-3.182 0a4.5 4.5 0 00-6.364 0m6.364 0a7.5 7.5 0 0110.607 0m10.607 0a10.5 10.5 0 01-14.85 0" />
                                    </svg>
                                </button>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.9-2.9m-8.182 8.182l-3.624-3.624a2.25 2.25 0 010-3.182l-3.624-3.624m1.5 1.5l3.707 3.707a2.25 2.25 0 010 3.182l-1.409 1.409m5.4-5.4L9 9m-4.5 4.5l2.25-2.25" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 text-right mt-1">Press Enter to Send</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messages;
