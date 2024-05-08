import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1> TechyStar </h1>
          <p> Solution to all your problems </p>
        </main>
      </div>
      <div className="home2" id="">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1> Who we are </h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem tenetur nesciunt quaerat, autem veniam dicta
            laudantium reprehenderit, aperiam a tempora unde aut incidunt ex,
            voluptates at cum minus! Quis neque vero reiciendis optio facere
            laborum perferendis quas odio nostrum facilis, rem nisi ea dolorem
            expedita quo ducimus placeat. Sint, quasi facere facilis unde natus
            praesentium sunt odit. Facere reprehenderit, labore aperiam ab
            doloribus cum eum aliquam fugit nihil illo necessitatibus non
            veniam, laudantium vel itaque qui eligendi laborum modi asperiores.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              Google
            </div>

            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillAmazonCircle />
              Amazon
            </div>

            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillYoutube />
              Youtube
            </div>

            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillInstagram />
              Instagram
            </div>

          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
