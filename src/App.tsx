import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import JsLang from './pages/JsLang'

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />}/>
          <Route path='/java-script' element={<JsLang />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
