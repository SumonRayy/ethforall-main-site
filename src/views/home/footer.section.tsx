import React from 'react';
import { TbCircles } from "react-icons/tb";
import { FaEthereum, FaGithub, FaDiscord } from "react-icons/fa";

export default function FooterSection() {
  return (
    <>
    <h1>Contact</h1>
        <div className="contact-container">
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message" />
            <button>Send</button>
          </form>
          <TbCircles size={100} />
          <div className="footer">
            <div className="contact-info">
              <div className="contact-info-item">
                <FaGithub size={45} />
              </div>
              <div className="contact-info-item">
                <FaGithub size={45} />
              </div>
              <div className="contact-info-item">
                <FaGithub size={45} />
              </div>
              <div className="contact-info-item">
                <FaGithub size={45} />
              </div>
              <div className="contact-info-item">
                <FaGithub size={45} />
              </div>
              <div className="contact-info-item">
                <FaGithub size={45} />
              </div>
              <div className="contact-info-item">
                <FaGithub size={45} />
              </div>
              <div className="contact-info-item">
                <FaGithub size={45} />
              </div>
              <div className="contact-info-item">
                <FaGithub size={45} />
              </div>
              <div className="contact-info-item">
                <FaGithub size={45} />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              arcu elit, tempor et feugiat ut, ullamcorper in nulla. Mauris ut
              lectus gravida, consequat ex a, pretium mauris. Proin id aliquet
              metus. Aliquam gravida est ut purus rutrum, sed pretium lorem
              placerat. Nunc eu tortor nec neque efficitur pellentesque ac ut
              erat. Duis non sodales dolor. Phasellus vitae enim blandit,
              placerat orci at, posuere metus. Morbi ac auctor felis, nec
              lobortis eros. Duis sagittis sollicitudin arcu ac pulvinar.
              Maecenas interdum euismod lorem, at euismod neque mattis
              fermentum.
              <br />
              Made with ❤️ by GG Team
            </p>
          </div>
        </div>
    </>
  );
}
