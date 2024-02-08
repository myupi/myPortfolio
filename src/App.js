import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { MainPage } from "./pages/MainPage";
import { Footer } from "./components/Footer";
import { SkillsPage } from "./pages/SkillsPage";
import { ContactsPage } from "./pages/ContactsPage";
import Aos from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
