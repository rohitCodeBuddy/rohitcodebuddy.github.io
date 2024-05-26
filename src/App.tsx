import { useCallback, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Content from "./components/Content";

const USER = {
  username: "eldrago",
  firstName: "rohit",
  lastName: "singh",
};

const MENU_OPTIONS = ["about", "projects", "contact", "profile", "others"];
function App() {
  const [selected, setSelected] = useState("");
  const onMenuClick = useCallback((option: string) => {
    setSelected((p) => (p === option ? "" : option));
  }, []);

  return (
    <>
      <Header {...USER} />

      <Sidebar
        className="z-10"
        options={MENU_OPTIONS}
        onClick={onMenuClick}
        selected={selected}
      />

      <Profile />
      <Content show={!!selected} />
      <Footer />
    </>
  );
}

export default App;
