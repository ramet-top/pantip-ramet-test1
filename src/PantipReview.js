import React, { useState, useEffect } from "react";

const PantipReview = () => {
  const [news, setNews] = useState([]);

  const fetchNews = () => {
    fetch("http://www.mocky.io/v2/5e1d227c3600002a00c73e82")
      .then(result => result.json())
      .then(data => {
        setNews(data);
        console.log(data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchNews();
  }, []);
  return <div>this is fetch api mocky</div>;
};

export default PantipReview;
