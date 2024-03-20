import SidePanelLink from "./SidePanelLink"

function SidePanel() {
    return ( 
      <>
        <ul className="w-full h-auto flex flex-col items-center">
          <SidePanelLink text="Activities" icon="fa-solid fa-list-ol" to="/"/>
          <SidePanelLink text="Calendar" icon="fa-regular fa-calendar" to="/calendar"/>
          <SidePanelLink text="Timeline" icon="fa-solid fa-timeline" to="/timeline"/>          
          <SidePanelLink text="Graphs" icon="fa-solid fa-chart-simple" to="/graphs"/>
        </ul>        
      </>     
    )
}

export default SidePanel