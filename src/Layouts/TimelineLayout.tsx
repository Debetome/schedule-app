import NotificationsBell from "../components/NotificationsBell";
import SettingsButton from "../components/SettingsButton";
import UserAvatar from "../components/UserAvatar";

function TimelineLayout() {  
  return (
    <div className="h-full w-full flex flex-col">
      <div className="bg-white w-full h-14 shadow-md flex flex-row">              
        <SettingsButton/>
        <NotificationsBell/>
        <UserAvatar/>
      </div>
      <div className="h-full w-full flex flex-row">                                
        <div className="w-full h-full flex flex-col">        
          <div className="w-full h-full flex items-center justify-center overflow-y-auto">
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimelineLayout
