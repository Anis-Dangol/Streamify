# Streamify

Streamify is a real-time language exchange web app that combines chat, video calling, and friend matching to help users find and practice with language partners. The project contains a Node/Express backend and a React + Vite frontend.

This README explains how to run the app locally, describe important environment variables, document the API surface used by the frontend, and provide debugging tips for common issues (auth cookies, Stream token, CORS).

## Features

- User signup/login (JWT cookie-based auth)
- User onboarding (profile: native/learning language, bio, location)
- Friend requests and friend list
- Real-time chat (Stream Chat)
- Video calling (Stream Video)
- Basic UI built with Tailwind CSS and React

## Tech stack

- Frontend: React (Vite), Tailwind CSS, DaisyUI
- State & data: @tanstack/react-query, zustand
- Realtime & media: stream-chat, stream-chat-react, @stream-io/video-react-sdk
- UI & icons: lucide-react
- HTTP: axios
- Backend: Node.js, Express, MongoDB (mongoose)
- Auth & cookies: jsonwebtoken, cookie-parser

## Quick start

1. Backend

```powershell
cd backend
npm install
# create .env from .envExample and set STREAM_API_KEY/STREAM_API_SECRET, MONGO_URI, JWT_SECRET_KEY
npm run dev
```

2. Frontend

```powershell
cd frontend
npm install
# set VITE_STREAM_API_KEY in frontend/.env (must match backend STREAM_API_KEY)
npm run dev
```



git reset --hard 394185ae4525b476f84b85c1c64a5ccba938d9c6


