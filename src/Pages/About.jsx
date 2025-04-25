import './Pages.css';

function About() {
  return (
    <div className="page-container">
      <div className="about-content">
        <h1>About This Application</h1>
        <div className="about-card">
          <h2>React Features Demonstration</h2>
          <p>This application demonstrates several important React concepts:</p>
          <ul>
            <li><strong>Components & Props:</strong> Using functional components that accept and utilize props</li>
            <li><strong>State Management:</strong> Using React's useState hook to manage state</li>
            <li><strong>Event Handling:</strong> Implementing event handlers for user interactions</li>
            <li><strong>Conditional Rendering:</strong> Showing different UI based on conditions</li>
            <li><strong>Routing:</strong> Navigating between pages with React Router</li>
          </ul>
        </div>
        <div className="about-card">
          <h2>Developer Information</h2>
          <p>Created by Harry Joseph as part of learning React fundamentals.</p>
          <p>Features implemented:</p>
          <ul>
            <li>User Profile display</li>
            <li>Counter with state management</li>
            <li>Todo List with add/remove functionality</li>
            <li>Navigation between pages</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
