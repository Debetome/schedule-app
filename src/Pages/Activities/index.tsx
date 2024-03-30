import { useEffect } from "react"

import ActivityItem from "../../components/ActivityItem"
import activities from "../../data/dummy_data"

import "./style.css"

function Activities() {
    useEffect(() => {
        const container = document.getElementById("activities-container")
        if (container) {
            container.classList.add("shown")
        }
        console.log("it works!")
    }, [])

    return (
        <div className="bg-white w-11/12 h-5/6 flex flex-col items-center rounded-lg shadow-md general-opacity activities-container">
        <div className="bg-white w-full h-16 flex flex-row border-b-2 border-gray-400 rounded-t-lg">
            <input type="text" placeholder="Search activities" className="w-full h-full px-4 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"/>
            <button className="px-5 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center justify-center text-lg">
                <i className="fas fa-plus"></i>                
            </button>

        </div>
        <div className="w-full h-full flex flex-col rounded-b-lg overflow-x-auto">
        <table className="w-full divide-y divide-gray-200 general-opacity">
            <thead>
            <tr>
                <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Past</th>
                <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 overflow-y-auto overflow-x-auto">
            {activities.map(({ id, title, description, date, done }: any) => {
                return <ActivityItem key={id} title={title} description={description} date={date} done={done}/>
            })}                
            </tbody>
        </table>
        </div>
        </div>
    )
}

export default Activities