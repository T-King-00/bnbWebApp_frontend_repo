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


const router= createBrowserRouter(createRoutesFromElements(
    <Route path="/" 
            element={<App/>}      
           errorElement={<p>Route error: the page failed to render.</p>}
    >
        <Route path={"/"}index element={<HomePage/>}/>
        <Route path={"/rooms"} element={<Rooms/>}/>
        <Route path={"/Login"} element={<LoginPage/>}/>
      
    </Route>,
),)

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
)
