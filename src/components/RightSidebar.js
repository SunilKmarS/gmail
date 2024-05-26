import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faLightbulb, faTasks, faAddressBook, faPlus, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function RightSidebar() {
    return (
        <div className="w-[25vw] bg-dullWhite h-full flex flex-col py-4 ">
            {/* Icons */}
            <div className="flex flex-col items-center space-y-[6vh]">
                {/* Calendar logo */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" alt="Google Calendar" className="w-5 h-5 cursor-pointer" />

                {/* Keep logo */}
                <div className='w-5 h-5 overflow-hidden rounded-sm'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/archive/e/e5/20221017172635%21Google_Keep_icon_%282020%29.svg" alt="Google Keep" className="cursor-pointer mb-[5vw] mt-[-0.47vw]" />
                </div>
                {/* Tasks logo */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Google_Tasks_2021.svg" alt="Google Tasks" className="w-5 h-5 cursor-pointer" />

                {/* Contacts logo */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/archive/9/93/20221102143812%21Google_Contacts_icon.svg" alt="Google Contacts" className="w-5 h-5 cursor-pointer" />

                <div className='border-t text-gray-600 h-5 w-5 '></div>

                
            </div>

            {/* Plus icon with right arrow */}
            <div className="mt-[1vw] flex flex-col items-center">
                {/* Plus icon */}
                <img src="https://img.icons8.com/android/24/plus.png" alt="Plus" className="w-[17px] h-[17px] cursor-pointer" />
            
                {/* Right arrow */}
                <div className='mt-[16vw]'>
                <img src="https://img.icons8.com/ios-filled/50/forward--v1.png" alt="Right Arrow" className="w-3.5 h-3.5 cursor-pointer" />
                </div>
            </div>
        </div>
    );
}

export default RightSidebar;
