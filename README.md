# B&B Web App Frontend

React frontend for a bed and breakfast room booking project. The app lets guests browse rooms, inspect room details, search availability by date range, and move toward a booking flow.

## Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS
- Zustand
- Axios
- React Hook Form
- Yup

## Environment

Create a `.env` file with the backend base URL:

```env
VITE_API_BASE_URL=https://your-backend-url/api
```

The API helpers read this value from:

```js
import.meta.env.VITE_API_BASE_URL
```

## Available Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Done Features

### Routing And Layout

- Main app shell with shared `Header`, `Footer`, and route outlet.
- React Router setup for:
  - `/` home page
  - `/Login` login page
  - `/rooms` rooms listing page
  - `/rooms/:id` room details page
  - `/rooms/:id/bookingForm` booking form page
- Basic route error fallback message.

### Home Page

- Landing page with B&B introduction.
- Call-to-action link to browse rooms.
- Feature cards explaining room browsing, details, and booking flow.

### Rooms Page

- Fetches and renders rooms from the backend.
- Uses Zustand to store room list state.
- Includes a search bar for check-in and check-out dates.
- Search button calls the date-range room availability API.
- Room list rendering is separated into `RoomListings` and `CardItem` components.

### Room Card

- Displays room image, type, description, guest capacity, size, and base price.
- Links each room card to its room details page.
- Uses defensive rendering for missing `beds` and `price` data to avoid route crashes.

### Room Details Page

- Reads room id from the route parameter.
- Fetches room details from the backend.
- Handles loading state.
- Handles invalid or missing room errors.
- Displays room overview, capacity, size, amenities, and price.
- Provides a booking link.

### Booking Form Page

- Static booking form layout exists.
- Guest details fields are present.
- Payment method UI is present.
- Booking summary UI is present.

### Login Page

- Static login page layout exists.
- Email and password fields are present.
- Remember-me and forgot-password UI are present.

### Registration Form

- Registration form component exists.
- Uses React Hook Form and Yup validation.
- Validates name, email, password, and repeated password.

### Styling

- Tailwind CSS is configured through `@import "tailwindcss"`.
- Theme variables are defined in `src/index.css`.
- Light and dark theme color variables exist.
- Room, login, booking, and search UI have custom styling.

## API Calls Currently Used

### Get Room Details

```js
GET /rooms/{id}
```

Used by the room details page.

### Get All Rooms

```js
GET /allRooms
```

Used by the rooms page initial load.

### Get Available Rooms By Date Range

```js
GET /rooms?checkInDate=yyyy-MM-dd&checkOutDate=yyyy-MM-dd
```

Used by the rooms search feature.

The date inputs return strings in `yyyy-MM-dd` format, which matches the expected `.NET DateOnly` query format.

## Not Done Yet

### Booking Flow

- Booking form is currently static.
- Booking form is not connected to backend booking creation.
- Room id is not correctly passed into the booking form route yet.
- Booking summary uses hard-coded data.
- No booking confirmation state exists yet.

### Authentication

- Login page is currently static.
- Login form is not connected to backend authentication.
- No auth state is stored.
- No protected routes exist yet.
- Registration form is not wired into routing or backend registration.

### Search And Availability

- Date-range search is partially implemented.
- Need user-facing validation when dates are missing.
- Need validation that check-out date is after check-in date.
- Need loading and error states while searching rooms.
- Need a clear empty-state message when no rooms are available.

### Room Data Robustness

- Backend room response shape should be confirmed.
- `beds`, `price`, and `amenities` fields should have consistent API contracts.
- Room card and room details should use the same display rules for guests and price.

### Error Handling

- API helpers currently return empty arrays for several errors.
- Error handling should distinguish between network errors, validation errors, and empty results.
- Route error page should be replaced with a proper styled error screen.

### Code Organization

- Zustand stores are currently defined inside page files.
- Stores should eventually move to separate files, for example `src/store/roomStore.js` and `src/store/searchStore.js`.
- API helper file should be renamed or split by domain, for example `roomApi.js`.
- Unused imports should be cleaned up.

### UI Improvements

- Add loading skeletons for room list search.
- Add empty-state card for no available rooms.
- Add form validation messages in the search bar.
- Improve mobile spacing and button alignment where needed.
- Replace placeholder room images with backend-provided images when available.

## Known Issues

- The route error page can appear if backend room data is missing fields that the UI expects.
- `GetAvailableRoomsWithinSpecificDataes` contains a typo in the function name.
- The room details booking link currently uses `/rooms/:id/bookingForm` literally instead of inserting the actual room id.
- The backend must support `/allRooms` for initial room loading and `/rooms?checkInDate=...&checkOutDate=...` for date search.

## Learning Notes

- React Router route structure and nested layout rendering.
- Zustand state management for shared states.
- React Hook Form with Yup validation.
- Tailwind CSS theme variables and component styling.
- Axios API helper functions.
- Frontend Side, and backend parameters matching datatypes.
