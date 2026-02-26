import { useState } from "react";
import "./Dashboard.css";

const mockExhibitions = [
  { id: 1, name: "Modern Impressions", artworks: 12, startDate: "2026-03-01", endDate: "2026-03-31", status: "Upcoming" },
  { id: 2, name: "Colors of India", artworks: 18, startDate: "2026-02-10", endDate: "2026-02-28", status: "Active" },
  { id: 3, name: "Abstract Visions", artworks: 8, startDate: "2026-01-05", endDate: "2026-01-25", status: "Completed" },
];

const mockInsights = [
  { id: 1, artwork: "Sunset Over Mountains", views: 1240, likes: 89, inquiries: 12, trend: "↑" },
  { id: 2, artwork: "Pencil Sketch Portrait", views: 980, likes: 67, inquiries: 8, trend: "↑" },
  { id: 3, artwork: "Ocean Breeze", views: 756, likes: 54, inquiries: 5, trend: "→" },
  { id: 4, artwork: "Modern Bronze", views: 634, likes: 45, inquiries: 7, trend: "↓" },
];

const mockGalleryItems = [
  { id: 1, title: "Sunset Over Mountains", artist: "Aarav", category: "Painting", featured: true },
  { id: 2, title: "Pencil Sketch Portrait", artist: "Meera", category: "Drawing", featured: false },
  { id: 3, title: "Nature Photography", artist: "Ravi", category: "Photography", featured: true },
  { id: 4, title: "Modern Bronze", artist: "Priya", category: "Sculpture", featured: false },
  { id: 5, title: "Charcoal Art", artist: "Meera", category: "Drawing", featured: true },
];

function OrganizeExhibitions() {
  const [exhibitions] = useState(mockExhibitions);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="section-panel">
      <h2>🎪 Exhibitions</h2>
      <button className="btn btn-primary" style={{ marginBottom: "20px" }} onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel" : "+ Create Exhibition"}
      </button>

      {showForm && (
        <form className="dashboard-form" style={{ marginBottom: "24px" }} onSubmit={(e) => { e.preventDefault(); setShowForm(false); alert("Exhibition created!"); }}>
          <div className="form-group">
            <label>Exhibition Name</label>
            <input type="text" placeholder="Enter exhibition name" required />
          </div>
          <div className="form-group">
            <label>Start Date</label>
            <input type="date" required />
          </div>
          <div className="form-group">
            <label>End Date</label>
            <input type="date" required />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea placeholder="Describe the exhibition theme..." />
          </div>
          <button className="btn btn-primary" type="submit">Create</button>
        </form>
      )}

      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Exhibition</th>
            <th>Artworks</th>
            <th>Duration</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exhibitions.map((ex) => (
            <tr key={ex.id}>
              <td>{ex.name}</td>
              <td>{ex.artworks}</td>
              <td>{ex.startDate} – {ex.endDate}</td>
              <td>
                <span className={`badge ${ex.status === "Active" ? "badge-success" : ex.status === "Upcoming" ? "badge-info" : "badge-warning"}`}>
                  {ex.status}
                </span>
              </td>
              <td>
                <div className="btn-group">
                  <button className="btn btn-primary btn-sm">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ArtworkInsights() {
  return (
    <div className="section-panel">
      <h2>📊 Artwork Insights</h2>

      <div className="stats-row" style={{ marginBottom: "24px" }}>
        <div className="stat-card">
          <div className="stat-icon">👁️</div>
          <div className="stat-value">3,610</div>
          <div className="stat-label">Total Views</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">❤️</div>
          <div className="stat-value">255</div>
          <div className="stat-label">Total Likes</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">💬</div>
          <div className="stat-value">32</div>
          <div className="stat-label">Inquiries</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📈</div>
          <div className="stat-value">+18%</div>
          <div className="stat-label">Growth</div>
        </div>
      </div>

      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Artwork</th>
            <th>Views</th>
            <th>Likes</th>
            <th>Inquiries</th>
            <th>Trend</th>
          </tr>
        </thead>
        <tbody>
          {mockInsights.map((item) => (
            <tr key={item.id}>
              <td>{item.artwork}</td>
              <td>{item.views.toLocaleString()}</td>
              <td>{item.likes}</td>
              <td>{item.inquiries}</td>
              <td style={{ fontSize: "1.2rem" }}>{item.trend}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function GalleryManager() {
  const [items, setItems] = useState(mockGalleryItems);

  const toggleFeatured = (id) => {
    setItems(items.map((item) => (item.id === id ? { ...item, featured: !item.featured } : item)));
  };

  const handleRemove = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="section-panel">
      <h2>🖼️ Gallery Content</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Category</th>
            <th>Featured</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.artist}</td>
              <td>{item.category}</td>
              <td>
                <span
                  className={`badge ${item.featured ? "badge-success" : ""}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleFeatured(item.id)}
                >
                  {item.featured ? "⭐ Featured" : "Not Featured"}
                </span>
              </td>
              <td>
                <div className="btn-group">
                  <button className="btn btn-primary btn-sm">Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CuratorDashboard() {
  const [activeTab, setActiveTab] = useState("exhibitions");

  const tabs = [
    { id: "exhibitions", label: "🎪 Exhibitions" },
    { id: "insights", label: "📊 Artwork Insights" },
    { id: "gallery", label: "🖼️ Gallery Content" },
  ];

  return (
    <div className="dashboard">
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <h2>🏛️ Curator</h2>
          <p>Gallery Curator</p>
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
        <h1>Curator Dashboard</h1>
        <p className="subtitle">Organize exhibitions, analyze artworks, and manage gallery content</p>

        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-icon">🎪</div>
            <div className="stat-value">3</div>
            <div className="stat-label">Exhibitions</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🖼️</div>
            <div className="stat-value">38</div>
            <div className="stat-label">Curated Items</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-value">15</div>
            <div className="stat-label">Featured Works</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">👁️</div>
            <div className="stat-value">3.6K</div>
            <div className="stat-label">Total Views</div>
          </div>
        </div>

        {activeTab === "exhibitions" && <OrganizeExhibitions />}
        {activeTab === "insights" && <ArtworkInsights />}
        {activeTab === "gallery" && <GalleryManager />}
      </main>
    </div>
  );
}