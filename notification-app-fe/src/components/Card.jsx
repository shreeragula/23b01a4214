function Card({ data }) {
  return (
    <div className="notification-card">
      <h3>{data.Type}</h3>

      <p>{data.Message}</p>

      <span>{data.Timestamp}</span>
    </div>
  );
}

export default Card;