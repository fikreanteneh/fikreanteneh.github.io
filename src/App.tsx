
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from './ThemeProvider';
import Home from './layouts/Home';


const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}>
        {/* <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
        <Route path="education" element={<Eduction />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} /> */}

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </>
  )
)

function App() {
  return (
    <ThemeProvider >
      <RouterProvider router={Router} />
    </ThemeProvider>
  )
}

export default App
