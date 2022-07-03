import React from "react";
import Metronome from "../components/Metronome";
import Botones from "../components/Botones";
import "../styles/components/pages/DirectorPage.css";

const DirectorPage = (props) => {
  return (
    <div className="paginas">
      <Botones />
      <Metronome />
    </div>
  );
};

export default DirectorPage;
