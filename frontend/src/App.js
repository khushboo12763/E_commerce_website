import{BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Component/Home";
import Women from "./Component/Women";



function App(){
    return(<>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home/>}></Route>
      <Route path="/women" element={<Women/>}></Route>
    </Routes> 
    </BrowserRouter> 
    </>)
}
export default App;

