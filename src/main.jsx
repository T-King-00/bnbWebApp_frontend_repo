import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'
import HomePage from "./Page/Home/HomePage.jsx";
import Rooms from "./Page/Rooms/Rooms.jsx";
import LoginPage from "./Page/Login/LoginPage.jsx";
import RoomDetails from "./Page/RoomDetails/RoomDetails.jsx";
import BookingForm from "./Page/BookingForm/BookingForm.jsx";
import Bookings from "./Page/Bookings/Bookings.jsx";


const router= createBrowserRouter(createRoutesFromElements(
    <Route path="/" 
            element={<App/>}      
           errorElement={<p>Route error: the page failed to render.</p>}
    >
        <Route path={"/"}index element={<HomePage/>}/>
        <Route path={"/Login"} element={<LoginPage/>}/>
        <Route path={"/rooms"} element={<Rooms/>}/>
        <Route path={"/rooms/:id"} element={<RoomDetails/>}/>
        <Route path={"/rooms/:id/bookingForm"} element={<BookingForm/>}/>
        <Route path={"/bookings"} element={<Bookings/>}/>

      
    </Route>,
),)

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
)
