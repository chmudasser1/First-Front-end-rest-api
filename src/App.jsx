import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ReadData from "./Components/ReadData"
import Editdata from './Components/Editdata';


function App() {

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<ReadData />} />
            <Route path='/edit/:id' element={<Editdata />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
