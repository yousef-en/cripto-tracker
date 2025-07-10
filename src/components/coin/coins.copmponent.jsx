import "./Coins.css";
import { Link } from "react-router-dom";

const Coins = ({ data }) => {
  return (
    <div className="table-container">
      <div className="table-responsive">
        <table className="table table-hover mb-0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Logo</th>
              <th scope="col">Symbol</th>
              <th scope="col">Price</th>
              <th scope="col">24h %</th>
              <th scope="col">Volume</th>
              <th scope="col">Market Cap</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {data.map((coin) => (
              <tr key={coin.market_cap_rank}>
                <th scope="row">{coin.market_cap_rank}</th>
                <td>
                  <img src={coin.image} alt={`${coin.name} logo`} className="logo-coins" />
                </td>
                <td>
                  <Link to={`/coin/${coin.id}`} className="text-decoration-none">
                    {coin.symbol.toUpperCase()}
                  </Link>
                </td>
                <td>${coin.current_price.toLocaleString()}</td>
                <td className={coin.price_change_percentage_24h >= 0 ? 'price-positive' : 'price-negative'}>
                  {coin.price_change_percentage_24h >= 0 ? '+' : ''}{coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td>${coin.total_volume.toLocaleString()}</td>
                <td>${coin.market_cap.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Coins;
