import React from 'react';

export default function HowToSection() {
  return (
    <>
    <h1>How To?</h1>
        <p>
          Just with these easy steps you can get your own zkSBT (yeah, that's
          what we are calling it right now)
        </p>
        <div className="step-container">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h2>Connect</h2>
              <p>
                Connect your wallet to the website. We support Metamask, Wallet
                Connect and Portis.
              </p>
            </div>
          </div>
          <div className="step">
            <div
              className="step-content"
              style={{
                alignItems: "flex-end",
              }}
            >
              <h2>Verify</h2>
              <p>Verify your Government Issued ID and Liveness Detection</p>
            </div>
            <div className="step-number">2</div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h2>Collect</h2>
              <p>Collect your Proof of Personhood n' zkSBT</p>
            </div>
          </div>
        </div>
    </>
  );
}
