import { Navbar, Footer, Home, ForStudents, ForConsultants, ForUniversities } from "./components";
import { Route, Routes } from "react-router-dom";
import { routes } from "./constants";
function App() {
  return (
    <>
      <div className="App dark:bg-black w-full h-screen">
        <Navbar />
        <div className="pt-[96px]">
          <Routes >
          <Route path={routes.HOME} element={<Home />} />
          <Route path={routes.FORSTUDENTS} element={<ForStudents />} />
          <Route path={routes.FORCOMSULTANTS} element={<ForConsultants />} />
          <Route path={routes.FORUNIVERSITIES} element={<ForUniversities />} />
        </Routes>
        </div>
        
        <Footer />
      </div>
    </>
  );
}

export default App;
