## Current Limitations

- Authentication is stored only in memory; refreshing the page resets the Zustand login state even if a backend cookie still exists.
- Logout clears frontend state but does not currently call a backend logout endpoint.
- The booking form has no client-side field validation and assumes it was opened with room data in router state.
- The selected payment method is UI-only and is not included in the booking request.
- The bookings page requires a manual fetch and currently uses a basic list layout.
- Registration exists as a component but is not connected to a route or backend endpoint.
- Route-level protection is handled only when the user clicks the room booking button; booking and bookings URLs are not protected by a route guard.
- Search checks that values exist, but does not yet verify that check-out is after check-in.
- Several Zustand stores still live inside page/component files and can be moved into `src/store/`.
