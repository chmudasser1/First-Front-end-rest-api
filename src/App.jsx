import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ReadData from "./Components/ReadData"
import Editdata from './Components/Editdata';
import CreateData from './Components/CreateData';


function App() {

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<ReadData />} />
            <Route path='/add' element={<CreateData/>} />
            <Route path='/edit/:id' element={<Editdata />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
