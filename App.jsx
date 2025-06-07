import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Class11Program from "./Class11Program";
import Class12Program from "./Class12Program";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* All pages that use the main Nav layout */}
        <Route path="/" element={<Nav />}>
          <Route path="neet/online-coaching-class-11" element={<Class11Program />} />
          <Route path ="neet/online-coaching-class-12" element ={<Class12Program/>}/>
          {/* Add other routes here if needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
