import { useNavigate } from "react-router-dom";
import { memo } from "react"

import "./style.css"

const dateFormat: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };

interface TimelineItemProps {
    id: string,
    name: string,
    created: Date,
    updated: Date
}

const TimelineItem = memo((props: TimelineItemProps) => {    
    const navigate = useNavigate()

    const creationDate = new Date(props.created).toLocaleDateString("en-US", dateFormat)
    const updateDate = new Date(props.updated).toLocaleDateString("en-US", dateFormat)

    return (
        <div className="grid-item max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-32 object-cover" src="https://via.placeholder.com/300" alt="Timeline Preview"/>
        
            <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">{props.name}</h2>
            <p className="text-sm text-gray-600 mt-1">Created: 
                <span className="font-medium"> {creationDate}</span>
            </p>
            <p className="text-sm text-gray-600">Last Updated: 
                <span className="font-medium"> {updateDate}</span>
            </p>
        
            <div className="mt-4 flex justify-between items-center">
                <button 
                    className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-md flex items-center hover:bg-blue-600"
                    onClick={() => navigate(`/app/timelines/${props.id}`)}
                >
                    <i className="fas fa-eye mr-2"></i> Open
                </button>
                <button className="px-4 py-2 ml-2 bg-red-500 text-white rounded-md flex items-center hover:bg-red-600">
                    <i className="fas fa-trash-alt mr-2"></i> Delete
                </button>
            </div>
            </div>
        </div>        
    )
})

export default TimelineItem