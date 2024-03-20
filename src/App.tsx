import { Routes, Route } from "react-router-dom"

import SidePanel from "./components/SidePanel"
import NotificationsBell from "./components/NotificationsBell"
import SettingsButton from "./components/SettingsButton"
import UserAvatar from "./components/UserAvatar"

import Activities from "./Pages/Activities"
import Calendar from "./Pages/Calendar"
import TimeLinePage from "./Pages/TimeLinePage"
import Graphs from "./Pages/Graphs"

function App() { 
  return (
    <div className="bg-gray-100 h-screen w-screen flex flex-row">
      <div className="bg-white w-1/5 h-full shadow">
        <header className="bg-blue-300 w-full h-20 flex items-center justify-center shadow-md text-2xl">
          Dashboard
        </header>
        <SidePanel/>        
      </div>
      <div className="w-full h-full flex flex-col overflow-x-auto">
        <div className="bg-blue-300 w-full h-20 shadow-md flex flex-row">
          <SettingsButton/>
          <NotificationsBell/>
          <UserAvatar/>          
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Activities/>}/>
            <Route path="/calendar" element={<Calendar/>}/>
            <Route path="/timeline" element={<TimeLinePage/>}/>
            <Route path="/graphs" element={<Graphs/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
