import React, { useState, useEffect } from "react";
import Spinner from "../components/ui/Spinner.component";
import { baseUrl } from "../constants/api";
import axios from "axios";
import Coins from "../components/coin/coins.copmponent";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios(baseUrl)
      .then((response) => {
        setLoading(false);
       setData(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="m-4 text-gray "> get the latest crypto prices</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {loading ? (
            <Spinner />
          ) : error !== "" ? <h1>{error}</h1> : <div><Coins data={data}/></div>}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
