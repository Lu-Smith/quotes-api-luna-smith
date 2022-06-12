import React from "react";

export default function InputQuote(props) {
  console.log(props.quote);
  return <div className="InputQuote">{props.quote}</div>;
}
