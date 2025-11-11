import React, { useContext } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { EventContext } from '../context/EventContext';
import Column from './Column';

const KanbanBoard: React.FC = () => {
    const { events } = useContext(EventContext);

    const onDragEnd = (result: any) => {
        // Logic for handling drag and drop
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="kanban-board" direction="horizontal">
                {(provided) => (
                    <div className="kanban-board" ref={provided.innerRef} {...provided.droppableProps}>
                        <Column title="Invited" invitees={events.invited} />
                        <Column title="Accepted" invitees={events.accepted} />
                        <Column title="Declined" invitees={events.declined} />
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default KanbanBoard;