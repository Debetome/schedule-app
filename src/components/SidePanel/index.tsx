import SidePanelLink from "../SidePanelLink"
import './style.css'

interface SidePanelProps {
  visible: boolean
}

function SidePanel({ visible }: SidePanelProps) {
    return (
      <>
      <div className={`general-opacity h-full shadow sidebar ${!visible ? 'sidebar-hidden' : ''}`}>
        <ul className="w-full h-auto flex flex-col items-center">
          <SidePanelLink text="Activities" icon="fa-solid fa-list-ol" to="/app/activities"/>
          <SidePanelLink text="Calendar" icon="fa-regular fa-calendar" to="/app/calendar"/>
          <SidePanelLink text="Timeline" icon="fa-solid fa-timeline" to="/app/timeline"/>          
        </ul>        
      </div>
      </>
    )
}

export default SidePanel