import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SharedLayout from './Sharelayout';
import Home from './components/home';
import About from './components/about';
import "./App.css"


function App() {
  const myBG = {
    background: '#171717',
  };
  return (
    <div style={myBG}>
   <BrowserRouter>
   <div className='Intro'>
   <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='About' element={<About />} />
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;