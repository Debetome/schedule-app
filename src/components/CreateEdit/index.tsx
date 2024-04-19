import { useState, useRef } from "react"
import { UseMutationResult } from "@tanstack/react-query"
import DatePicker from "react-datepicker"

import "./style.css"

interface CreateEditProps {
    mutation: UseMutationResult<any, Error, any, unknown>
    setActive: (state: boolean | ((prevState: boolean) => boolean)) => void
    active: boolean
    activityId?: string
}

const CreateEdit = ({ active, setActive, mutation, activityId }: CreateEditProps) => {
    const titleRef = useRef<HTMLInputElement>(null)
    const descriptionRef = useRef<HTMLTextAreaElement>(null)
    const [deadline, setDeadline] = useState<Date | null>(new Date());

    const handleSubmitActivity = (e: any) => {
        e.preventDefault()

        const body = {
            title: titleRef.current?.value,
            description: descriptionRef.current?.value,
            deadline: deadline
        }

        if (!activityId && activityId === null)
            mutation.mutate(body)
        else 
            mutation.mutate({ activityId, body })

        resetAndExit()
    }

    const resetAndExit = () => {
        titleRef.current!.value = ""
        descriptionRef.current!.value = ""
        
        setDeadline(new Date())
        setActive(false)
    }

    return (
        <>        
        <div className={`form-container ${active ? "active" : ""} bg-white border rounded-lg shadow-md p-14`}>
            <h2 className="text-2xl font-bold mb-8">Create New Activity</h2>    
            <form 
                className="w-full h-full"
                onSubmit={handleSubmitActivity}
            >
                <input 
                    type="text" 
                    className="w-full border rounded-md px-4 py-2 mb-6" 
                    placeholder="Title"
                    ref={titleRef} 
                />
                <textarea 
                    className="w-full h-40 border rounded-md px-4 py-2 mb-6" 
                    placeholder="Description (optional)"
                    ref={descriptionRef}>
                </textarea>
                <DatePicker 
                    className="w-full border rounded-md px-4 py-2 mb-6" 
                    selected={deadline}
                    onChange={(date) => setDeadline(date!)} 
                />
                <div className="flex justify-end mb-6">
                    <button 
                        className="w-32 h-12 bg-green-500 text-white px-4 py-2 rounded-md mr-4"
                        type="submit"
                    >
                        <i className="fas fa-save mr-2"></i>
                        Save
                    </button>
                    <button 
                        className="w-32 h-12 bg-red-500 text-white px-4 py-2 rounded-md"
                        onClick={() => resetAndExit()}
                    >
                        <i className="fas fa-times mr-2"></i>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
        </>
    )
}

export default CreateEdit