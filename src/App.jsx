import Header from "./components/Header";
import Footer from "./components/Footer";
// import Resume from "./components/Resume";
import { Outlet } from 'react-router-dom';


function App() {
  
    return (
        <>
          <Header />
          <main className="mx-3">
            <Outlet />
            {/* <Resume /> */}
          </main>
          <Footer />
        </>
      );
};


export default App;
