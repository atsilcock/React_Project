import AdoptNow from "./pages/AdoptNow"
import AnimalHistory from "./pages/AnimalHistory"
import Home from "./pages/Home"
import Error from "./pages/Error"


const routes = [
  {
    path:"/",
    element:<Home />,
    errorElement: <Error />
  },
  {
    path:"/adoptnow",
    element:<AdoptNow />, 
    errorElement: <Error />
  }, 
  {
    path:"/animalhistory", 
    element:<AnimalHistory />,
    errorElement: <Error />
  }, 

];

export default routes;