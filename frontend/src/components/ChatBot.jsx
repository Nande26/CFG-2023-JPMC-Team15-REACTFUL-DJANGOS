import React, { Component } from "react";
import "tailwindcss/tailwind.css";

class StickyChatbotButton extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://s3.ap-south-1.amazonaws.com/conferbot.defaults/dist/v1/widget.min.js";
    script.id = "conferbot-js";
    script.charset = "UTF-8";
    script.onload = () => {
      window.ConferbotWidget("64b2b831bb646eabb1aeb0c6", "live_chat");
    };
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  render() {
    return null; // Since this component doesn't have any visual representation
  }
}

export default StickyChatbotButton;
