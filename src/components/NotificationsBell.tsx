import React, { useState, useRef, useEffect, RefObject } from "react"
import PopMenu from "./PopMenu"

const NotificationsBell: React.FC = () => {
    const [popMenuOpen, setPopmenuOpen] = useState<boolean>(false)
    const [top, setTop] = useState<number | null>()
    const [left, setLeft] = useState<number | null>()

    const boundsRef = useRef<HTMLDivElement | null>(null)    

    useEffect(() => {
        const { top: elementTop, left: elementLeft } = boundsRef.current!.getBoundingClientRect()
        const scrollTop = window.scrollY || window.pageYOffset
        const scrollLeft = window.scrollX || window.pageXOffset

        const finalTop = (scrollTop + elementTop) + 60
        const finalLeft = (scrollLeft + elementLeft) - 120

        setTop(finalTop)
        setLeft(finalLeft)
    }, [popMenuOpen])

    const handleClick = () => {      
        setPopmenuOpen(!popMenuOpen)
    };

    return (
      <>
      <div className="w-20 h-20 flex items-center justify-center ml-1">
        <a            
            className="text-3xl rounded-btn cursor-pointer"            
            onClick={handleClick}
            ref={boundsRef as RefObject<HTMLAnchorElement>}>
            <i className="fa-solid fa-bell"></i>
        </a>        
      </div>
      <PopMenu 
        items={["Test1", "Test2", "Test3"]}             
        x={left as number}
        y={top as number}
        isOpen={popMenuOpen}
        setIsOpen={handleClick}
      />
      </>
    )
}

export default NotificationsBell