import { useEffect } from "react";
import { NavLink } from "react-router";
import { create } from "zustand";


const useThemeStore = create((set) => ({
    themeState: "light",
    setTheme: () =>
        set((state) => ({
            themeState: state.themeState === "light" ? "dark" : "light",
        })),
}));

const useMenuVertical = create((set) => ({
    isOpen: true,
    toggleMenu: () => set((state)=>({isOpen: !state.isOpen })),
}));





function Header() {
    const { themeState, setTheme } = useThemeStore();
    const { isOpen, toggleMenu } = useMenuVertical();
    useEffect(() => {
        document.documentElement.dataset.theme = themeState;
    }, [themeState]);
    

    const menuButtonClass =
        `inline-flex w-full items-center justify-center rounded-lg   px-5 py-2.5 text-sm font-semibold text-text transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 md:w-auto`;

    const themeButtonClass =
        `inline-flex w-full items-center justify-center rounded-lg border border-primary  px-5 py-2.5 text-sm font-semibold text-text transition hover:bg-primary hover:text-primary-text focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 md:w-auto`;

    const navLinkClass = () => menuButtonClass;
    
    return (
       <header className="sticky top-0 z-50 flex w-full flex-col md:flex-row justify-between border-b border-border bg-surface px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
           <div className={"flex items-center gap-3 "}>
               <NavLink to="/" className="group flex items-center gap-3 mb-2 w-[80%] md:w-full">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-primary-text shadow-sm transition group-hover:bg-primary-hover">
                        B&B
                    </span>
                   <span className="flex flex-col leading-tight">
                        <span className="text-lg font-bold tracking-normal text-text">
                            Bed & Breakfast
                        </span>
                        <span className="text-xs font-medium uppercase tracking-widest text-text-muted">
                            Hotel
                        </span>
                    </span>
               </NavLink>

               <button className={"HamburgerIcon mx-4 md:hidden"} onClick={toggleMenu}>
                   {
                       isOpen ? 
                           (       
                                <svg className={"HamburgerIcon mx-4  md:hidden"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                           )
                           : 
                           (
                               <svg className={"HamburgerIcon mx-4 md:hidden"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                 </svg>
                          )
                   }
               </button>
       

              
           </div>
           
  
           <div className={`navbar-hamburger z-50 text-text-muted absolute left-0 flex w-full items-center border-b border-border bg-surface px-4 py-4 shadow-md transition-all duration-500 ease-in md:static md:w-auto md:border-0 md:p-0 md:shadow-none md:opacity-100
           ${isOpen ? "top-full opacity-100" : "top-[-400px] opacity-0"}` }>
            
               <div className="w-full" id="navbar-hamburger">
                   <ul className="flex w-full flex-col gap-3 text-xl md:w-auto md:flex-row md:items-center" >
                       <li className={"my-1 md:my-0"}>
                           <div className="flex w-full items-center gap-3">
                               <nav className="flex w-full flex-col gap-2 md:w-auto md:flex-row md:items-center">
                                   <NavLink to="/" className={navLinkClass}>
                                       Home
                                   </NavLink>
                                   <NavLink to="/rooms" className={navLinkClass}>
                                       Rooms
                                   </NavLink>
                               </nav>
                           </div>
                       </li>
                       <li className={"my-1 md:my-0"}>
                           <div className="flex w-full items-center gap-3">
                               <NavLink
                                   to="/login"
                                   className={menuButtonClass}
                               >
                                   Login
                               </NavLink>
                           </div>
                       </li>
                       <li className={"my-1 md:my-0" }>
                           <div className="flex w-full items-center gap-3">

                               <button
                                   id="themeToggleBtn"
                                   onClick={setTheme}
                                   className={themeButtonClass}
                               >
                                   {themeState === "light" ? "Dark" : "Light"}
                               </button>
                           </div>
                       </li>
                     
                   </ul>
               </div>
           </div>

       </header>
    );
}

export default Header;

/* <header className="sticky top-0 z-50 border-b border-border bg-surface backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
           

          
             
                
            </div>
        </header>*/
