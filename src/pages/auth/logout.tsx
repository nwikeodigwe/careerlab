import { useDispatch } from "react-redux";
import { clear_auth } from "../../features/slices/auth";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  useEffect(() => {
    dispatch(clear_auth());
    removeCookie("token");
    navigate("/auth");
  }, [dispatch, navigate, removeCookie]);

  return (
    <div className="h-screen flex flex-col items-center justify-center text-white">
      Logging out...
    </div>
  );
};

export default Logout;
