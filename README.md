DriveFleet — Premium Car Rental Platform

Live Site: https://car-rent-sepia-phi.vercel.app/
Client Repo: https://github.com/thenoname09/car-rent
Server Repo: https://github.com/thenoname09/A9-server

📌 About DriveFleet
DriveFleet is a full-stack premium car rental platform where users can explore available vehicles, view car details, make bookings, manage their listings, and maintain their profiles — all in one place.

✨ Key Features

🔐 Secure Authentication — Email/password login and Google OAuth via Better Auth with JWT stored in HTTPOnly cookies for secure session management.
🚘 Car Listings & CRUD — Users can add, update, and delete their own car listings with full details including type, price, location, seat capacity, and availability status.
📅 Booking System — Logged-in users can book available cars with options for driver assistance and special notes. 
🔍 Search & Filter — Search cars by name using MongoDB $regex operator and filter by car type for a smooth browsing experience.
📱 Fully Responsive Design — Optimized for mobile, tablet, and desktop using Tailwind CSS with a clean, recruiter-friendly UI using a consistent navy blue color palette.
⚡ Smooth Animations — Page elements animate in using Framer Motion (motion/react) for a premium user experience on the hero banner and key sections.


🛠️ Tech Stack
Frontend

Next.js 14 — App Router
Tailwind CSS — Styling
HeroUI — UI Components
Lucide React — Icons
Motion/React — Animations
React Hot Toast — Notifications
React Spinners — Loading indicators

Backend

Node.js + Express.js
MongoDB — Database
Better Auth — Authentication
JWT — Token-based auth via HTTPOnly cookies


📦 Installation & Setup
Prerequisites

Node.js v18+
MongoDB Atlas account
Google OAuth credentials



🔒 Private Routes
RouteDescription/add-carsAdd a new car listing/my-bookingsView all your bookings/my-added-carsManage your car listings/my-added-cars/[id]Update a car listing

🚀 Deployment

Client → Vercel
Server → Vercel
Database → MongoDB Atlas