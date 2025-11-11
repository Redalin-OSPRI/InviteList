import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import InviteeCard from './InviteeCard';
import { Invitee } from '../types';

interface ColumnProps {
  title: string;
  invitees: Invitee[];
  columnId: string;
}

const Column: React.FC<ColumnProps> = ({ title, invitees, columnId }) => {
  return (
    <div className="column">
      <h2>{title}</h2>
      <Droppable droppableId={columnId}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="invitee-list"
          >
            {invitees.map((invitee, index) => (
              <InviteeCard key={invitee.id} invitee={invitee} index={index} />
            ))}
            {provided.placeholder}
            <div className="total-count">Total: {invitees.length}</div>
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;