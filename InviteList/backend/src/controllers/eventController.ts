import { Request, Response } from 'express';
import { Event } from '../types';

let events: Event[] = [];

// Create a new event
export const createEvent = (req: Request, res: Response) => {
    const newEvent: Event = req.body;
    events.push(newEvent);
    res.status(201).json(newEvent);
};

// Get all events
export const getEvents = (req: Request, res: Response) => {
    res.status(200).json(events);
};

// Update an event
export const updateEvent = (req: Request, res: Response) => {
    const { id } = req.params;
    const index = events.findIndex(event => event.id === id);
    if (index !== -1) {
        events[index] = { ...events[index], ...req.body };
        res.status(200).json(events[index]);
    } else {
        res.status(404).json({ message: 'Event not found' });
    }
};

// Delete an event
export const deleteEvent = (req: Request, res: Response) => {
    const { id } = req.params;
    events = events.filter(event => event.id !== id);
    res.status(204).send();
};