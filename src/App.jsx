import { Navbar } from "./components/Navbar/Navbar";
import FullBody from "./components/FullBody/FullBody";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import FooterSection from "./components/FooterSection/FooterSection";

function App() {

  return (
    <>
      <Navbar />
      <Breadcrumb />
      <FullBody />
      <FooterSection />
    </>
  )
}

export default App
