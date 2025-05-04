# Food Delivery App

A modern food delivery application built with React, TypeScript, and Tailwind CSS.

## Features

- User authentication
- Menu browsing
- Cart management
- Order tracking
- Profile settings
- Payment methods
- Notifications

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with your Firebase configuration:
```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── context/        # React context providers
├── pages/          # Page components
├── config/         # Configuration files
├── types/          # TypeScript type definitions
└── data/           # Mock data (for development)
```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Firebase (Authentication, Firestore)
- React Router
- Lucide Icons 