// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {Footer, NavBar} from "@myorg/ui"
// import HomePage from "../app/page.jsx";
// import config from "../service/config.js";
// import About from "../app/about/page.jsx"

// export default function App() {
//   console.log(config.baseUrl);
  
//   return (
//     <BrowserRouter>
//     <NavBar baseURL={config.baseUrl}/>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<About/>} />
       
//       </Routes>
//       <Footer/>
//     </BrowserRouter>
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, NavBar } from "@myorg/ui";
import config from "../service/config.js";

import { autoRoutes } from "./router/autoRoutes.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar baseURL={config.baseUrl} />

      <Routes>
        {autoRoutes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
