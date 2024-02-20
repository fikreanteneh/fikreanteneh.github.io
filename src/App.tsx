
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RootLayout from './layouts/RootLayout';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Projects from './pages/Projects';


const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path='home' element={<Home />} />
        <Route path='experience' element={<Experience />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<Contact />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Route>
    </>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={Router} />
      <ToastContainer autoClose={500} />
    </>
  )
}

export default App