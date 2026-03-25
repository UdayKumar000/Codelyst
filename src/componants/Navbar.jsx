import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6" style={{ backgroundColor: "#022b3aff" }}>
      {/* Logo */}
      <h1 className="text-white font-bold text-2xl">Codelyst</h1>

      {/* Centered Links */}
      <ul className="flex gap-6 mx-auto justify-center">
        <li>
          <Link
            to="/"
            className="text-white hover:text-[#1f7a8cff] font-medium transition"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-white hover:text-[#1f7a8cff] font-medium transition"
          >
            About Us
          </Link>
        </li>
      </ul>

      {/* Placeholder for right side if needed */}
      <div className="w-24"></div>
    </nav>
  );
};

export default Navbar;