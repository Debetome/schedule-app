import NotificationsBell from "../components/NotificationsBell";
import SettingsButton from "../components/SettingsButton";
import UserAvatar from "../components/UserAvatar";

import Timelines from "../Pages/AppLayout/Timelines";

function AppLayout() {  
  return (
    <div className="h-full w-full flex flex-col">
      <div className="bg-white w-full h-14 shadow-md flex flex-row">              
        <SettingsButton/>
        <NotificationsBell/>
        <UserAvatar/>
      </div>
      <div className="h-full w-full flex flex-col">
        <Timelines/>
      </div>
    </div>
  )
}

export default AppLayout
