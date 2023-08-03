import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../context";
import { logoutAPI } from "../../api";

const Navbar = () => {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser({
      userId: "",
      username: "",
      token: "",
    });
    await logoutAPI();
    navigate("/");
  };

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a
            href="#"
            className="-m-1.5 p-1.5"
          >
            <img className="h-8 w-auto" src="./vite.svg" alt="" />
          </a>
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end">
          {user.token ? (
            <p
              className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </p>
          ) : (
            <NavLink
              to="/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Login <span aria-hidden="true">&rarr;</span>
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
