import { useState } from "react";
import "./Dashboard.css";

import painting1 from "../assets/images/painting1.jpg";
import painting2 from "../assets/images/painting2.jpg";
import painting3 from "../assets/images/painting3.jpg";

const initialListings = [
  { id: 1, title: "Sunset Over Mountains", price: 5000, category: "Painting", status: "Published", image: painting1 },
  { id: 2, title: "Ocean Breeze", price: 7200, category: "Painting", status: "Published", image: painting2 },
  { id: 3, title: "Golden Fields", price: 6100, category: "Painting", status: "Pending", image: painting3 },
];

const mockSales = [
  { id: 1, artwork: "Sunset Over Mountains", buyer: "Ravi Kumar", amount: 5000, date: "2026-02-20", status: "Completed" },
  { id: 2, artwork: "Ocean Breeze", buyer: "Priya Singh", amount: 7200, date: "2026-02-18", status: "Completed" },
  { id: 3, artwork: "Golden Fields", buyer: "Ankit Jain", amount: 6100, date: "2026-02-22", status: "Pending" },
];

function UploadArtwork() {
  const [form, setForm] = useState({ title: "", description: "", price: "", category: "Painting", imageUrl: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Artwork uploaded successfully!");
    setForm({ title: "", description: "", price: "", category: "Painting", imageUrl: "" });
  };

  return (
    <div className="section-panel">
      <h2>📤 Upload New Artwork</h2>
      <form className="dashboard-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Artwork title" required />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} placeholder="Describe your artwork..." />
        </div>
        <div className="form-group">
          <label>Price (₹)</label>
          <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="5000" required />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select name="category" value={form.category} onChange={handleChange}>
            <option value="Painting">Painting</option>
            <option value="Drawing">Drawing</option>
            <option value="Photography">Photography</option>
            <option value="Sculpture">Sculpture</option>
          </select>
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input type="text" name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="https://..." />
        </div>
        <button className="btn btn-primary" type="submit">Upload Artwork</button>
      </form>
    </div>
  );
}

function MyListings() {
  const [listings, setListings] = useState(initialListings);

  const handleDelete = (id) => {
    setListings(listings.filter((l) => l.id !== id));
  };

  return (
    <div className="section-panel">
      <h2>🖼️ My Listings</h2>
      <div className="artwork-grid">
        {listings.map((art) => (
          <div className="artwork-card" key={art.id}>
            <img src={art.image} alt={art.title} />
            <div className="artwork-card-body">
              <h3>{art.title}</h3>
              <p>{art.category}</p>
              <span className={`badge ${art.status === "Published" ? "badge-success" : "badge-warning"}`}>
                {art.status}
              </span>
              <div className="price">₹{art.price.toLocaleString()}</div>
              <div className="btn-group" style={{ marginTop: "12px" }}>
                <button className="btn btn-primary btn-sm">Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(art.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SalesTracker() {
  return (
    <div className="section-panel">
      <h2>📊 Sales Tracker</h2>

      <div className="stats-row" style={{ marginBottom: "24px" }}>
        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-value">₹18,300</div>
          <div className="stat-label">Total Revenue</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🛒</div>
          <div className="stat-value">3</div>
          <div className="stat-label">Total Sales</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏳</div>
          <div className="stat-value">1</div>
          <div className="stat-label">Pending Orders</div>
        </div>
      </div>

      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Artwork</th>
            <th>Buyer</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {mockSales.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.artwork}</td>
              <td>{sale.buyer}</td>
              <td>₹{sale.amount.toLocaleString()}</td>
              <td>{sale.date}</td>
              <td>
                <span className={`badge ${sale.status === "Completed" ? "badge-success" : "badge-warning"}`}>
                  {sale.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ArtistDashboard() {
  const [activeTab, setActiveTab] = useState("upload");

  const tabs = [
    { id: "upload", label: "📤 Upload Artwork" },
    { id: "listings", label: "🖼️ My Listings" },
    { id: "sales", label: "📊 Sales Tracker" },
  ];

  return (
    <div className="dashboard">
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <h2>🎨 Artist</h2>
          <p>Creative Studio</p>
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
        <h1>Artist Dashboard</h1>
        <p className="subtitle">Upload and manage your artwork, track your sales</p>

        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-icon">🖼️</div>
            <div className="stat-value">3</div>
            <div className="stat-label">My Artworks</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-value">₹18.3K</div>
            <div className="stat-label">Revenue</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">👁️</div>
            <div className="stat-value">342</div>
            <div className="stat-label">Profile Views</div>
          </div>
        </div>

        {activeTab === "upload" && <UploadArtwork />}
        {activeTab === "listings" && <MyListings />}
        {activeTab === "sales" && <SalesTracker />}
      </main>
    </div>
  );
}