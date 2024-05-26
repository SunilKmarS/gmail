'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import EmailList from '@/components/EmailList';
import MainSidebar from '@/components/MainSidebar';
import RightSidebar from '@/components/RightSidebar';

export default function Home() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [filter, setFilter] = useState('all');
    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="h-screen flex font-custom overflow-y-hidden">
            {/* Main Sidebar */}
            <div className="sticky top-0 flex-shrink-0 bg-gray-100 w-[5.3vw]">
                <MainSidebar onToggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />
            </div>

            {/* Right Section */}
            <div className="flex flex-col flex-grow">
                {/* Header */}
                <Header onToggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />

                {/* Main Content Area */}
                <div className="flex flex-1">
                    {/* Sidebar */}
                    {isSidebarVisible && (
                        <div className="flex-shrink-0 w-[20vw] bg-white">
                            <Sidebar setFilter={setFilter} />
                        </div>
                    )}

                    {/* Email List */}
                    <div className={`flex-grow bg-dullWhite w-full`}>
                        <EmailList filter={filter} />
                    </div>
                    {/* Right Sidebar */}
                    <div className="flex w-[4vw] ">
                        <RightSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}
