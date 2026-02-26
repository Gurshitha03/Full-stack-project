import painting1 from "../assets/images/painting1.jpg";
import painting2 from "../assets/images/painting2.jpg";
import painting3 from "../assets/images/painting3.jpg";

export default function Paintings() {
  const paintings = [
    {
      title: "painting1",
      artist: "Aarav",
      price: 5000,
      image: painting1,
    },
    {
      title: "painting2",
      artist: "Meera",
      price: 7200,
      image: painting2,
    },
    {
      title: "painting3",
      artist: "Ravi",
      price: 6100,
      image: painting3,
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Paintings Gallery 🎨</h1>

      <div style={{ display: "grid", gap: "20px" }}>
        {paintings.map((art, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "10px",
              maxWidth: "400px",
            }}
          >
            <img
              src={art.image}
              alt={art.title}
              style={{ width: "100%", borderRadius: "10px" }}
            />

            <h3>{art.title}</h3>
            <p>Artist: {art.artist}</p>
            <p>Price: ₹{art.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}