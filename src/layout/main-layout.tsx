import { Outlet } from "react-router-dom";

export const MainLayout: React.FC = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
