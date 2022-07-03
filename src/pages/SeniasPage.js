import React from "react";
import Metronome from "../components/Metronome";
import Botones2 from "../components/Botones2";
import "../styles/components/pages/DirectorPage.css";
import "../styles/components/pages/SeniasPage.css";

const SeniasPage = (props) => {
  return (
    <div className="paginas">
      <Botones2  />
      <Metronome />
    </div>
  );
};

export default SeniasPage;
