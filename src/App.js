import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage';
import Blogpage from './pages/Blogpage/Blogpage';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/blog" element={<Blogpage />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
