import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./Components/Navbar"
import ReadData from "./Components/ReadData"
import ShowingBackenddata from "./Components/ShowingBackenddata"
import Editdata from './Components/Editdata';


function App() {

  return (
    <>
      <Router>
        <div>
          <Routes>
            {/* <Navbar /> */}
            {/* <ShowingBackenddata /> */}
            <Route path='/' element={<ReadData />} />
            <Route path='/edit' element={<Editdata />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
