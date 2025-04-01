import { Outlet } from "react-router-dom";
import Header from "./(app)/Header/page";
import Footer from "./(app)/Footer/page";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
