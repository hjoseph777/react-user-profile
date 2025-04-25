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
