# 🎉 EventHub - Fake Events App

A simple events listing and registration application built with React, TypeScript, and Vite.

## Features

- **Event Listing**: Browse 15 different events across various categories
- **Event Registration**: Register for events with a simple click
- **My Events**: View all your registered events in one place
- **Responsive Design**: Works great on desktop and mobile
- **No Filters**: Simple, straightforward event browsing (perfect for testing!)

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **CSS3** - Modern styling with gradients

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Start dev server (runs on port 5173 by default)
npm run dev
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Container Deployment

This app is designed to be easily deployed in containers (Daytona, Docker, etc.)

### Using Daytona

```typescript
// Example Daytona configuration
const workspace = await daytona.create({
  repository: {
    url: 'YOUR_REPO_URL',
    branch: 'main'
  }
});

// Wait for ready and install
await daytona.waitForReady(workspace.id);
await daytona.installDependencies(workspace.id, 'npm');

// Start dev server
await daytona.startDevServer(workspace.id, 'npm run dev', 5173);
```

### Using Docker

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
```

## Project Structure

```
fake-events/
├── src/
│   ├── components/
│   │   ├── EventCard.tsx       # Individual event card
│   │   ├── EventList.tsx       # Event grid display
│   │   └── Registrations.tsx   # My events view
│   ├── data/
│   │   └── events.ts           # Event data (15 events)
│   ├── App.tsx                 # Main app component
│   ├── App.css                 # All styling
│   └── main.tsx                # Entry point
├── package.json
└── README.md
```

## Event Categories

- Technology
- Music
- Business
- Art
- Food
- Sports
- Entertainment
- Education
- Gaming
- Wellness
- Literature
- Fashion

## Testing with Browser Automation

This app is perfect for testing with browser automation tools like browser-use:

**Example test scenarios:**
1. Browse all events on the main page
2. Click "Register Now" on various events
3. Navigate to "My Events" to see registrations
4. Cancel individual registrations
5. Try the "Clear All" button
6. Verify the total price calculation
7. Check the "Proceed to Payment" button

## API Endpoints (None!)

This is a fully client-side app with no backend - perfect for quick testing and development.

## License

MIT
# events_app
