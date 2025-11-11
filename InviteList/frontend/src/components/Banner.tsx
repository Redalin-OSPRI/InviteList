import React from 'react';

interface BannerProps {
    imageUrl: string;
    eventName: string;
}

const Banner: React.FC<BannerProps> = ({ imageUrl, eventName }) => {
    return (
        <div style={{ 
            backgroundImage: `url(${imageUrl})`, 
            height: '200px', 
            backgroundSize: 'cover', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: 'white', 
            fontSize: '24px', 
            fontWeight: 'bold' 
        }}>
            {eventName}
        </div>
    );
};

export default Banner;