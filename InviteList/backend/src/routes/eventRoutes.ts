import { Router } from 'express';
import { createEvent, getEvents, updateEvent, deleteEvent } from '../controllers/eventController';

const router = Router();

// Route to create a new event
router.post('/events', createEvent);

// Route to get all events
router.get('/events', getEvents);

// Route to update an existing event
router.put('/events/:id', updateEvent);

// Route to delete an event
router.delete('/events/:id', deleteEvent);

export default router;