import { Routes,Route } from "react-router-dom"
import { Header } from "./layouts/Header/Header"
import { EnglishLevel } from "./layouts/pages/EnglishLevel/EnglishLevel"
import { SocialSkills } from "./layouts/pages/SocialSkills/SocialSkills"
import { Main } from "./layouts/Main/Main"
import { Studies } from "./layouts/pages/Studies/Studies"
import { Footer } from "./layouts/Footer/Footer"


export const App = () => {
  return (
    <>
    <Header />      
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/EnglishLevel" element={<EnglishLevel />}/>
      <Route path="/SocialSkills" element={<SocialSkills />} />
      <Route path="/Studies" element={<Studies />}/>
      <Route />
    </Routes>
    <Footer />
    </>
  )
}



