import React from "react";
import agent from "../../agent";
import logo from "../../imgs/logo.png";

const Banner = (props) => {
  const handleChange = (ev) => {
    ev.preventDefault();
    if (!ev.target.value || ev.target.value.length <3)
      props.onTabClick("feed", agent.Items.feed, agent.Items.feed());
    else
      props.onTabClick("feed", agent.Items.feed, agent.Items.feed(ev.target.value));
      //props.onTabClick("all", agent.Items.all, agent.Items.all(null, ev.target.value));
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
          <input
            id="search-box"
            type="text"
            //value={props.Banner.value}
            onChange={handleChange}
            hint="What is it that you truly desire?"
          />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
