import React from "react";
import vg from "../Assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"


const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main> 
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            everyday. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ea
            quam, eaque expedita, placeat odit quasi laboriosam neque error
            praesentium eos, explicabo voluptates dolorem dicta libero tenetur
            autem temporibus nisi soluta commodi ipsa ut sapiente totam. Soluta
            numquam quidem tempora repellat commodi natus ipsum magnam nulla
            dolore, ab facere quibusdam adipisci aspernatur consequuntur ducimus
            consequatur nisi asperiores modi eaque. Blanditiis ullam modi
            libero, culpa dolor quos. Animi magni quibusdam itaque aspernatur
            velit maxime voluptates nisi perspiciatis voluptas ratione fuga
            provident nostrum, quos dolor eius modi consequatur optio in odit
            vel totam impedit consectetur! Repellat laboriosam doloremque itaque
            aperiam nemo eligendi!
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{
                    animationDelay: "0.3s"
                }}>
                <AiFillGoogleCircle/><p>Goggle</p>
                </div>


                <div style={{
                    animationDelay: "0.5s"
                }}>
                <AiFillAmazonCircle/><p>Amazon</p>
                </div>

                <div style={{
                    animationDelay: "0.7s"
                }}>
                <AiFillYoutube/><p>Youtube</p>
                </div>

                <div style={{
                    animationDelay: "1s"
                }}>
                <AiFillInstagram/><p>Instagram</p>
                </div>

            </article>
        </div>
      </div>
    </>
  );
};

export default Home;
