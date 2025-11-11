import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <h2>Events</h2>
            <ul>
                {/* List of events will be populated here */}
            </ul>
            <button className="create-event-button">Create New Event</button>
        </div>
    );
};

export default Sidebar;