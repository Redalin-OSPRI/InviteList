export interface Invitee {
    id: string;
    name: string;
    status: 'invited' | 'accepted' | 'declined';
}

export interface Event {
    id: string;
    title: string;
    date: string;
    invitees: Invitee[];
}

export interface AppState {
    events: Event[];
    selectedEventId: string | null;
}