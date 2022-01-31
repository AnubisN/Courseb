import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage';
import Blogpage from './pages/Blogpage/Blogpage';
import BlogSinglePage from './pages/Blogsinglepage';
import CourseSinglePage from './pages/Coursesinglepage';
import Coursepage from './pages/Coursepage/Coursepage';
import Gallerypage from './pages/Gallerypage/Gallerypage';
import SignupPage from './pages/SignupPage/signupPage';
import LoginPage from './pages/LoginPage/loginPage';
import ProfilePage from './pages/Profilepage/profilepage';
import ProfilePagePassword from './pages/Profilepage/profilepagepassword';
import ContactUsPage from './pages/ContactusPage/contactPage';
import AboutUs from './pages/AboutusPage/aboutusPage';
import EnrolledCourses from './pages/EnrolledCoursesPage/enrolledcourses';
import CheckoutPage from './pages/Checkoutpage/checkout';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/blogs" element={<Blogpage />} />
      <Route path="/blogs/:id" element={<BlogSinglePage />} />
      <Route path="/courses/:id" element={<CourseSinglePage />}/>
      <Route path="/courses" element={<Coursepage />} />
      <Route path="/gallery" element={<Gallerypage />}/>
      <Route path="/register" element={<SignupPage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/accountSettings" element={<ProfilePage />}/>
      <Route path="/changePassword" element={<ProfilePagePassword />}/>
      <Route path="/contactus" element={<ContactUsPage />}/>
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/enrolledCourses" element={<EnrolledCourses />}/>
      <Route path="/checkout" element={<CheckoutPage />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
