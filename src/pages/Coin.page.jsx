import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { coinDetailUrl } from "../constants/api";
import axios from "axios";
import Spinner from "../components/ui/Spinner.component";
import CoinsDetail from "../components/coin/coinsDetail";

const CoinPage = () => {
  const params = useParams();
  const url = coinDetailUrl(params.id);

  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios(url)
      .then((response) => {
        setLoading(false);
        setCoin(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : error !== "" ? (
        <h1>{error}</h1>
      ) : (
        <CoinsDetail coin={coin} />
      )}
    </div>
  );
};
export default CoinPage;
