import UserProfile from '../UserProfile';
import Counter from '../Counter';
import TodoList from '../TodoList';
import PostList from '../PostList';
import './Pages.css';

function Home() {
  return (
    <div className="page-container">
      <h1>Welcome to My React Application</h1>
      <div className="cards-container">
        <div className="cards-row">
          <section className="card-section">
            <UserProfile 
              name="Harry Joseph"
              profilePicture="/male-profile.svg"
              bio="Application Support Lead for 10 years, now learning ReactFrontend Developer. Passionate about creating user-friendly interfaces and solving complex problems."
            />
          </section>
          <section className="card-section state-management-section">
            <h2>STATE MANAGEMENT</h2>
            <Counter />
          </section>
          <section className="card-section event-handling-section">
            <h2>EVENT HANDLING AND CONDITIONAL RENDERING</h2>
            <TodoList />
          </section>
        </div>
        <div className="cards-row">
          <section className="card-section api-fetching-section">
            <h2>APIs AND DATA FETCHING</h2>
            <PostList />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
