import { Link } from "react-router-dom";
import { Logo } from "../../assets/icon/logo";
import Typography from "@mui/material/Typography";
import { loadState } from "../../config/storege";
import { Container } from "@mui/material";
import { Profile } from "../../assets/icon/profile";
export const Home = () => {
  const user = loadState("user");
  
  return (
    <Container
      maxWidth={"lg"}
      style={{
        padding: "20px",
        paddingBottom: "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ width: "45px", height: "45px" }}>
          <Logo />
        </div>
        <Typography variant="body2">Book</Typography>
      </div>
      {user ? (
        <Link to={"/user"}>
          <Profile /> User
        </Link>
      ) : (
        <Link
          to={"/login"}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "primary",
          }}
        >
          <Profile /> Login
        </Link>
      )}
    </Container>
  );
};
