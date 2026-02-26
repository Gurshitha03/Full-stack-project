import { useState } from "react";
import "./Dashboard.css";

import painting1 from "../assets/images/painting1.jpg";
import painting2 from "../assets/images/painting2.jpg";
import painting3 from "../assets/images/painting3.jpg";
import drawing1 from "../assets/images/drawing1.jpg";
import drawing2 from "../assets/images/drawing2.jpg";
import photo1 from "../assets/images/photo1.jpg";
import photo2 from "../assets/images/photo2.jpg";
import sculpture1 from "../assets/images/sculpture1.jpg";

const allArtworks = [
  { id: 1, title: "Sunset Over Mountains", artist: "Aarav", price: 5000, category: "Painting", image: painting1 },
  { id: 2, title: "Ocean Breeze", artist: "Meera", price: 7200, category: "Painting", image: painting2 },
  { id: 3, title: "Golden Fields", artist: "Ravi", price: 6100, category: "Painting", image: painting3 },
  { id: 4, title: "Pencil Sketch", artist: "Priya", price: 2500, category: "Drawing", image: drawing1 },
  { id: 5, title: "Charcoal Art", artist: "Meera", price: 3200, category: "Drawing", image: drawing2 },
  { id: 6, title: "Nature Shot", artist: "Aarav", price: 4800, category: "Photography", image: photo1 },
  { id: 7, title: "Wildlife Capture", artist: "Ravi", price: 5500, category: "Photography", image: photo2 },
  { id: 8, title: "Modern Bronze", artist: "Priya", price: 9800, category: "Sculpture", image: sculpture1 },
];

const mockPurchases = [
  { id: 1, artwork: "Sunset Over Mountains", artist: "Aarav", amount: 5000, date: "2026-02-18", status: "Delivered" },
  { id: 2, artwork: "Pencil Sketch", artist: "Priya", amount: 2500, date: "2026-02-21", status: "Shipped" },
  { id: 3, artwork: "Nature Shot", artist: "Aarav", amount: 4800, date: "2026-02-23", status: "Processing" },
];

function BrowseArtworks() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? allArtworks : allArtworks.filter((a) => a.category === filter);

  return (
    <div className="section-panel">
      <h2>🎨 Browse Artworks</h2>

      <div className="btn-group" style={{ marginBottom: "20px" }}>
        {["All", "Painting", "Drawing", "Photography", "Sculpture"].map((cat) => (
          <button
            key={cat}
            className={`btn btn-sm ${filter === cat ? "btn-primary" : ""}`}
            onClick={() => setFilter(cat)}
            style={filter !== cat ? { background: "rgba(15, 52, 96, 0.5)", color: "#8892b0", border: "1px solid rgba(255,255,255,0.1)" } : {}}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="artwork-grid">
        {filtered.map((art) => (
          <div className="artwork-card" key={art.id}>
            <img src={art.image} alt={art.title} />
            <div className="artwork-card-body">
              <h3>{art.title}</h3>
              <p>by {art.artist} • {art.category}</p>
              <div className="price">₹{art.price.toLocaleString()}</div>
              <button className="btn btn-primary btn-sm" style={{ marginTop: "12px", width: "100%" }}>
                Add to Cart 🛒
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VirtualTours() {
  return (
    <div className="section-panel">
      <h2>🏛️ Virtual Gallery Tour</h2>
      <p style={{ color: "#8892b0", marginBottom: "20px" }}>
        Experience our curated exhibitions from the comfort of your home.
      </p>
      <div className="tour-container">
        <iframe
          src="https://www.youtube.com/embed/Scxs7L0vhZ4"
          title="Virtual Art Gallery Tour"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="stats-row" style={{ marginTop: "24px" }}>
        <div className="stat-card">
          <div className="stat-icon">🏛️</div>
          <div className="stat-value">5</div>
          <div className="stat-label">Available Tours</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏱️</div>
          <div className="stat-value">45 min</div>
          <div className="stat-label">Avg Duration</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🎨</div>
          <div className="stat-value">120+</div>
          <div className="stat-label">Artworks Featured</div>
        </div>
      </div>
    </div>
  );
}

function MyPurchases() {
  return (
    <div className="section-panel">
      <h2>🛍️ My Purchases</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Artwork</th>
            <th>Artist</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {mockPurchases.map((purchase) => (
            <tr key={purchase.id}>
              <td>{purchase.artwork}</td>
              <td>{purchase.artist}</td>
              <td>₹{purchase.amount.toLocaleString()}</td>
              <td>{purchase.date}</td>
              <td>
                <span
                  className={`badge ${purchase.status === "Delivered"
                      ? "badge-success"
                      : purchase.status === "Shipped"
                        ? "badge-info"
                        : "badge-warning"
                    }`}
                >
                  {purchase.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="stats-row" style={{ marginTop: "24px" }}>
        <div className="stat-card">
          <div className="stat-icon">🛒</div>
          <div className="stat-value">3</div>
          <div className="stat-label">Total Orders</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-value">₹12,300</div>
          <div className="stat-label">Total Spent</div>
        </div>
      </div>
    </div>
  );
}

export default function VisitorDashboard() {
  const [activeTab, setActiveTab] = useState("browse");

  const tabs = [
    { id: "browse", label: "🎨 Browse Artworks" },
    { id: "tours", label: "🏛️ Virtual Tours" },
    { id: "purchases", label: "🛍️ My Purchases" },
  ];

  return (
    <div className="dashboard">
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <h2>👤 Visitor</h2>
          <p>Art Explorer</p>
        </div>
        <ul className="sidebar-nav">
          {tabs.map((tab) => (
            <li key={tab.id} className={activeTab === tab.id ? "active" : ""} onClick={() => setActiveTab(tab.id)}>
              {tab.label}
            </li>
          ))}
        </ul>
      </aside>

      <main className="dashboard-main">
        <h1>Visitor Dashboard</h1>
        <p className="subtitle">Browse artworks, explore virtual tours, and manage your purchases</p>

        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-icon">🎨</div>
            <div className="stat-value">{allArtworks.length}</div>
            <div className="stat-label">Artworks Available</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏛️</div>
            <div className="stat-value">5</div>
            <div className="stat-label">Virtual Tours</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">❤️</div>
            <div className="stat-value">12</div>
            <div className="stat-label">Wishlist Items</div>
          </div>
        </div>

        {activeTab === "browse" && <BrowseArtworks />}
        {activeTab === "tours" && <VirtualTours />}
        {activeTab === "purchases" && <MyPurchases />}
      </main>
    </div>
  );
}