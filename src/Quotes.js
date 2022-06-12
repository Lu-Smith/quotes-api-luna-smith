import "./Quotes.css";
import axios from "axios";
import React, { useState } from "react";
import InputQuote from "./InputQuote";
import SecondQuote from "./SecondQuote";

export default function Quotes() {
  const [randomQuote, setRandomeQuote] = useState(
    "Don't ruin the present with the ruined past. - Ellen Gilchrist"
  );
  const [secondQuote, setSecondQuote] = useState(
    "In three words I can sum up everything I've learned about life - It goes on. - Robert Frost"
  );

  const getQuote = () => {
    const options = {
      method: "POST",
      url: "https://motivational-quotes1.p.rapidapi.com/motivation",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "088a2d0d0amsh310e93f2069e6f2p1dde27jsn032a05667de9",
        "X-RapidAPI-Host": "motivational-quotes1.p.rapidapi.com",
      },
      data: '{"key1":"value","key2":"value"}',
    };

    axios
      .request(options)
      .then(function (response) {
        setRandomeQuote(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const getRandomQuote = () => {
    const options = {
      method: "GET",
      url: "https://quotes15.p.rapidapi.com/quotes/random/",
      headers: {
        "X-RapidAPI-Key": "088a2d0d0amsh310e93f2069e6f2p1dde27jsn032a05667de9",
        "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setSecondQuote(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <div className="Quotes">
      <section>
        <button onClick={getQuote}> Motivation quote</button>
        <InputQuote quote={randomQuote} />
      </section>
      <section>
        <button onClick={getRandomQuote}> Random quote</button>
        <SecondQuote secondQuote={secondQuote} />
      </section>
    </div>
  );
}
