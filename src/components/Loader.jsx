import React from "react";

import  loader  from "../assets/loader.svg";

const Loader = ({ title }) => (
  <div>
    <img src={loader} alt="loader" />
    <h1>{title || "Loading"}</h1>
  </div>
);

export default Loader;
