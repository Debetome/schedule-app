import { Routes, Route } from "react-router-dom"

import AppLayout from "./Layouts/AppLayout"
import TimelineLayout from "./Layouts/TimelineLayout"
import SignIn from "./Pages/TimelineLayout/SignIn"
import RequireAuth from "./components/RequireAuth"

function App() {
  return (
    <div className="h-screen w-screen flex flex-col text-gray-500">      
      <Routes>        
        <Route path="/" element={<RequireAuth />}>
          <Route path="/app/*" element={<TimelineLayout />} />
        </Route>        
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/timelines" element={<AppLayout/>} />
      </Routes>      
    </div>
  )
}

export default App
