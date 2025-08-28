import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { setToggle } from "../redux/moviesSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { authAPI } from "../services/api";

const Header = () => {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.toggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await authAPI.logout();
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.error("Logout Error: ", error);
    }
  };

  const toggleHandler = () => {
    dispatch(setToggle());
  };

  return (
    <nav className="bg-black fixed top-0 w-full flex items-center justify-between px-4 py-3 z-50 shadow-md">
      <div
        onClick={() => navigate("/")}
        className="text-red-600 ml-2 text-2xl sm:text-3xl font-bold cursor-pointer sm:ml-8"
      >
        Nextflix
      </div>

      {user && (
        <div className="flex space-x-2">
          <h1 className="bg-black text-white py-1 px-2 sm:py-2 sm:px-4 rounded text-xs sm:text-sm md:text-base">
            {user.name}
          </h1>
          <button
            onClick={logoutHandler}
            className="bg-red-600 text-white py-1 px-2 sm:py-2 sm:px-4 rounded hover:bg-red-700 transition-colors text-xs sm:text-sm md:text-base"
          >
            Logout
          </button>
          <button
            onClick={toggleHandler}
            className="bg-red-600 text-white py-1 px-2 sm:py-2 sm:px-4 rounded hover:bg-red-700 transition-colors text-xs sm:text-sm md:text-base"
          >
            {toggle ? "Home" : "Search Movie"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;