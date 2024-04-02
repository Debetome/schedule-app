import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import SidePanel from "../components/SidePanel";
import NotificationsBell from "../components/NotificationsBell";
import SettingsButton from "../components/SettingsButton";
import UserAvatar from "../components/UserAvatar";

import Activities from "../Pages/TimelineLayout/Activities";
import Calendar from "../Pages/TimelineLayout/Calendar";
import TimeLinePage from "../Pages/TimelineLayout/TimeLinePage";

function TimelineLayout() {
  const [sidepanel, setSidepanel] = useState(true)  

  const hideShowSideBar = () => {
    setSidepanel(!sidepanel)
  }  

  return (
    <div className="h-full w-full flex flex-col">
      <div className="bg-white w-full h-14 shadow-md flex flex-row">
        <a onClick={hideShowSideBar} className="w-14 h-14 mr-auto flex items-center justify-center text-2xl cursor-pointer">
          <i className="fa-solid fa-bars"></i>
        </a>        
        <SettingsButton/>
        <NotificationsBell/>
        <UserAvatar/>
      </div>
      <div className="h-full w-full flex flex-row">        
        <SidePanel visible={sidepanel}/>                
        <div className="w-full h-full flex flex-col">        
          <div className="w-full h-full flex items-center justify-center overflow-y-auto">
            <Routes>              
              <Route index element={<Activities />} />
              <Route path="activities" element={<Activities />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="timeline" element={<TimeLinePage />} />              
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimelineLayout
