import AdoptNow from "./page/AdoptNow"
import AnimalHistory from "./page/AnimalHistory"
import Home from "./page/Home"
import Error from "./page/Error"


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