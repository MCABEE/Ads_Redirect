import { BrowserRouter, Route, Routes } from "react-router-dom"
import MalayalamAd from "./pages/MalayalamAd/MalayalamAd"
import HindiAd from "./pages/HindiAd/HindiAd"
import TamilAd from "./pages/TamilAd/TamilAd"
import TeluguAd from "./pages/TeluguAd/TeluguAd"
import KannadaAd from "./pages/KannadaAd/KannadaAd"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/malayalam' element={<MalayalamAd />} />
          <Route path='/hindi' element={<HindiAd />} />
          <Route path='/tamil' element={<TamilAd />} />
          <Route path='/telugu' element={<TeluguAd />} />
          <Route path='/kannada' element={<KannadaAd />} />          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
