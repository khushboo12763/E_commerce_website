import{BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Component/Home";
import Women from "./Component/Women";
import Shoes from "./Component/shoes";
import Skincare from "./Component/skincare";
import Beauty from "./Component/beauty";




function App(){
    return(<>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/women" element={<Women/>}></Route>
     <Route path="/shoes" element={<Shoes/>}></Route>
     <Route path="/skincare" element={<Skincare/>}></Route>
     <Route path="/Beauty" element={<Beauty/>}></Route>
    </Routes> 
    </BrowserRouter> 
    </>)
}
export default App;

