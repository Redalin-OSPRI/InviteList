import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';
import { EventProvider } from './context/EventContext';
import './App.css';

const App: React.FC = () => {
  return (
    <EventProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/event/:id" component={EventPage} />
        </Switch>
      </Router>
    </EventProvider>
  );
};

export default App;