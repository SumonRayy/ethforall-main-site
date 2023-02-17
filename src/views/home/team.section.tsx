import React from 'react';
import LinearMandalaWhite from "../../assets/images/svgs/linear-mandala";

export default function TeamSection() {
  return (
    <>
    <h1>Team</h1>
        <div className="team-container">
          <div className="team-member">
            <div className="team-member-image">
              <img src="https://avatars.githubusercontent.com/u/38981107?v=4" />
            </div>
            <div className="team-member-name">Abhik</div>
            <div className="team-member-role">Project Lead</div>
            <LinearMandalaWhite />
          </div>
          <div className="team-member">
            <div className="team-member-image">
              <img src="https://avatars.githubusercontent.com/u/42205351?v=4" />
            </div>
            <div className="team-member-name">Amit</div>
            <div className="team-member-role">Blockchain Developer</div>
            <LinearMandalaWhite />
          </div>
          <div className="team-member">
            <div className="team-member-image">
              <img src="https://avatars.githubusercontent.com/u/74421964?v=4" />
            </div>
            <div className="team-member-name">Priyanshu</div>
            <div className="team-member-role">Blockchain Developer</div>
            <LinearMandalaWhite />
          </div>
          <div className="team-member">
            <div className="team-member-image">
              <img src="https://avatars.githubusercontent.com/u/96810668?v=4" />
            </div>
            <div className="team-member-name">Rahul</div>
            <div className="team-member-role">BackEnd Developer</div>
            <LinearMandalaWhite />
          </div>
          <div
            className="team-member"
            onClick={() => window.open("https://github.com/SumonRayy")}
          >
            <div className="team-member-image">
              <img src="https://avatars.githubusercontent.com/u/53209811?v=4" />
            </div>
            <div className="team-member-name">Sumon</div>
            <div
              className="team-member-role"
              style={{ textAlign: "center", bottom: "25%" }}
            >
              UI/UX + <br /> FrontEnd Developer
            </div>
            <LinearMandalaWhite />
          </div>
        </div>
    </>
  );
}
