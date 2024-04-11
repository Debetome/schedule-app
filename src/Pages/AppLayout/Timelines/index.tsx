import { useState, useEffect } from "react"

import TimelineItem from "../../../components/TimelineItem"

import useTimelines from "../../../hooks/useTimelines"
import useWindowSize from "../../../hooks/useWindowSize"

import "./style.css"

function Timelines() {
    const [timelines, _setTimelines] = useTimelines()
    const windowSize = useWindowSize()

    const [columns, setColumns] = useState(0)

    useEffect(() => {
        const gridColumns = Math.floor(windowSize[0] / 300)        
        setColumns(gridColumns)
    }, [windowSize])    

    return (
        <div className="grid-container overflow-y-auto mb-20" style={{ gridTemplateColumns: `repeat(${columns}, minmax(250px, 1fr))` }}>
            {timelines?.map((item: any) => {
                return (                    
                    <TimelineItem 
                        key={item.id} 
                        name={item.name} 
                        created={new Date(item.createdAt)} 
                        updated={new Date(item.updatedAt)}
                    />                    
                )
            })}
        </div>
    )
}

export default Timelines