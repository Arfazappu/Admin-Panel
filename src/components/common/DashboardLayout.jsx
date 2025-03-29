import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import wave from "../../assets/wave.png"

function DashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true)

    return (
      <div className="flex min-h-screen bg-[#EAEAEB] relative">
        <div className='absolute'>
          <img src={wave} alt="wave" />
        </div>
  
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
  
        <div className="flex-1 flex flex-col min-w-0">
          <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <main className="flex-1 p-4 z-10">
            <Outlet/>
          </main>
        </div>
      </div>
    )
}

export default DashboardLayout