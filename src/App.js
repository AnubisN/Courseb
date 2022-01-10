import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage';
import Blogpage from './pages/Blogpage/Blogpage';
import BlogSinglePage from './pages/Blogsinglepage';
import CourseSinglePage from './pages/Coursesinglepage';
import Coursepage from './pages/Coursepage/Coursepage';
import Gallerpage from './pages/Gallerypage/Gallerpage';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/blogs" element={<Blogpage />} />
      <Route path="/blogs/:id" element={<BlogSinglePage />} />
      <Route path="/coursesingle" element={<CourseSinglePage />}/>
      <Route path="/courses" element={<Coursepage />} />
      <Route path="/gallery" element={<Gallerpage />}/>
    </Routes>
    {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
