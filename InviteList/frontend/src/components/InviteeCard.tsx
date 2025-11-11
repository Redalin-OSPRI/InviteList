import React from 'react';

interface InviteeCardProps {
    name: string;
    status: 'invited' | 'accepted' | 'declined';
    onDragStart: (event: React.DragEvent<HTMLDivElement>, name: string) => void;
}

const InviteeCard: React.FC<InviteeCardProps> = ({ name, status, onDragStart }) => {
    return (
        <div
            draggable
            onDragStart={(event) => onDragStart(event, name)}
            className={`invitee-card ${status}`}
        >
            {name}
        </div>
    );
};

export default InviteeCard;