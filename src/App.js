import{BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import Home from "./Component/Home";
import Women from "./Component/Women";
import Shoes from "./Component/shoes";
import Skincare from "./Component/makeup";
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
     <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    </Routes> 
    </BrowserRouter> 
    </>)
}
export default App;

