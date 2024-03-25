// TimeLine.jsx
import React, { useEffect } from 'react';
import "./style.css"

const TimeLine: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById("timeline")
    const parentContainer = container?.parentElement
    const parentHeight = parentContainer?.scrollHeight

    if (container && parentContainer && parentHeight) {
      container.style.height = `${parentHeight}px`;
      console.log(parentHeight)
    }
  }, [])

  return (
    <>
      <div id="timeline" className="timeline text-gray-700">
        <div className="container left-container">
            <div className="dot"></div>
            <div className="textbox">
                <h2>Complete React Project</h2>
                <small>2024-03-20</small>
                <p>Finish building the React project for the client</p>
                <span></span>
            </div>
        </div>
        <div className="container right-container">
            <div className="dot"></div>
            <div className="textbox">
                <h2>Grocery Shopping</h2>
                <small>2024-03-21</small>
                <p>Buy groceries for the week</p>
                <span></span>
            </div>
        </div>
        <div className="container left-container">
            <div className="dot"></div>
            <div className="textbox">
                <h2>Exercise</h2>
                <small>2024-03-22</small>
                <p>Go for a run in the park</p>
                <span></span>
            </div>
        </div>
        <div className="container right-container">
            <div className="dot"></div>
            <div className="textbox">
                <h2>Pet the cat</h2>
                <small>2024-03-22</small>
                <p>Just to stroke the cat's head</p>
                <span></span>
            </div>
        </div>
        <div className="container left-container">
            <div className="dot"></div>
            <div className="textbox">
                <h2>Exercise</h2>
                <small>2024-03-22</small>
                <p>Go for a run in the park</p>
                <span></span>
            </div>
        </div>
        <div className="container right-container">
            <div className="dot"></div>
            <div className="textbox">
                <h2>Pet the cat</h2>
                <small>2024-03-22</small>
                <p>Just to stroke the cat's head</p>
                <span></span>
            </div>
        </div>
        <div className="container left-container">
            <div className="dot"></div>
            <div className="textbox">
                <h2>Exercise</h2>
                <small>2024-03-22</small>
                <p>Go for a run in the park</p>
                <span></span>
            </div>
        </div>
        <div className="container right-container">
            <div className="dot"></div>
            <div className="textbox">
                <h2>Pet the cat</h2>
                <small>2024-03-22</small>
                <p>Just to stroke the cat's head</p>
                <span></span>
            </div>
        </div>
        <div className="container left-container">
            <div className="dot"></div>
            <div className="textbox">
                <h2>Exercise</h2>
                <small>2024-03-22</small>
                <p>Go for a run in the park</p>
                <span></span>
            </div>
        </div>
        <div className="container right-container">
            <div className="dot"></div>
            <div className="textbox">
                <h2>Pet the cat</h2>
                <small>2024-03-22</small>
                <p>Just to stroke the cat's head</p>
                <span></span>
            </div>
        </div>
        <div className="container left-container">
            <div className="dot"></div>
            <div className="textbox">
                <h2>Exercise</h2>
                <small>2024-03-22</small>
                <p>Go for a run in the park</p>
                <span></span>
            </div>
        </div>
        <div className="container right-container">
            <div className="dot"></div>
            <div className="textbox">
                <h2>Pet the cat</h2>
                <small>2024-03-22</small>
                <p>Just to stroke the cat's head</p>
                <span></span>
            </div>
        </div>
      </div> 
    </>
  );
};

export default TimeLine;
