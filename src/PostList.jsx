import { useState } from 'react'
import './PostList.css'

const PostList = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false) // Changed to false initially
  const [error, setError] = useState(null)

  // Removed auto-fetch on component mount
  // Manual fetch will be triggered by the Fetch button

  const fetchPosts = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      setPosts(data)
      
    } catch (error) {
      setError('Failed to fetch posts. Please try again later.')
      console.error('Fetch error:', error)
    } finally {
      setLoading(false)
    }
  }

  // Add clear posts functionality
  const clearPosts = () => {
    setPosts([])
    setError(null)
  }

  return (
    <div className="posts-container">
      <h2>Blog Posts</h2>

      {/* Action Buttons */}
      <div className="posts-actions">
        <button 
          className="fetch-button"
          onClick={fetchPosts}
          disabled={loading}
        >
          {loading ? 'Fetching...' : 'Fetch Posts'}
        </button>
        <button 
          className="clear-button"
          onClick={clearPosts}
          disabled={loading || posts.length === 0}
        >
          Clear Posts
        </button>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="loading">
          <div className="loader"></div>
          <p>Loading posts...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="error-message">
          <p>🚫 {error}</p>
          <button 
            className="retry-button"
            onClick={fetchPosts}
          >
            Try Again
          </button>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && posts.length === 0 && (
        <div className="empty-message">
          <p>No posts to display. Click "Fetch Posts" to load blog posts.</p>
        </div>
      )}

      {/* Success State */}
      {!loading && !error && posts.length > 0 && (
        <div className="posts-list">
          {posts.map(post => (
            <div key={post.id} className="post-card">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PostList
