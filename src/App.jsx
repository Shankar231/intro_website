import './App.css';
import MainHome from './MainHome';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHome />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App