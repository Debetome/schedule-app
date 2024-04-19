import "./style.css"

interface BlurryBackgroundProps {
    active: boolean    
}

const BlurryBackground = ({ active }: BlurryBackgroundProps) => {  
    return (
        <div className={`blurry-background ${active ? "active" : ""} w-screen h-screen`}>            
        </div>
    )
}

export default BlurryBackground