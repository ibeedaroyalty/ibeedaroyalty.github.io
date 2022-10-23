import React from "react";
import { BioStyles } from "./styles";

const Bio = ({ bio }) => {
  return (
    <BioStyles.Container>
      {bio.map((line) => (
        <p>{line}</p>
      ))}
    </BioStyles.Container>
  );
};

export default Bio;
