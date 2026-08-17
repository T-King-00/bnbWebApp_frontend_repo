# B&B Web App Frontend

React frontend for a bed-and-breakfast booking application. Guests can search for available rooms, review room details, sign in, create a booking, view bookings, and cancel a confirmed reservation.

## Current Features

- Responsive shared layout with header, footer, mobile navigation, and light/dark themes.
- Room availability search by check-in date, check-out date, and guest count.
- Loading, API error, and empty-result states on the rooms page.
- Room details with capacity, amenities, nightly price, and calculated stay information.
- Cookie-based login with loading/error feedback and return-to-previous-page navigation.
- Zustand authentication state with conditional Login, Logout, and Bookings navigation.
- Authentication check before entering the booking form.
- Booking creation using customer details, selected room, dates, and guest count.
- Booking success and failure pages, including backend validation messages and trace IDs.
- Booking cancellation with booking ID validation and a cancellation confirmation page.
- Bookings list with loading, error, and empty states.
- Development-only API request logging.
- Local and Docker-based development workflows.

## Tech Stack

- React 19
- Vite 8
- React Router 7
- Tailwind CSS 4
- Zustand 5
- Axios
- React Hook Form and Yup
- date-fns
- Lucide React

## Prerequisites

- Node.js and npm for local development, or Docker Desktop with Docker Compose.
- The B&B backend API must be running and reachable from the browser.

The Docker image uses Node 26 Alpine. If you run the app locally, use a Node.js version supported by Vite 8.

## Environment Setup

Create a `.env` file in the project root and add the backend API base URL :

```env
VITE_API_BASE_URL=https://localhost:7171
```

Use the backend server origin without a trailing `/api`. The API modules append endpoint paths such as `/rooms` and `/api/bookings` themselves.

Login sends cookies with `withCredentials: true`. The backend must therefore allow the frontend origin in its CORS configuration and permit credentialed requests.

## Run Locally

Install dependencies and start Vite:

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Run With Docker Compose

Build and start the development container:

```bash
docker compose up --build
```

The Compose configuration:

- publishes the app at [http://localhost:5173](http://localhost:5173);
- mounts the project into `/app` for live updates;
- keeps container dependencies in a named `node_modules` volume; and
- enables file polling for reliable change detection.

Useful commands:

```bash
docker compose up -d
docker compose logs -f frontend
docker compose down
```

To use Docker without Compose:

```bash
docker build -t frontend_bandbwebapp:latest .
docker run --rm -p 5173:5173 --env-file .env frontend_bandbwebapp:latest
```

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run lint` | Run ESLint across the project |
| `npm run preview` | Preview the production build locally |

## Application Routes

| Route | Purpose |
| --- | --- |
| `/` | Home page |
| `/rooms` | Search and browse available rooms |
| `/rooms/:id` | View room details |
| `/rooms/:id/bookingForm` | Enter guest details and create a booking |
| `/rooms/:id/bookingForm/:bookingId/bookingSuccess` | View booking confirmation and cancel the booking |
| `/bookingFailed` | Display booking/API failure details |
| `/bookingCancelled/:bookingId` | Confirm successful cancellation |
| `/bookings` | Fetch and display bookings |
| `/login` | Sign in |
| `/logout` | Clear frontend authentication state |

Routes are currently defined in `src/main.jsx` and rendered inside the shared `App` layout.

## Backend API Endpoints

All endpoints are relative to `VITE_API_BASE_URL`.

| Method | Endpoint | Used for |
| --- | --- | --- |
| `GET` | `/rooms?checkInDate={date}&checkOutDate={date}&numberOfGuests={count}` | Search available rooms |
| `GET` | `/rooms/{id}?checkInDate={date}&checkOutDate={date}` | Load room details and stay pricing |
| `GET` | `/allRooms` | Fetch all rooms (helper available) |
| `POST` | `/api/user/login?useCookies=true` | Sign in with a cookie-based session |
| `POST` | `/api/customer/id` | Create or resolve the booking customer |
| `POST` | `/api/rooms/{roomId}/bookings` | Create a booking |
| `GET` | `/api/bookings` | Fetch bookings |
| `DELETE` | `/api/bookings/{bookingId}` | Cancel a booking |

Dates are sent as `yyyy-MM-dd`, matching the backend's `.NET DateOnly` query format. Booking create/delete requests include an `X-Client-Trace-Id` header; normalized failures preserve the backend trace ID when supplied.

## Project Structure

```text
src/
├── API/                 # Axios requests, error normalization, and logging
├── components/          # Shared header, footer, room, search, and UI components
├── Page/                # Route-level pages and booking status screens
├── store/               # Shared authentication state
├── App.jsx              # Shared application layout
├── index.css            # Tailwind import and theme variables
└── main.jsx             # Router configuration and application entry point
```

## Troubleshooting

- **Rooms do not load:** confirm the backend is running and `VITE_API_BASE_URL` contains the correct origin.

## Next Steps

- Restore authentication state from the backend and add protected routes.
- Connect logout and registration to backend endpoints.
- Add booking form and date-range validation.
- Make the booking form resilient to direct navigation and page refreshes.
- Improve the bookings management UI and fetch it automatically.
- Move remaining shared stores out of page/component modules.
- Add automated component and end-to-end tests.
