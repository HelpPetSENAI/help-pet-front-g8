import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ComingSoonPage from './pages/CommingSoonPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import GlobalStyle from './styles/GlobalStyle.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ComingSoonPage />,
    errorElement: <NotFoundPage />
  }
])

export default function App() {

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  )
}