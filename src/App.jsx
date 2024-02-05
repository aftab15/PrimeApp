import Nav from './Layout/Nav';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <>
      <Nav/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
