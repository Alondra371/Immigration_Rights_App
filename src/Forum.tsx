import React, { useEffect, useState } from "react";

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

const LS_USER = "forum_current_user";
const LS_POSTS = "forum_posts";

const initialPosts: ForumPost[] = [
  {
    id: 1,
    title: "New Immigration Policy Changes Announced for 2025",
    body: "Federal government announces significant updates to asylum processing procedures and wait times.",
    type: "news",
    date: "Nov 1, 2025",
    author: "Legal Aid Network",
  },
  {
    id: 2,
    title: "Free Legal Clinic – Los Angeles",
    body: "Walk-in consultations with immigration attorneys. No appointment needed.",
    type: "event",
    date: "Nov 15, 2025",
    author: "Community Partner",
  },
];

export default function Forum() {
  const [filter, setFilter] = useState<Filter>("all");

  const [posts, setPosts] = useState<ForumPost[]>(() => {
    const saved = localStorage.getItem(LS_POSTS);
    return saved ? JSON.parse(saved) : initialPosts;
  });

  const [currentUser, setCurrentUser] = useState<string | null>(() => {
    return localStorage.getItem(LS_USER);
  });

  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loginName, setLoginName] = useState("");

  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");
  const [newPostType, setNewPostType] = useState<PostType>("news");

  /* -------------------- persistence -------------------- */

  useEffect(() => {
    if (currentUser) localStorage.setItem(LS_USER, currentUser);
    else localStorage.removeItem(LS_USER);
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem(LS_POSTS, JSON.stringify(posts));
  }, [posts]);

  /* -------------------- handlers -------------------- */

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginName.trim()) return;
    setCurrentUser(loginName.trim());
    setShowLoginForm(false);
    setLoginName("");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem(LS_USER);
  };

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser || !newPostTitle.trim() || !newPostBody.trim()) return;

    const date = new Date().toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const newPost: ForumPost = {
      id: Date.now(),
      title: newPostTitle.trim(),
      body: newPostBody.trim(),
      type: newPostType,
      date,
      author: currentUser,
    };

    setPosts((prev) => [newPost, ...prev]);
    setNewPostTitle("");
    setNewPostBody("");
    setNewPostType("news");
  };

  const handleDeletePost = (id: number) => {
    if (!confirm("Delete this post?")) return;
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  /* -------------------- derived -------------------- */

  const visiblePosts = posts.filter((post) => {
    if (filter === "all") return true;
    if (filter === "news") return post.type === "news";
    if (filter === "events") return post.type === "event";
    return true;
  });

  const renderFilterButton = (value: Filter, label: string) => (
    <button
      type="button"
      className={`btn btn-outline ${filter === value ? "btn-primary" : ""}`}
      onClick={() => setFilter(value)}
    >
      {label}
    </button>
  );

  /* -------------------- UI -------------------- */

  return (
    <div className="forum-page">
      <section className="section">
        <h1 className="section-title">Community Forum</h1>
        <p className="section-subtitle">
          Share immigration news and community events.
        </p>

        {/* Filters */}
        <div className="forum-filters">
          {renderFilterButton("all", "All")}
          {renderFilterButton("news", "News")}
          {renderFilterButton("events", "Events")}
        </div>

        {/* Auth */}
        <div className="widget-card">
          {!currentUser ? (
            <>
              {!showLoginForm && (
                <button
                  className="btn btn-primary"
                  onClick={() => setShowLoginForm(true)}
                >
                  Sign In
                </button>
              )}

              {showLoginForm && (
                <form onSubmit={handleLoginSubmit}>
                  <input
                    className="form-input"
                    value={loginName}
                    onChange={(e) => setLoginName(e.target.value)}
                    placeholder="Your name"
                  />
                  <button className="btn btn-primary">Continue</button>
                </form>
              )}
            </>
          ) : (
            <>
              <p>
                Signed in as <strong>{currentUser}</strong>
              </p>
              <button className="btn btn-outline" onClick={handleLogout}>
                Sign Out
              </button>
            </>
          )}
        </div>

        {/* Add post */}
        {currentUser && (
          <form className="widget-card" onSubmit={handleAddPost}>
            <input
              className="form-input"
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
              placeholder="Post title"
            />

            <select
              className="form-input"
              value={newPostType}
              onChange={(e) => setNewPostType(e.target.value as PostType)}
            >
              <option value="news">News</option>
              <option value="event">Event</option>
            </select>

            <textarea
              className="form-input"
              rows={4}
              value={newPostBody}
              onChange={(e) => setNewPostBody(e.target.value)}
              placeholder="Post content"
            />

            <button className="btn btn-primary">Post</button>
          </form>
        )}

        {/* Posts */}
        <div className="forum-list">
          {visiblePosts.map((post) => (
            <article key={post.id} className="widget-card">
              <span className="forum-post-chip">
                {post.type === "news" ? "News" : "Event"}
              </span>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <p className="forum-post-author">Posted by {post.author}</p>

              {currentUser === post.author && (
                <button
                  className="btn btn-outline"
                  onClick={() => handleDeletePost(post.id)}
                >
                  Delete
                </button>
              )}
            </article>
          ))}

          {visiblePosts.length === 0 && (
            <p className="forum-empty">No posts yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}
 