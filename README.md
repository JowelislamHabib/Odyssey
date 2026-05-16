# Odyssey - Travel & Destination Booking Platform

## Purpose of the Project

Odyssey is a comprehensive web application designed to facilitate travel and destination booking. It provides a seamless platform for users to discover breathtaking destinations, manage their travel itineraries, and securely book their next adventure. The project features user authentication, a dashboard to track personal bookings, destination management, and an intuitive user interface to elevate the travel planning experience.

## Tech Stack

This project is built using modern web development technologies to ensure high performance, security, and a great developer experience:

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** React 19
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [HeroUI](https://heroui.com/)
- **Authentication:** [Better Auth](https://better-auth.com/) (with MongoDB Adapter)
- **Database:** [MongoDB](https://www.mongodb.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

## Challenges Overcome

During the development of Odyssey, several technical challenges were addressed:

- **Authentication Integration:** Seamlessly integrating Next.js App Router with `better-auth` and establishing a robust connection to MongoDB for secure user sessions and profile management.
- **State & Data Mutation:** Handling real-time updates for complex state mutations, such as editing user profiles, booking cancellations, and adding new destinations, while maintaining an optimistic and responsive UI.
- **Responsive Design:** Crafting a consistently premium and responsive user experience across all devices using Tailwind CSS v4 and customizing HeroUI components to fit the project's aesthetic.
- **Routing & API Management:** Structuring nested routes for destination details (`[id]`) and securing protected routes like user profiles and dashboards.

## How to Run Locally

Follow these steps to get the project running on your local machine:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd odyssey-frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or yarn install / pnpm install / bun install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` or `.env` file in the root directory and add the necessary environment variables. (Adjust these based on your specific backend configuration):

   ```env
   MONGODB_URI=your_mongodb_connection_string
   BETTER_AUTH_SECRET=your_better_auth_secret_key
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Start the Development Server:**

   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

## 📂 File Tree

Here is an overview of the project's core structure:

```text
odyssey-frontend/
├── public/                 # Static assets (images, icons, etc.)
│   └── assets/             # Destination images, banners, and SVGs
├── src/
│   ├── app/                # Next.js App Router setup
│   │   ├── (auth)/         # Authentication routes (login, register, my-profile)
│   │   ├── add-destination/# Page to add new destinations
│   │   ├── api/            # API routes (including Better Auth endpoints)
│   │   ├── Components/     # Reusable UI components (NavBar, Cards, Modals, etc.)
│   │   ├── destinations/   # Destination listing and dynamic detail pages
│   │   ├── my-bookings/    # User's bookings dashboard
│   │   ├── globals.css     # Global stylesheets
│   │   ├── layout.js       # Root layout component
│   │   └── page.js         # Landing page
│   ├── lib/                # Library configurations and utilities
│   │   ├── auth.js         # Better Auth server configuration
│   │   └── auth-client.js  # Better Auth client configurations
│   └── proxy.js            # Proxy configuration
├── package.json            # Project dependencies and scripts
├── next.config.mjs         # Next.js configuration
├── postcss.config.mjs      # PostCSS configuration for Tailwind
└── eslint.config.mjs       # ESLint configuration
```
