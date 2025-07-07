import "./Coins.css";


const Coins = ({ data }) => {
  return (
    <table class="table table-hover">
      <thead className=" ">
        <tr>
          <th scope="col">#</th>
          <th scope="col">logo</th>
          <th scope="col">symbol</th>
          <th scope="col">price</th>
          <th scope="col">24h %</th>
          <th scope="col">volume</th>
          <th scope="col">market cap</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {data.map((coin) => (
          <tr key={coin.market_cap_rank}>
            <th scope="row">{coin.market_cap_rank}</th>
            <th>
              <img src={coin.image} className="logo-coins" />
            </th>
            <th>{coin.symbol}</th>
            <th>{coin.current_price.toLocaleString()}$</th>
            <th>{coin.price_change_percentage_24h.toFixed(3)}%</th>
            <th>{coin.total_volume.toLocaleString()}$</th>
            <th>{coin.market_cap.toLocaleString()}$</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Coins;
