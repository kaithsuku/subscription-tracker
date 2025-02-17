# 🤖Subscription Management System

A production-ready Subscription Management System handling real users, real money, and robust business logic. This API is built with Node.js, Express.js, and MongoDB to ensure scalable architecture and smooth frontend integration.

## ⚙️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)
- **Authentication:** JWT
- **Additional Tools:** Arcjet for advanced rate limiting and bot protection, Upstash for automated email reminders

## 🔋Features

- **Advanced Rate Limiting and Bot Protection:**  
  Secures the application using Arcjet.

- **Database Modeling:**  
  Implements models and relationships using MongoDB & Mongoose.

- **JWT Authentication:**  
  Manages user CRUD operations and subscription processes.

- **Global Error Handling:**  
  Incorporates input validation and middleware integration for seamless error management.

- **Logging Mechanisms:**  
  Provides enhanced debugging and monitoring capabilities.

- **Email Reminders:**  
  Automates smart email reminders using workflows with Upstash.

- **Code Architecture and Reusability:**  
  Ensures a scalable and maintainable code structure.

## 🤸 Quick Start

Follow these steps to set up the project locally:

### Prerequisites

Make sure you have installed:
- Git
- Node.js
- npm (Node Package Manager)

### Cloning the Repository

```bash
git clone https://github.com/kaithsuku/subscription-tracker.git
cd subscription-tracker
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
# PORT
PORT=5500
SERVER_URL="http://localhost:5500"

# ENVIRONMENT
NODE_ENV=development

# DATABASE
DB_URI=

# JWT AUTH
JWT_SECRET=
JWT_EXPIRES_IN="1d"

# ARCJET
ARCJET_KEY=
ARCJET_ENV="development"

# UPSTASH
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=

# NODEMAILER
EMAIL_PASSWORD=
```

**Running the Project**

```bash
npm run dev
```

