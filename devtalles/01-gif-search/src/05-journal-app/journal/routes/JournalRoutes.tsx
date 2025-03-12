import { Navigate, Route, Routes } from "react-router"
import { JournalPage } from "../pages/JournalPage"

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JournalPage />} />
      {/* Ruta que me saca de la ruta */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
