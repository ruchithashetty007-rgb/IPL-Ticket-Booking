# 🏏 IPL Ticket Booking Website

A modern and responsive IPL Ticket Booking website built using React, TypeScript, CSS, and Supabase.

Users can explore IPL matches, book tickets, select their preferred stand and stadium, and view their booking history.

## ✨ Features

- 🏠 Home page with an attractive landing section.
- 🏏 Matches page displaying IPL matches.
- 🎟️ Online ticket booking form.
- 🏟️ Stadium and stand selection.
- 🗄️ Supabase PostgreSQL database integration.
- 📋 Booking history with saved booking details.
- 🔄 Refresh booking history.
- 📱 Responsive user interface.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React | Frontend development |
| TypeScript | Type-safe development |
| CSS | Styling and responsive design |
| Supabase | Backend and database |
| PostgreSQL | Database management |
| Vite | Development server and build tool |
| Git & GitHub | Version control |

## 📂 Project Structure

```text
IPL-Ticket-Booking/
│
├── public/
├── src/
│   ├── components/
│   │   ├── MatchCard.tsx
│   │   └── Navbar.tsx
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Matches.tsx
│   │   ├── Booking.tsx
│   │   └── BookingHistory.tsx
│   │
│   ├── supabase.ts
│   ├── App.tsx
│   ├── App.css
│   └── index.css
│
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/ruchithashetty007-rgb/IPL-Ticket-Booking.git
```

### 2. Open the project folder

```bash
cd IPL-Ticket-Booking
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure Supabase

Create a Supabase project and configure the project URL and publishable (anon) key in `src/supabase.ts`.

Never expose your Supabase service-role key in frontend code.

Create the `bookings` table with the following columns:

- id
- name
- tickets
- stand
- venue
- created_at

Configure appropriate Row Level Security (RLS) policies.

### 5. Run the application

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## 🗄️ Database

This project uses Supabase PostgreSQL to store booking information.

Booking details include:

- Customer name
- Number of tickets
- Selected stand
- Stadium venue
- Booking date and time

## 👩‍💻 Author

**Ruchitha**

GitHub: ruchithashetty007-rgb

## 📌 Project

IPL Ticket Booking – React + TypeScript + Supabase.
