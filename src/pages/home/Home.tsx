import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to my portfolio</p>
      <Link to="/contact">Contact page</Link>
    </div>
  );
};

export default Home;
