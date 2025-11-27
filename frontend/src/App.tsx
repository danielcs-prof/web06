import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes/AppRoutes"
import { Nav } from "./components/Nav"


function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="container">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
