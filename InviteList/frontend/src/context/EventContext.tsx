import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface Invitee {
    id: string;
    name: string;
}

interface Event {
    id: string;
    title: string;
    invitees: Invitee[];
}

interface State {
    events: Event[];
}

interface Action {
    type: string;
    payload: any;
}

const initialState: State = {
    events: [],
};

const EventContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

const eventReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_EVENT':
            return { ...state, events: [...state.events, action.payload] };
        case 'ADD_INVITEE':
            return {
                ...state,
                events: state.events.map(event =>
                    event.id === action.payload.eventId
                        ? { ...event, invitees: [...event.invitees, action.payload.invitee] }
                        : event
                ),
            };
        case 'MOVE_INVITEE':
            // Logic to move invitee between events or statuses
            return state;
        default:
            return state;
    }
};

export const EventProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(eventReducer, initialState);

    return (
        <EventContext.Provider value={{ state, dispatch }}>
            {children}
        </EventContext.Provider>
    );
};

export const useEventContext = () => {
    const context = useContext(EventContext);
    if (context === undefined) {
        throw new Error('useEventContext must be used within an EventProvider');
    }
    return context;
};