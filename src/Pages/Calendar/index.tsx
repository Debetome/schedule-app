import { useState, useEffect } from "react"

import { getMonthName, getMonthDays, getMonthWeekDays, generateDays } from "../../utils/calendar"
import Legend from "../../components/Legend"

import "./style.css"

function Calendar() {
    const [monthIndex, setMonthIndex] = useState<number | null>(null)
    const [yearIndex, setYearIndex] = useState<number | null>(null)

    const [monthName, setMonthName] = useState<string>("")
    const [monthDays, setMonthDays] = useState<number>(0)
    const [monthWeekDays, setMonthWeekDays] = useState<number[]>()    

    const legends = [
        { text: "Pending", color: "#fdbb2d" },
        { text: "Past", color: "green" },        
    ] 

    useEffect(() => {
        const currentDate = new Date()
        const cMonthIndex = (!monthIndex ? currentDate.getMonth() : monthIndex) as number
        const cYearIndex = (!yearIndex ? currentDate.getFullYear() : yearIndex) as number
        
        setMonthIndex(cMonthIndex)
        setYearIndex(cYearIndex)
        setMonthName(getMonthName(cMonthIndex))
        setMonthDays(getMonthDays(cMonthIndex, cYearIndex))
        setMonthWeekDays(getMonthWeekDays(cMonthIndex, cYearIndex))

    }, [monthIndex, yearIndex])           

    const nextMonth = () => {
        const cMonthIndex = monthIndex as number
        const cYearIndex = yearIndex as number

        if (cMonthIndex >= 12) {
            setYearIndex(cYearIndex + 1)
            setMonthIndex(1)            
            return
        }

        setMonthIndex(cMonthIndex + 1)
    }

    const previousMonth = () => {
        const cMonthIndex = monthIndex as number
        const cYearIndex = yearIndex as number        

        if (cMonthIndex == 1) {
            setYearIndex(cYearIndex - 1)
            setMonthIndex(12)
            return
        }
        
        console.log(monthIndex)
        setMonthIndex(cMonthIndex - 1)        
    }

    return (
        <div className="bg-white w-11/12 h-5/6 flex flex-col items-center rounded-lg shadow-md general-opacity calendar-container">            
            <div className="w-full h-full flex flex-col justify-evenly rounded-lg p-6 overflow-auto relative">
                <Legend legends={legends} top={25} left={30}/>
                <div className="flex flex-row items-center justify-center text-gray-700 mb-4">
                    <a onClick={previousMonth} className="text-3xl mr-20"><i className="fa-solid fa-arrow-left"></i></a>
                    <h2 className="w-56 flex items-center justify-center text-2xl font-semibold">{monthName} {yearIndex}</h2>
                    <a onClick={nextMonth} className="text-3xl ml-20"><i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="flex justify-between text-center mb-4 text-base text-gray-700">
                    <div className="w-1/7">Sunday</div>
                    <div className="w-1/7">Monday</div>
                    <div className="w-1/7">Tuesday</div>
                    <div className="w-1/7">Wednesday</div>
                    <div className="w-1/7">Thursday</div>
                    <div className="w-1/7">Friday</div>
                    <div className="w-1/7">Saturday</div>
                </div>
                <div className="grid grid-cols-7 gap-4 text-base text-gray-700">
                    {monthWeekDays ? generateDays(monthWeekDays[0], monthDays).map((day: string) => {
                        console.log(monthWeekDays)
                        return <div className="text-center py-2 hover:bg-gray-200 rounded-lg">{day}</div>;
                    }) : ""}
                </div>
            </div>
        </div>
    )
}

export default Calendar