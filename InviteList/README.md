# InviteList
A simple tracker for birthday invitees, who has been invited, accepted, and declined.

## Project Overview
InviteList is a web-based application designed to help users manage birthday party invitations. The application allows users to create events, invite guests, and track their responses in a user-friendly interface.

## Features
- Customizable banner image for each event.
- Sidebar for navigating between events and creating new ones.
- Kanban-style board with three columns: Invited, Accepted, and Declined.
- Drag-and-drop functionality for moving invitees between columns.
- Responsive design for both desktop and mobile devices.

## Tech Stack
- **Frontend**: React with TypeScript
- **Backend**: Node.js with Express
- **Styling**: Material UI or Bootstrap
- **State Management**: Redux or React Context
- **Drag-and-Drop**: React DnD or similar library
- **Containerization**: Docker

## Project Structure
```
InviteList
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── context
│   │   ├── types
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── types
│   │   └── app.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## Getting Started
1. Clone the repository.
2. Navigate to the `frontend` and `backend` directories and install the dependencies using `npm install`.
3. Build the Docker images using the provided Dockerfiles.
4. Use `docker-compose up` to start the application.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.