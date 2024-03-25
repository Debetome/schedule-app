import React from "react"

interface ActivityItemProps {
    title: string
    description: string
    date: Date
    done: boolean
}

const ActivityItem: React.FC<ActivityItemProps> = (props: ActivityItemProps) => {
  return (
    <tr className="border-gray-250 border-b-2 text-base text-gray-700">
        <td className="px-6 py-4 whitespace-nowrap">{props.title}</td>
        <td className="px-6 py-4 whitespace-nowrap">{props.description}</td>
        <td className="px-6 py-4 whitespace-nowrap">{props.date.toString()}</td>
        <td className="px-6 py-4 whitespace-nowrap">{props.done ? "Yes" : "No"}</td>
        <td className="px-6 py-4 whitespace-nowrap">
        <a className="mr-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">
            <i className="fas fa-edit"></i>
        </a>
        <a className="mr-1 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            <i className="fas fa-info"></i>
        </a>
        <a className="-mr-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded">
            <i className="fas fa-trash-alt"></i>
        </a>
        </td>
    </tr>
  )
}

export default ActivityItem