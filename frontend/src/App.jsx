import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home'
import { UploadPage } from './pages/UploadPage'

function App() {

  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
