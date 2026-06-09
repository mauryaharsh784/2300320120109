# Campus Notifications Microservice

A full-stack web application that displays campus notifications with priority-based sorting.

## Project Structure

```
leaning_modules/
├── frontend/          # React.js frontend
leaving_modules/
└── backend/           # Node.js + Express backend
```
## Preview

![Campus Notifications](Screenshot%202026-06-09%20164122.png)

## Features

## Features

- Fetches and displays top 10 notifications
- Priority-based sorting (Placement > Result > Event)
- New vs Viewed notification distinction
- Filter by notification type
- Pagination support
- Responsive design (Mobile + Desktop)
- Native CSS only (no Material UI)

## Tech Stack

- Frontend: React.js, CSS
- Backend: Node.js, Express.js, Axios

## API Endpoints

### GET /notifications

Query Parameters:

- limit : number - Number of notifications to return
- page : number - Page number for pagination
- notification_type : string - Filter type (Placement / Result / Event)

### Examples

```
GET http://localhost:5000/notifications
GET http://localhost:5000/notifications?limit=5
GET http://localhost:5000/notifications?notification_type=Placement
```

## Setup

### Backend

cd leaving_modules/backend
npm install
node index.js

### Frontend

cd leaning_modules/frontend
npm install
npm start

## Author

Name: Harsh Vardhan Maurya

Roll: 2300320120109
