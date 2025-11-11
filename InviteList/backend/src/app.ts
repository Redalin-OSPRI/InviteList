import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import eventRoutes from './routes/eventRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/events', eventRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;