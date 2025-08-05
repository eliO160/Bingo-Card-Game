# Bingo Game Application

This Bingo Card Game is a web-based minimal viable product (MVP) created as part of a coding bootcamp I completed in **Summer 2025** while pursuing my **M.S. in Software Engineering** at **Cal State Fullerton**. It was developed over three agile sprints to showcase a functional prototype. 

NOTE: The current iteration of this project utilizes an in-memory database. A more persistent database will be added in future sprints.

The game features a simple, clickable Bingo grid that displays “Bingo!” when five boxes in a row (horizontally, vertically, or diagonally) are selected. Prompts are currently stored in-memory.

---

## 👨‍💻 My Contributions to MVP

I built the initial version of this project with the following core features:
- Functional Bingo grid UI
- Game logic to detect “Bingo”
- Static backend with in-memory prompts
- Basic layout and styling

---

## Tech Stack

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).  

It includes a backend server for box data and a frontend bingo game.

- **Frontend:** React using Next.js 
- **Backend:** Node.js, Express (in-memory data only)
- **Styling:** Basic CSS 
- **Database:** In-memory (MongoDB planned)
- **Tools:** Git, GitHub, Postman



## Suggested Future Roadmap
Future sprints will expand in the following areas:

### Backend
- Refactor to use MongoDB for persistent storage
- Save full game state per user
- Introduce API routes for card generation and progress tracking

### UI/UX
- Transition styling to Tailwind CSS
- Improve layout, responsiveness, and accessibility

### Authentication
- Integrate Authentication, suggested Firebase
- Support OAuth login with Google or Student Email

### Features
- Support multiple game cards and multiplayer functionality
- Add user profiles and saved game history
- Bingo celebration animations and sound effects

### Deployment
- Frontend: Deploy to Vercel
- Backend: Deploy to Render or Railway
- Add CI/CD pipeline for streamlined development



## Getting Started

### 1. Clone the Repo

### 2. Install Dependencies

npm install

### 3. Start the Backend Server

```bash
cd server
node index.js
```

The backend runs on [http://localhost:3001](http://localhost:3001).

### 4. Start the Frontend Development Server

Go back to the project root:

```bash
cd ..
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The frontend runs on [http://localhost:3000](http://localhost:3000).

### 3. Play the Game

Open [http://localhost:3000](http://localhost:3000) in your browser.  
You can edit the bingo board by modifying `src/app/page.js`. The page auto-updates as you edit the file.

---

## Project Features

- Bingo grid powered by Next.js
- Box data fetched from a Node.js backend
- Editable box text and win detection
- Popup notification on bingo win

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub repository](https://github.com/vercel/next.js)

