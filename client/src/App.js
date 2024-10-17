import {
  createBrowserRouter,
  RouterProvider,
  Router,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register"
import Single from "./pages/Single"
import Home from "./pages/Home"
import Write from "./pages/Write"
import Login from "./pages/Login"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const Layout = () => {
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children : [
      {
        path: "/",
        element: <Home/>
      },

      {
        path: "/register",
        element: <Register/>
      },
    
      {
        path: "/single",
        element: <Single/>
      },
      
      {
        path: "/write",
        element: <Write/>
      },
    
      {
      path: "/login",
      element: <Login/>
      },
    ]
  },

]);


function App() {
  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  );
}


export default App;
