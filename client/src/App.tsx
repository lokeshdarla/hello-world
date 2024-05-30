import AuthenticationPage from "@/pages/AuthPage"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import DesktopNav from "./components/DesktopNav"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DesktopNav />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/auth" element={<AuthenticationPage />} />
      </Routes>
    </>
  )
}
