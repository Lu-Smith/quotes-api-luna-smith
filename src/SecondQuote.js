import React from "react";
import "./SecondQuote.css";

export default function SecondQuote(props) {
  if (
    props.secondQuote !==
    "In three words I can sum up everything I've learned about life - It goes on. - Robert Frost"
  ) {
    return (
      <div className="SecondQuote">
        {props.secondQuote.content} -{props.secondQuote.originator.name}
      </div>
    );
  } else {
    return (
      <div className="SecondQuote">
        In three words I can sum up everything I've learned about life - It goes
        on. - Robert Frost
      </div>
    );
  }
}
