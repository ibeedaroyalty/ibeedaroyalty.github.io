import React from "react";
import BeatBoard from "./BeatBoard/BeatBoard";
import BeatMaker from "./BeatMaker/BeatMaker";


function Beats (props) {
    return (
        <div>
            Hello From Beats
            <BeatMaker/>
            <BeatBoard/>
        </div>
    );
}

export default Beats;