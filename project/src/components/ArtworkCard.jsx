function ArtworkCard({ artwork }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      width: "250px"
    }}>
      <img src={artwork.imageUrl} alt={artwork.title} width="100%" />
      <h3>{artwork.title}</h3>
      <p>{artwork.description}</p>
      <p><b>₹{artwork.price}</b></p>
      <button>Buy</button>
    </div>
  );
}

export default ArtworkCard;