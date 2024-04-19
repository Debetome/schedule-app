import SidePanelLink from "../SidePanelLink"
import './style.css'

interface SidePanelProps {
  visible: boolean,
  timelineId: string
}

function SidePanel({ visible, timelineId }: SidePanelProps) {
    return (
      <>
      <div className={`general-opacity h-full shadow sidebar ${!visible ? 'sidebar-hidden' : ''}`}>
        <ul className="w-full h-auto flex flex-col items-center">
          <SidePanelLink text="Activities" icon="fa-solid fa-list-ol" to={`/app/timelines/${timelineId}/activities`}/>
          <SidePanelLink text="Calendar" icon="fa-regular fa-calendar" to={`/app/timelines/${timelineId}/calendar`}/>
          <SidePanelLink text="Timeline" icon="fa-solid fa-timeline" to={`/app/timelines/${timelineId}/timeline`}/>          
        </ul>        
      </div>
      </>
    )
}

export default SidePanel