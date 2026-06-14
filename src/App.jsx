import './App.css'
import { Outlet } from 'react-router'

import RoomListings from "./components/Rooms/RoomListings/RoomListings.jsx";
import Header from "./components/Header/Header.jsx";
import "./API/apiBase.js"

import Footer from "./components/Footer/Footer.jsx";



function App() {

    
    return (
        <div id={"App"} >
            <Header></Header>
            <main>
                <Outlet/>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default App;
