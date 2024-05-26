import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPen,
    faInbox,
    faStar,
    faClock,
    faPaperPlane,
    faClipboard,
    faArrowDown,
    faPlus,
    faTag,
} from '@fortawesome/free-solid-svg-icons';

function Sidebar({ setFilter }) {
    // State to track the active filter
    const [activeFilter, setActiveFilter] = useState("all");

    // Function to handle button clicks
    const handleButtonClick = (filterType) => {
        setFilter(filterType);  // Set the filter in the parent component
        setActiveFilter(filterType);  // Set the active filter in the Sidebar component
    };

    return (
        <aside className="bg-dullWhite h-full w-[20vw] flex flex-col items-left justify-between px-3 py-2">
            {/* Main sections */}
            <ul className="flex flex-col items-left space-y-3">
                <li>
                    <div className='flex h-[3.7vw] w-[10.7vw] rounded-2xl bg-mildBlue'>
                        <img src="https://www.gstatic.com/images/icons/material/system_gm/2x/create_black_24dp.png" className='h-6 w-6 mt-[0.9vw] ml-[1vw]'/>
                        <p className='font-medium mt-3 ml-3'>Compose</p>
                    </div>
                </li>
                <div>
                    <li
                        className={`flex items-center space-x-4 p-0.3 mt-[0.5vw] px-4 rounded-[1vw] ${activeFilter === 'all' ? 'bg-mildViolet' : 'hover:bg-gray-200'} text-black cursor-pointer`}
                        onClick={() => handleButtonClick('all')}
                    >
                        <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/inbox_fill_baseline_p900_20dp.png" height="20px" width="20px"/>
                        <span className={`${activeFilter === 'all' ? 'text-gray-900' : 'text-gray-900'} font-semibold`}>Inbox</span>
                    </li>
                    <li
                        className={`flex items-center space-x-4 p-0.3 px-4 rounded-[1vw] ${activeFilter === 'starred' ? 'bg-mildViolet' : 'hover:bg-gray-200'} cursor-pointer`}
                        onClick={() => handleButtonClick('starred')}
                    >
                        <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/star_baseline_nv700_20dp.png" height="20px" width="20px" />
                        <span className={`${activeFilter === 'starred' ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>Starred</span>
                    </li>
                    <li
                        className={`flex items-center space-x-4 p-0.3 px-4 rounded-[1vw] ${activeFilter === 'snooze' ? 'bg-mildViolet' : 'hover:bg-gray-200'} cursor-pointer`}
                        onClick={() => handleButtonClick('snooze')}
                    >
                        <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/schedule_baseline_nv700_20dp.png" height="20px" width="20px"/>
                        <span className={`${activeFilter === 'snooze' ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>Snoozed</span>
                    </li>
                    <li
                        className={`flex items-center space-x-4 p-0.3 px-4 rounded-full ${activeFilter === 'sent' ? 'bg-mildViolet' : 'hover:bg-gray-200'} cursor-pointer`}
                        onClick={() => handleButtonClick('sent')}
                    >
                        <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/send_baseline_nv700_20dp.png" height="20px" width="20px"/>
                        <span className={`${activeFilter === 'sent' ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>Sent</span>
                    </li>
                    <li
                        className={`flex items-center space-x-4 p-0.3 px-4 rounded-full ${activeFilter === 'drafts' ? 'bg-mildViolet' : 'hover:bg-gray-200'} cursor-pointer`}
                        onClick={() => handleButtonClick('drafts')}
                    >
                        <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/draft_baseline_nv700_20dp.png" height="20px" width="20px"/>
                        <span className={`${activeFilter === 'drafts' ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>Drafts</span>
                    </li>
                    <li className="flex items-center space-x-4 p-0.3 px-4 rounded-full hover:bg-gray-200 cursor-pointer">
                        <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/expand_more_baseline_nv700_20dp.png" height="20px" width="20px"/>
                        <span className="text-gray-700">More</span>
                    </li>
                    <li className="flex items-center space-x-[12vw] mt-6 ml-3 font-semibold rounded-full bd-white cursor-pointer text-base">
                        <span className="text-gray-700">Labels</span>
                        <FontAwesomeIcon icon={faPlus} className="text-gray-600" />
                    </li>
                </div>
            </ul>
        </aside>
    );
}

export default Sidebar;
