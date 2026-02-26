import { useState } from "react";
import "./Dashboard.css";

const mockArtworks = [
  { id: 1, title: "Sunset Over Mountains", artist: "Aarav", category: "Painting", status: "Published" },
  { id: 2, title: "Pencil Sketch Portrait", artist: "Meera", category: "Drawing", status: "Published" },
  { id: 3, title: "Ocean Waves", artist: "Ravi", category: "Photography", status: "Pending" },
  { id: 4, title: "Modern Bronze", artist: "Priya", category: "Sculpture", status: "Published" },
];

const mockUsers = [
  { id: 1, name: "Aarav Sharma", email: "aarav@email.com", role: "Artist" },
  { id: 2, name: "Meera Patel", email: "meera@email.com", role: "Artist" },
  { id: 3, name: "Ravi Kumar", email: "ravi@email.com", role: "Visitor" },
  { id: 4, name: "Priya Singh", email: "priya@email.com", role: "Curator" },
];

function ManageContent() {
  const [artworks, setArtworks] = useState(mockArtworks);

  const handleDelete = (id) => {
    setArtworks(artworks.filter((a) => a.id !== id));
  };

  return (
    <div className="section-panel">
      <h2>📋 Platform Content</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Category</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {artworks.map((art) => (
            <tr key={art.id}>
              <td>{art.title}</td>
              <td>{art.artist}</td>
              <td>{art.category}</td>
              <td>
                <span className={`badge ${art.status === "Published" ? "badge-success" : "badge-warning"}`}>
                  {art.status}
                </span>
              </td>
              <td>
                <div className="btn-group">
                  <button className="btn btn-primary btn-sm">Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(art.id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ManageRoles() {
  const [users, setUsers] = useState(mockUsers);

  const handleRoleChange = (id, newRole) => {
    setUsers(users.map((u) => (u.id === id ? { ...u, role: newRole } : u)));
  };

  return (
    <div className="section-panel">
      <h2>👥 User Roles</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                  style={{
                    padding: "6px 12px",
                    background: "rgba(15, 52, 96, 0.5)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "6px",
                    color: "#e0e0e0",
                    fontSize: "0.85rem",
                  }}
                >
                  <option value="Admin">Admin</option>
                  <option value="Artist">Artist</option>
                  <option value="Curator">Curator</option>
                  <option value="Visitor">Visitor</option>
                </select>
              </td>
              <td>
                <button className="btn btn-primary btn-sm">Save</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function GallerySettings() {
  const [settings, setSettings] = useState({
    galleryName: "Virtual Art Gallery",
    description: "A curated collection of fine arts from around the world.",
    theme: "dark",
  });

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  return (
    <div className="section-panel">
      <h2>⚙️ Gallery Settings</h2>
      <form className="dashboard-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label>Gallery Name</label>
          <input type="text" name="galleryName" value={settings.galleryName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="description" value={settings.description} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Theme</label>
          <select name="theme" value={settings.theme} onChange={handleChange}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
            <option value="classic">Classic</option>
          </select>
        </div>
        <button className="btn btn-primary" type="submit">Save Settings</button>
      </form>
    </div>
  );
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("content");

  const tabs = [
    { id: "content", label: "📋 Manage Content" },
    { id: "roles", label: "👥 User Roles" },
    { id: "settings", label: "⚙️ Gallery Settings" },
  ];

  return (
    <div className="dashboard">
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <h2>🛡️ Admin</h2>
          <p>Platform Management</p>
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
        <h1>Admin Dashboard</h1>
        <p className="subtitle">Manage platform content, user roles, and gallery settings</p>

        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-icon">🎨</div>
            <div className="stat-value">24</div>
            <div className="stat-label">Total Artworks</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-value">156</div>
            <div className="stat-label">Total Users</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🖼️</div>
            <div className="stat-value">8</div>
            <div className="stat-label">Exhibitions</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📈</div>
            <div className="stat-value">1.2K</div>
            <div className="stat-label">Total Visits</div>
          </div>
        </div>

        {activeTab === "content" && <ManageContent />}
        {activeTab === "roles" && <ManageRoles />}
        {activeTab === "settings" && <GallerySettings />}
      </main>
    </div>
  );
}