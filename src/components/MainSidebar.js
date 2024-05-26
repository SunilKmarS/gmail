'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faComments,
    faVideo,
    faBars,
} from '@fortawesome/free-solid-svg-icons';

function MainSidebar({ onToggleSidebar, isSidebarVisible }) {
    return (
        <div className="flex flex-col items-center bg-gray-100 h-screen w-[5vw] p-4 bg-mildPurple space-y-6">
            {/* Top toggle button */}
            <button onClick={onToggleSidebar} className="mb-2 mt-2">
                <FontAwesomeIcon icon={faBars} className="text-gray-600 h-[3.5vh] w-[10vw]" />
            </button>

            {/* Main icons */}
            <ul className="space-y-4">
                {/* Mail icon */}
                <li className={`cursor-pointer`}>
                <div className='flex h-8 w-[3.5vw] rounded-2xl bg-lightBlue items-center'>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/mail_fill_baseline_p900_20dp.png" className='h-5 w-5 ml-[1vw]'/>
                </div>
                <div className='text-gray-800 text-sm ml-[0.7vw]'>Mail</div>
                </li>
                
                {/* Chat icon */}
                <li className={`cursor-pointer`}>
                <div className='flex h-7 w-[3.5vw] rounded-2xl hover:bg-gray-200 items-center'>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/chat_bubble_baseline_nv700_20dp.png" className='h-5 w-5 ml-[1vw]'/>
                </div>
                <div className='text-gray-800 text-sm ml-[0.7vw] mt-[0vw]'>Chat</div>
                </li>
                
                {/* Meet icon */}
                <li className={`cursor-pointer`}>
                <div className='flex h-7 w-[3.5vw] rounded-2xl hover:bg-gray-200 items-center'>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/meet_baseline_nv700_20dp.png" className='h-5 w-5 ml-[1vw]'/>
                </div>
                <div className='text-gray-800 text-sm ml-[0.7vw] mt-[0vw]'>Meet</div>
                </li>
            </ul>
        </div>
    );
}

export default MainSidebar;
