# X-Tech Solution - Backend

A robust backend system for a corporate website with content management capabilities, featuring secure authentication, real-time content updates, and contact form handling.

## Features

- **Admin Authentication** - Secure JWT-based login system for admin panel access
- **Content Management** - API endpoints for updating homepage content (hero section, services)
- **Form Handling** - Store and retrieve contact form submissions
- **Database Integration** - MongoDB for persistent data storage
- **RESTful API** - Clean, well-structured endpoints following REST conventions

## Tech Stack

**Backend:** Node.js, Express.js  
**Database:** MongoDB, Mongoose  
**Authentication:** JWT, Bcrypt

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

## Installation & Setup

### Prerequisites

- Node.js (v14+)
- MongoDB

### Clone the Repository

```bash
git clone https://github.com/Rakibul-98/x-text-solution-server.git
```

Navigate to the project directory:

```bash
cd x-text-solution-server
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

## Deployment

The backend can be deployed to:

- Render
- Heroku
- AWS Elastic Beanstalk
- DigitalOcean App Platform

## Contact & Support

For technical issues or feature requests, please open an issue in the repository or contact the maintainer directly.
