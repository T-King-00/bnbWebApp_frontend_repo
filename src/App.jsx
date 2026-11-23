import './App.css'
import {Outlet, useLocation} from 'react-router'

import RoomListings from "./components/Rooms/RoomListings/RoomListings.jsx";
import Header from "./components/Header/Header.jsx";
import "./API/apiBase.js"

import Footer from "./components/Footer/Footer.jsx";
import {useLayoutEffect} from "react";
import Chat from "./components/Chat/chat.jsx";
import ChatBubble from "@/components/Chat/ChatBubble.jsx";



function App() {
    const { key } = useLocation();
    useLayoutEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [key]);
    return (
        <div id={"App"} >
            <Header></Header>
            <main className={"min-h-[calc(72vh-88px)] bg-bg   text-text "}>
                <Outlet/>
                <ChatBubble/>
            </main>

            <Footer></Footer>
        </div>
    )
}

export default App;
