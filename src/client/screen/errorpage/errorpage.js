import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="hero" >
      <div className="text-center hero-content" style={{marginTop: "200px"}}>
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8 text-white mt-80" style={{fontSize: "120px"}}>Oops!</h1>
          <p className="text-5xl mb-8 text-white" style={{fontSize: "100px"}}>404 - Page Not Found!</p>
          <Link className="btn btn-primary btn-lg" to="/">
            <FaHome className="mr-2" />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
