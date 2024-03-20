import { Link } from "react-router-dom"

interface SidePanelLinkProps {
    text: string
    to: string
    icon?: string 
    extraClasses?: string
}

function SidePanelLink({ text, to, icon, extraClasses }: SidePanelLinkProps) {
  return (
    <Link 
      className={
         `w-full h-24 flex items-center justify-center text-xl overflow-hidden hover:bg-gray-200 ${extraClasses ? extraClasses : ""}`
      } 
      to={to}>
      {icon ? <i className={`${icon} mr-6`}></i> : ""}
      <header className="w-1/2">{text}</header>
    </Link>
  )
}

export default SidePanelLink