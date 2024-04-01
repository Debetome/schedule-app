import { Routes, Route } from "react-router-dom"

import ActivityLayout from "./Layouts/ActivityLayout"
import TimelineLayout from "./Layouts/TimelineLayout"
import SignIn from "./Pages/SignIn"
import RequireAuth from "./components/RequireAuth"

function App() {
  return (
    <div className="h-screen w-screen flex flex-col text-gray-500">      
      <Routes>        
        <Route path="/" element={<RequireAuth />}>
          <Route path="/app/*" element={<ActivityLayout />} />
        </Route>        
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/timelines" element={<TimelineLayout/>} />
      </Routes>      
    </div>
  )
}

export default App
