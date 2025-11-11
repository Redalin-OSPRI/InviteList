import React from 'react';
import Banner from '../components/Banner';
import Sidebar from '../components/Sidebar';
import KanbanBoard from '../components/KanbanBoard';

const HomePage: React.FC = () => {
    return (
        <div>
            <Banner />
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <KanbanBoard />
            </div>
        </div>
    );
};

export default HomePage;