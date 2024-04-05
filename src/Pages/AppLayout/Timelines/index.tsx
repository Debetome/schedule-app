import TimelineItem from "../../../components/TimelineItem"
import useTimelines from "../../../hooks/useTimelines"

import "./style.css"

function Timelines() {
    const [timelines, setTimelines] = useTimelines()    

    console.log(timelines?.data?.timelines)

    return (
    <div className="timeline-container">
        <div className="grid-container overflow-y-auto mb-20">            
            {timelines?.data?.timelines.map((item: any) => {
                return <TimelineItem key={item.id} name={item.name} created={item.created} updated={item.updated}/>
            })}            
        </div>
    </div>
    )
}

export default Timelines