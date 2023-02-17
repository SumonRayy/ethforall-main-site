import React from 'react';
import LinearMandalaWhite from "../../assets/images/svgs/linear-mandala";

export default function IdeaSection() {
  return (
    <>
    <h1>The Idea</h1>
        <div className="para-section">
          <LinearMandalaWhite />
          <p>
            The Project provides Zero Knowledge Based Identities to everyone and
            offers its representation on any EVM compatible chain. This allows
            for easy tokenization of the fact that a wallet address is not a
            bot. Essentially extending the Sybil Resistance to all EVM
            compatible chains and bringing in Accountability in the mix without
            jeopardizing privacy and anonymity.
            <br />
            <button>Learn More</button>
          </p>
        </div>
    </>
  );
}
