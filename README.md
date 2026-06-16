# IdeasVault 🚀

IdeasVault is a full-stack web application where users can create, manage, and interact with ideas. Users can securely authenticate using Email/Password or Google Login, share ideas, comment on ideas, and manage their own content through a protected dashboard.

## Live Site

🔗 Live URL: [Add Your Live Link Here]

## Features

* 🔐 JWT Authentication with Better Auth
* 📧 Email & Password Authentication
* 🌐 Google Social Login
* 🛡️ Protected Routes using Next.js Middleware
* ↪️ Redirect to desired route after successful login
* 💡 Create, Read, Update, and Delete Ideas
* 💬 Comment System
* 👤 User Profile Management
* 📱 Fully Responsive Design
* 🎨 Modern UI built with HeroUI
* ⚡ Fast performance with Next.js 16

## Technologies Used

### Frontend

* Next.js 16
* React
* Tailwind CSS
* HeroUI
* React Hot Toast
* Swiper.js
* Better Auth Client

### Backend

* Node.js
* Express.js
* MongoDB
* Better Auth
* JWT Authentication
* JOSE (JWT Verification)

## Authentication & Security

### Authentication Methods

* Email/Password Login
* Google Login

### Security Features

* JWT-based Authentication
* Protected API Routes
* Protected Client Routes
* Session Management
* Route Redirection After Login

## Installation

### Clone the Repository

```bash
git clone <repository-url>
cd ideasvault
```

### Install Frontend Dependencies

```bash
npm install
```

### Install Backend Dependencies

```bash
npm install
```

## Environment Variables

Create a `.env.local` file in the client project:

```env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
MONGODB_URI=your_mongodb_uri
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000
```

Create a `.env` file in the server project:

```env
MONGO_URI=your_mongodb_uri
PORT=5000
```

## Run Locally

### Frontend

```bash
npm run dev
```

### Backend

```bash
nodemon index.js
```

## Project Structure

```plaintext
ideasvault/
├── src/
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── providers/
│   └── middleware.js
│
├── public/
├── server/
│   ├── index.js
│   └── routes/
│
└── README.md
```

## API Endpoints

### Ideas

* GET `/ideaData`
* GET `/ideaData/:id`
* POST `/ideaData`
* PATCH `/ideaData/:id`
* DELETE `/ideaData/:id`

### Comments

* GET `/commentData`
* POST `/commentData`
* PATCH `/commentData/:id`
* DELETE `/commentData/:id`

## Protected Routes

* `/addidea`
* `/myideas`
* `/myinteractions`
* `/idea/:id`

Unauthenticated users are automatically redirected to the login page and returned to their desired route after successful authentication.

## Future Improvements

* Idea Categories
* Idea Search & Filtering
* User Notifications
* Like & Bookmark System
* Admin Dashboard

## Author

Ashikur Rahman

## License

This project is created for educational purposes.
