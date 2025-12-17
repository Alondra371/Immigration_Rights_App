import React, { useState } from "react";

type PostType = "news" | "event";

export type ForumPost = {
  id: number;
  title: string;
  body: string;
  type: PostType;
  date: string;
  author: string;
};

type Filter = "all" | "news" | "events";

const initialPosts: ForumPost[] = [
  {
    id: 1,
    title: "New Immigration Policy Changes Announced for 2025",
    body: "Federal government announces significant updates to asylum processing procedures and wait times.",
    type: "news",
    date: "November 1, 2025",
    author: "Legal Aid Network",
  },
  {
    id: 2,
    title: "Supreme Court to Hear Major Immigration Case",
    body: "A landmark case could reshape immigration law and affect millions of undocumented immigrants.",
    type: "news",
    date: "October 25, 2025",
    author: "Staff Reporter",
  },
  {
    id: 3,
    title: "Free Legal Clinic - Los Angeles",
    body: "Walk-in consultations with immigration attorneys. No appointment needed.",
    type: "event",
    date: "November 15, 2025",
    author: "Community Partner",
  },
  {
    id: 4,
    title: "Citizenship Application Workshop",
    body: "Step-by-step guidance on completing the N-400 form and preparing for the citizenship interview.",
    type: "event",
    date: "November 20, 2025",
    author: "Local Nonprofit",
  },
  {
    id: 5,
    title: "Border Processing Times Reduced by 40%",
    body: "New streamlined procedures show significant improvements in asylum application processing.",
    type: "news",
    date: "October 5, 2025",
    author: "Policy Desk",
  },
];

export default function Forum() {
  const [filter, setFilter] = useState<Filter>("all");
  const [posts, setPosts] = useState<ForumPost[]>(initialPosts);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loginName, setLoginName] = useState("");
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");
  const [newPostType, setNewPostType] = useState<PostType>("news");

  const visiblePosts = posts.filter((post) => {
    if (filter === "all") return true;
    if (filter === "news") return post.type === "news";
    if (filter === "events") return post.type === "event";
    return true;
  });

  const handleLoginSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!loginName.trim()) return;
    setCurrentUser(loginName.trim());
    setShowLoginForm(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setLoginName("");
  };

  const handleAddPost = (event: React.FormEvent) => {
    event.preventDefault();
    if (!currentUser || !newPostTitle.trim() || !newPostBody.trim()) return;

    const now = new Date();
    const formattedDate = now.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const newPost: ForumPost = {
      id: posts.length + 1,
      title: newPostTitle.trim(),
      body: newPostBody.trim(),
      type: newPostType,
      date: formattedDate,
      author: currentUser,
    };

    // Newest posts appear at the top
    setPosts((prev) => [newPost, ...prev]);

    setNewPostTitle("");
    setNewPostBody("");
    setNewPostType("news");
  };

  const renderFilterButton = (value: Filter, label: string) => (
    <button
      type="button"
      onClick={() => setFilter(value)}
      className={
        "btn btn-outline" + (filter === value ? " btn-primary" : "")
      }
    >
      {label}
    </button>
  );

  return (
    <div className="forum-page">
      <section className="section">
        <div className="section-header">
          <h1 className="section-title">Community Forum</h1>
          <p className="section-subtitle">
            Read and share news and events from immigrant communities and
            advocacy organizations.
          </p>
        </div>

        {/* Filters */}
        <div className="forum-filters">
          <span className="forum-filters-label">Filter:</span>
          <div className="forum-filters-buttons">
            {renderFilterButton("all", "All")}
            {renderFilterButton("news", "News")}
            {renderFilterButton("events", "Events")}
          </div>
        </div>

        {/* Sign in / profile + Add Post */}
        <div className="widgets-grid">
          <article className="widget-card">
            <h2 className="card-title">
              {currentUser ? "You are signed in" : "Sign in to share updates"}
            </h2>
            <p className="card-description">
              Create a lightweight account in this demo to post news and events
              to the forum. This is front-end only; nothing is saved to a
              server.
            </p>

            {!currentUser && !showLoginForm && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setShowLoginForm(true)}
              >
                Sign In
              </button>
            )}

            {!currentUser && showLoginForm && (
              <form className="forum-form" onSubmit={handleLoginSubmit}>
                <label className="form-field">
                  <span className="form-label">Name</span>
                  <input
                    type="text"
                    value={loginName}
                    onChange={(e) => setLoginName(e.target.value)}
                    className="form-input"
                    placeholder="Your name or nickname"
                  />
                </label>
                <button type="submit" className="btn btn-primary">
                  Continue
                </button>
              </form>
            )}

            {currentUser && (
              <div className="forum-user">
                <p className="forum-user-name">
                  Signed in as <strong>{currentUser}</strong>
                </p>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={handleLogout}
                >
                  Sign Out
                </button>
              </div>
            )}
          </article>

          <article className="widget-card">
            <h2 className="card-title">Add a post</h2>
            {!currentUser ? (
              <p className="card-description">
                Please sign in first to add a post.
              </p>
            ) : (
              <form className="forum-form" onSubmit={handleAddPost}>
                <label className="form-field">
                  <span className="form-label">Title</span>
                  <input
                    type="text"
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                    className="form-input"
                    placeholder="Short headline for your post"
                  />
                </label>

                <label className="form-field">
                  <span className="form-label">Type</span>
                  <select
                    value={newPostType}
                    onChange={(e) =>
                      setNewPostType(e.target.value as PostType)
                    }
                    className="form-input"
                  >
                    <option value="news">News</option>
                    <option value="event">Event</option>
                  </select>
                </label>

                <label className="form-field">
                  <span className="form-label">Body</span>
                  <textarea
                    value={newPostBody}
                    onChange={(e) => setNewPostBody(e.target.value)}
                    className="form-input"
                    rows={4}
                    placeholder="Share details, links, or important info."
                  />
                </label>

                <button type="submit" className="btn btn-primary">
                  Post
                </button>
              </form>
            )}
          </article>
        </div>

        {/* Posts list */}
        <div className="forum-list">
          {visiblePosts.map((post) => (
            <article key={post.id} className="widget-card forum-post-card">
              <div className="forum-post-meta">
                <span className="forum-post-chip">
                  {post.type === "news" ? "News" : "Event"}
                </span>
                <span className="forum-post-date">{post.date}</span>
              </div>
              <h3 className="card-title">{post.title}</h3>
              <p className="card-description">{post.body}</p>
              <p className="forum-post-author">Posted by {post.author}</p>
            </article>
          ))}

          {visiblePosts.length === 0 && (
            <p className="forum-empty">
              No posts match this filter yet. Try switching to a different
              filter or add a new post.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
