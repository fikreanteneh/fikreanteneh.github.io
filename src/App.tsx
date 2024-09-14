
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from './ThemeProvider';
import Home from './layouts/Home';


const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </>
  )
)

function App() {
  return (
    <ThemeProvider >
      <RouterProvider router={Router} />
      <ToastContainer autoClose={500} />
    </ThemeProvider>
  )
}

export default App
