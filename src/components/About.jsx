import React, { useContext } from "react";
import userContext from "../utils/UserContext";

function About() {
  const { loggedInUser } = useContext(userContext);
  return (
    <div>
      <h1>About : {loggedInUser}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
        corrupti, numquam saepe ullam magni eaque quibusdam minima obcaecati
        mollitia ratione nisi harum culpa maxime itaque dolore impedit enim. Ad,
        voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Doloribus omnis veritatis, ullam saepe esse nam corrupti suscipit
        distinctio, fugit odit fuga sit delectus reiciendis! Deserunt
        perspiciatis provident mollitia sint ducimus vitae modi excepturi, quasi
        aut reprehenderit eius eum tempore cum! Ducimus omnis, ea cupiditate
        expedita fugit praesentium magnam unde nostrum.
      </p>
    </div>
  );
}

export default About;
