import { createContext } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import NavBar from "../component/shared/navBar/NavBar";
import Footer from "../component/shared/footer/Footer";
import Loading from "../component/shared/loading/Loading";
import useFetch from "../hooks/useFetch";

export const GLOBAL_CONTEXT = createContext();

const AppLayout = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [userDatabase, userDataBaseLoading, userRefetch] = useFetch({
    api: "user",
    parameter: user?.email ? user.email : "none",
  });

  if (loading || userDataBaseLoading) {
    return <Loading />;
  }

  const value = {
    user,
    userDatabase,
    userRefetch,
  };

  return (
    <GLOBAL_CONTEXT.Provider value={value}>
      <NavBar />
      <main className="min-h-[80vh]">{children}</main>
      {/* <Footer /> */}
    </GLOBAL_CONTEXT.Provider>
  );
};

export default AppLayout;
