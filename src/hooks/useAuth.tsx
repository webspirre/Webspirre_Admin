import { useContext, useDebugValue } from "react";
import AuthContext, { AuthContextType } from "@/context/AuthProvider";
import { User } from "@/types/types";
export type AuthState = React.Dispatch<React.SetStateAction<User | null>>;
const useAuth = (): AuthContextType => {
  const { auth } = useContext(AuthContext);
  useDebugValue(auth, (auth) => (auth ? "Logged In" : "Logged Out"));
  return useContext(AuthContext);
};

export default useAuth;
