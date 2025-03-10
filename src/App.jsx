import { Routes,Route } from "react-router-dom"
import { Header } from "./layouts/Header/Header"
import { EnglishLevel } from "./layouts/pages/EnglishLevel/EnglishLevel"
import { SocialSkills } from "./layouts/pages/SocialSkills/SocialSkills"
import { Main } from "./layouts/Main/Main"





export const App = () => {
  return (
    <>

    <Header />      
    <Routes>
      <Route path="/Main" element={<Main />} />
      <Route path="/EnglishLevel" element={<EnglishLevel />}/>
      <Route path="/SocialSkills" element={<SocialSkills />} />

      
    </Routes>
    </>
  )
}



