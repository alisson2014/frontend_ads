import { useSession } from "components/Organism/AppContext";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { isLoggedIn } = useSession();

  return isLoggedIn ? children : <Navigate to="/login" />;
};