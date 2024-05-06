import { Home } from "./page/home/home";
import { MainLayout } from "./layout/main-layout";
import { Route, Routes } from "react-router-dom";
import { useScrollToTop } from "./hook/useScrollToTop";
import { Login } from "./page/login/login";
import { User } from "./page/user/user";
function App() {
  useScrollToTop();
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
