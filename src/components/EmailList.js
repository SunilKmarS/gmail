import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faRotateRight, faEllipsisVertical, faArrowLeft, faArrowRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons';

function EmailList({ filter }) {
    const [emails, setEmails] = useState([]);
    const [selectedEmailId, setSelectedEmailId] = useState(null);
    const [selectedEmails, setSelectedEmails] = useState({});
    const [isAllSelected, setIsAllSelected] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeEmailType, setActiveEmailType] = useState("primary"); // State to track the active email type

    // Function to fetch emails from the appropriate JSON file
    const fetchEmails = async () => {
        let filePath = '/mails.json'; // Default file path for 'all' and 'starred' filters

        if (filter === 'sent') {
            filePath = '/sent-mails.json'; // Change to 'sent-mails.json' when filter is 'sent'
        } else if (filter === 'drafts') {
            filePath = '/drafts.json'; // Change to 'drafts.json' when filter is 'drafts'
        } else if (filter === 'snooze') {
            filePath = '/mails.json'; // Change to 'drafts.json' when filter is 'drafts'
        }

        try {
            const response = await fetch(filePath);
            const data = await response.json();
            setEmails(data);
        } catch (error) {
            console.error('Error fetching emails:', error);
        }
    };

    // Call fetchEmails when the component mounts and whenever the filter prop changes
    useEffect(() => {
        fetchEmails();
    }, [filter]);

    // Update isAllSelected when selectedEmails changes
    useEffect(() => {
        const allSelected = emails.length > 0 && emails.every(email => selectedEmails[email.id]);
        setIsAllSelected(allSelected);
    }, [emails, selectedEmails]);

    // Function to handle email click events
    const handleEmailClick = (id) => {
        setSelectedEmailId(id);
    };

    // Function to handle checkbox change events
    const handleCheckboxChange = (id) => {
        setSelectedEmails((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    // Function to handle toggling the dropdown
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Function to handle selecting all checkboxes
    const handleSelectAll = () => {
        if (isAllSelected) {
            setSelectedEmails({});
        } else {
            const newSelection = emails.reduce((acc, email) => {
                acc[email.id] = true;
                return acc;
            }, {});
            setSelectedEmails(newSelection);
        }
    };

    // Function to handle dropdown option selection
    const handleDropdownOption = (option) => {
        // Handle each option accordingly
        switch (option) {
            case 'selectAll':
                handleSelectAll();
                break;
            case 'selectNone':
                setSelectedEmails({});
                break;
            case 'selectRead':
                // Select only read emails
                const readSelection = emails.reduce((acc, email) => {
                    if (email.read) {
                        acc[email.id] = true;
                    }
                    return acc;
                }, {});
                setSelectedEmails(readSelection);
                break;
            case 'selectUnread':
                // Select only unread emails
                const unreadSelection = emails.reduce((acc, email) => {
                    if (!email.read) {
                        acc[email.id] = true;
                    }
                    return acc;
                }, {});
                setSelectedEmails(unreadSelection);
                break;
            case 'selectStarred':
                // Select only starred emails
                const starredSelection = emails.reduce((acc, email) => {
                    if (email.starred) {
                        acc[email.id] = true;
                    }
                    return acc;
                }, {});
                setSelectedEmails(starredSelection);
                break;
            case 'selectUnstarred':
                // Select only unstarred emails
                const unstarredSelection = emails.reduce((acc, email) => {
                    if (!email.starred) {
                        acc[email.id] = true;
                    }
                    return acc;
                }, {});
                setSelectedEmails(unstarredSelection);
                break;
            default:
                break;
        }
        setIsDropdownOpen(false);
    };

    // Function to toggle the starred state of an email
    const toggleStarred = (emailId) => {
        // Find the index of the email in the emails array
        const emailIndex = emails.findIndex(email => email.id === emailId);
        if (emailIndex !== -1) {
            // Create a copy of the emails array
            const updatedEmails = [...emails];
            // Toggle the starred state of the email
            updatedEmails[emailIndex].starred = !updatedEmails[emailIndex].starred;
            // Update the emails state
            setEmails(updatedEmails);
        }
    };

    // Filter emails based on the active email type
    const filteredEmails = emails.filter((email) => {
        if (activeEmailType === 'primary') {
            return email.type === 'primary';
        } else if (activeEmailType === 'promotions') {
            return email.type === 'promotions';
        } else if (activeEmailType === 'social') {
            return email.type === 'social';
        }
        // If no specific email type is active, return all emails
        return true;
    });

    return (
        <div className="main bg-white rounded-2xl h-[86vh] overflow-hidden">
            {/* Top Section */}
            <div className="top flex justify-between items-center py-4">
                {/* First set */}
                <div className="first-set">
                    <ul className="flex space-x-10">
                        {/* Button with checkbox and caret down icon */}
                        <li className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center ml-5 space-x-1 text-gray-700"
                            >
                                {/* Checkbox */}
                                <input
                                    type="checkbox"
                                    className="cursor-pointer h-3.5 w-3.5 font-bold border-[1.9px] border-gray-500 focus:"
                                    checked={isAllSelected}
                                    onChange={handleSelectAll}
                                />

                                {/* Caret down icon */}
                                <FontAwesomeIcon icon={faCaretDown} className="h-3 w-4 text-gray-600 mb-0.5" />
                            </button>

                            {/* Dropdown menu */}
                            {isDropdownOpen && (
                                <div className="absolute top-6 left-0 bg-white border border-gray-300 rounded-md shadow-lg p-2 z-10">
                                    <ul>
                                        <li
                                            className="cursor-pointer p-2 hover:bg-gray-200"
                                            onClick={() => handleDropdownOption('selectAll')}
                                        >
                                            All
                                        </li>
                                        <li
                                            className="cursor-pointer p-2 hover:bg-gray-200"
                                            onClick={() => handleDropdownOption('selectNone')}
                                        >
                                            None
                                        </li>
                                        <li
                                            className="cursor-pointer p-2 hover:bg-gray-200"
                                            onClick={() => handleDropdownOption('selectRead')}
                                        >
                                            Read
                                        </li>
                                        <li
                                            className="cursor-pointer p-2 hover:bg-gray-200"
                                            onClick={() => handleDropdownOption('selectUnread')}
                                        >
                                            Unread
                                        </li>
                                        <li
                                            className="cursor-pointer p-2 hover:bg-gray-200"
                                            onClick={() => handleDropdownOption('selectStarred')}
                                        >
                                            Starred
                                        </li>
                                        <li
                                            className="cursor-pointer p-2 hover:bg-gray-200"
                                            onClick={() => handleDropdownOption('selectUnstarred')}
                                        >
                                            Unstarred
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>

                        <li>
                            <a href="#" className="flex items-center text-gray-600 ml-[-1vw]">
                                <FontAwesomeIcon icon={faRotateRight} className='h-3.5 w-3.5' />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center text-gray-600 ml-[-1vw]">
                                <FontAwesomeIcon icon={faEllipsisVertical} className='h-3.5 w-2' />
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Second set */}
                <div className="second-set">
                    <ul className="flex space-x-2 text-gray-600 text-sm mr-[2.7vw]">
                        <li>1-50 of 4,562</li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Buttons for email types */}
            <div className="flex items-left w-full">
                <div className='flex w-[18vw] bg-white hover:bg-gray-100 px-2.5'>
                <button
                    className={`flex w-[16vw] items-left space-x-4 p-2 ${activeEmailType === 'primary' ? 'text-blue-700 border-b border-b-[0.5vh] border-blue-700' : ''}`}
                    onClick={() => setActiveEmailType('primary')}
                >
                    <img className='h-[20px] w-[20px] mt-[0.1vw]' src='https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/inbox_fill_baseline_p600_20dp.png'/>
                    <div>Primary</div>
                </button>
                </div>
                <div className='flex w-[18vw] bg-white hover:bg-gray-100 px-2.5'>
                <button
                    className={`flex w-[18vw] items-left space-x-4 p-2 ${activeEmailType === 'promotions' ? 'text-blue-700 border-b border-b-[0.5vh] border-blue-700' : ''}`}
                    onClick={() => setActiveEmailType('promotions')}
                >
                    <img className='h-[20px] w-[20px] mt-[0.1vw]' src='https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/sell_baseline_nv700_20dp.png'/>
                    <div>Promotions</div>
                </button>
                </div>
                <div className='flex w-[18vw] bg-white hover:bg-gray-100 px-2.5'>
                <button
                    className={`flex w-[18vw] items-left space-x-4 p-2 ${activeEmailType === 'social' ? 'text-blue-700 border-b border-b-[0.5vh] border-blue-700' : ''}`}
                    onClick={() => setActiveEmailType('social')}
                >
                    <img className='h-[20px] w-[20px] mt-[0.1vw]' src='https://ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/group_baseline_nv700_20dp.png'/>
                    <div>Social</div>
                </button>
                </div>
            </div>

            {/* Wrapper */}
            <div className="wrapper overflow-auto h-full" style={{ height: '555px' }}>
                {/* Email list */}
                <div className="mails overflow-y-auto text-sm">
                    <ul>
                        {filteredEmails.map((email) => (
                            <li
                                key={email.id}
                                className={`flex items-center border-b border-gray-200 border-b-1  ${
                                    email.read ? 'bg-dullBlue' : 'bg-white'
                                } ${selectedEmailId === email.id ? 'bg-blue-100' : ''} cursor-pointer`}
                                onClick={() => handleEmailClick(email.id)}
                            >
                                {/* Checkbox */}
                                {/* Drag Handle (6-dot element) */}
                                <FontAwesomeIcon
                                    icon={faGripVertical}
                                    className="cursor-move text-white ml-[0.7vw] mr-[0.2vw] hover:text-gray-600"
                                />
                                <input
                                    type="checkbox"
                                    className="cursor-pointer h-3.5 w-3.5 "
                                    checked={selectedEmails[email.id] || false}
                                    onChange={() => handleCheckboxChange(email.id)}
                                />

                                {/* Star icon */}
                                <FontAwesomeIcon
                                    icon={faStar}
                                    onClick={() => toggleStarred(email.id)}
                                    className={`ml-[1.2vw] ${
                                        email.starred ? 'text-yellow-400' : 'text-gray-400 opacity-35'
                                    } ${isDropdownOpen ? 'opacity-20' : ''}`}
                                />

                                {/* Email head */}
                                <span
                                    className={`head text-lg ml-[1vw] ${
                                        email.read ? '' : 'font-bold'
                                    } flex-grow max-w-[170px] truncate`}
                                >
                                    {email.sender}
                                </span>

                                {/* Email subject */}
                                <span
                                    className={`text flex-grow ml-[3vw] ${
                                        email.read ? '' : 'font-bold'
                                    } max-w-[78%] truncate`}
                                >
                                    {email.subject}
                                </span>

                                {/* Email detail */}
                                <span className="detail text-gray-600 flex-grow max-w-full truncate">
                                    {email.detail}
                                </span>

                                {/* Time */}
                                <span className={`time text-gray-600 mr-[1.5vw] ${
                                        email.read ? '' : 'font-bold'
                                    }`}>
                                    {email.time}
                                </span>

                                {/* Conditionally render full email content */}
                                {selectedEmailId === email.id && (
                                    <div className="mt-2 text-gray-600">
                                        {email.body}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>   
                </div>
                <div className='text-sm text-gray-700 mt-[2vw] text-center'>
                        Powered By Google
                </div>
                <div className='mt-[10vw]'></div>
            </div>
        </div>
    );
}

export default EmailList;
