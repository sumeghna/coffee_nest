# Backend

Backend API for the Coffee Nest procurement and supply chain management platform.

---

# Tech Stack

* Node.js
* Express.js
* TypeScript
* PostgreSQL
* JWT Authentication
* Redis (Future Integration)
* Docker (Future Deployment)

---

# Folder Structure

```txt
backend/
│
├── node_modules/
│
├── src/
│   │
│   ├── common/
│   │
│   ├── config/
│   │
│   ├── database/
│   │
│   ├── middleware/
│   │
│   ├── modules/
│   │   │
│   │   ├── admin/
│   │   │
│   │   ├── auth/
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.repository.ts
│   │   │   ├── auth.routes.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.types.ts
│   │   │   └── auth.validation.ts
│   │   │
│   │   ├── deliveries/
│   │   ├── lots/
│   │   ├── notifications/
│   │   ├── offers/
│   │   ├── reports/
│   │   └── users/
│   │
│   ├── utils/
│   │
│   ├── app.ts
│   └── server.ts
│
├── .env
├── package.json
├── package-lock.json
└── tsconfig.json
```

---

# Architecture Flow

```txt
Routes
  ↓
Controllers
  ↓
Services
  ↓
Repositories
  ↓
Database
```

---

# API Base URL

```txt
/api/v1
```

---

# Modules

## 1. Authentication Module

Handles:

* User Registration
* Login
* Logout
* JWT Authentication
* Refresh Tokens

### Routes

```txt
POST   /api/v1/auth/register
POST   /api/v1/auth/login
POST   /api/v1/auth/logout
POST   /api/v1/auth/refresh-token
GET    /api/v1/auth/me
```

---

## 2. Users Module

Handles:

* User Profile Management
* Verification Documents
* Farmer Details
* Buyer Details

### Routes

```txt
GET    /api/v1/users/:id
PATCH  /api/v1/users/:id
POST   /api/v1/users/:id/documents
GET    /api/v1/users/farmers/:id
GET    /api/v1/users/buyers/:id
```

---

## 3. Coffee Lots Module

Core procurement module.

Handles:

* Coffee Lot Listings
* Lot Filtering
* Image Uploads
* Status Management

### Routes

```txt
POST   /api/v1/lots
POST   /api/v1/lots/:id/images
GET    /api/v1/lots
GET    /api/v1/lots/:id
PATCH  /api/v1/lots/:id
DELETE /api/v1/lots/:id
GET    /api/v1/users/:id/lots
PATCH  /api/v1/lots/:id/status
```

### Lot Statuses

```txt
AVAILABLE
RESERVED
SOLD
IN_TRANSIT
DELIVERED
```

---

## 4. Offers Module

Handles:

* Procurement Negotiation
* Offer Lifecycle
* Offer Acceptance/Rejection

### Routes

```txt
POST   /api/v1/offers
GET    /api/v1/lots/:id/offers
GET    /api/v1/users/:id/offers
PATCH  /api/v1/offers/:id/accept
PATCH  /api/v1/offers/:id/reject
DELETE /api/v1/offers/:id
```

### Offer Statuses

```txt
PENDING
ACCEPTED
REJECTED
CANCELLED
```

---

## 5. Deliveries Module

Handles:

* Delivery Tracking
* Pickup Workflow
* Logistics Operations

### Routes

```txt
POST   /api/v1/deliveries
PATCH  /api/v1/deliveries/:id/assign
PATCH  /api/v1/deliveries/:id/pickup-status
GET    /api/v1/deliveries/:id
GET    /api/v1/users/:id/deliveries
```

### Delivery Statuses

```txt
PENDING
PICKED_UP
IN_TRANSIT
DELIVERED
```

---

## 6. Quality Reports Module

Handles:

* Quality Verification
* Moisture Validation
* Grading Reports

### Routes

```txt
POST   /api/v1/quality-reports
GET    /api/v1/lots/:id/quality-reports
PATCH  /api/v1/quality-reports/:id
```

---

## 7. Notifications Module

Handles:

* Real-time Alerts
* Procurement Notifications
* Delivery Updates

### Routes

```txt
GET    /api/v1/notifications
PATCH  /api/v1/notifications/:id/read
```

---

## 8. Admin Module

Handles:

* User Management
* Platform Analytics
* Dispute Resolution
* User Suspension

### Routes

```txt
GET    /api/v1/admin/users
PATCH  /api/v1/admin/users/:id/status
GET    /api/v1/admin/analytics
POST   /api/v1/admin/disputes/:id/resolve
```

---

# Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000
JWT_SECRET=your_secret_key
DATABASE_URL=your_database_url
```

---

# Running the Project

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

---

# Future Enhancements

* Redis Queues
* Real-time Notifications
* AI-based Price Prediction
* Blockchain Traceability
* Docker Deployment
* Mobile Application
* Analytics Dashboard

---

# Author

Coffee Nest Backend Team
