import React from "react";
import { MarqueeStyles } from "./styles";

const Marquee = ({message}) => {
  return (
    <MarqueeStyles.Container>
      <MarqueeStyles.Message>{message}</MarqueeStyles.Message>
    </MarqueeStyles.Container>
  );
};

export default Marquee;
