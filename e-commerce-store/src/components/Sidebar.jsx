import React from "react";
import { Link } from "react-router-dom";
//Import images
import Logo from "../assets/Logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import Bag from "../assets/Bag.png";
import Store from "../assets/Store.png";
import Logout from "../assets/Logout.png";
import { createContext, useContext, useState } from 'react';


const SidebarContext = createContext();

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen ">
      <nav className="h-full min-h-full flex flex-col bg-white shadow-sm">
        

        {/* Sidebar items */}
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">
            <div className="w-10 h-10 ml-2 mb-4">
              <Link to="/">
            <SidebarItem src={Logo} />
            </Link>     
            </div>
                  
            <div className=" flex justify-between items-center ml-3">
          
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50"
          >
            {expanded ? <RxCross2 size={20}/> : <RxHamburgerMenu size={20} />}
          </button>
        </div>
        <Link to="/">
        <SidebarItem src={Store} text="Store"/>
        </Link> 
             <Link to="/cart">
             <SidebarItem src={Bag} text="Bag" />
             </Link>        
            
            {/* Logout item positioned at the bottom */}
            <div className=" mt-[500px] ml-[3px]">
              <SidebarItem src={Logout} text="Logout" />
            </div>
            
          </ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

export function SidebarItem({ src, icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`relative flex items-center py-4 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group
        ${
          active
            
        }`}
    >

      {/* Render image */}
      {src && (
        <img
          src={src}
          alt={text}
          className="w-8 h-auto object-contain"
        />
      )}

      {/* Render icon if provided */}
      {icon && <span className="text-xl">{icon}</span>}

      <span
        className={`overflow-hidden transition-all ${expanded ? 'w-20 ml-3' : 'w-0'}`}
      >
        {text}
      </span>

      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? '' : 'top-2'
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 ml-6 bg-indigo-100 text-sm invisible opacity-20 -translate-x-3
            transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}