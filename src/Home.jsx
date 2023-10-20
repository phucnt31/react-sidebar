import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button type="button" onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button type="button" className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
