import { Routes, Route } from "react-router-dom"

import AppLayout from "./Layouts/AppLayout"
import TimelineLayout from "./Layouts/TimelineLayout"
import SignIn from "./Pages/AuthLayout/SignIn"
import RequireAuth from "./components/RequireAuth"

import CreateEdit from "./components/CreateEdit"

function App() {
  return (
    <div className="h-screen w-screen flex flex-col text-gray-500">      
      <Routes>        
        <Route path="/" element={<RequireAuth />}>          
          <Route path="/app/*" element={<AppLayout />} />          
        </Route>
        <Route path="/app/timelines/" element={<RequireAuth />} >
          <Route path=":timelineId/*" element={<TimelineLayout />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />        
      </Routes>
    </div>
  )
}

export default App
