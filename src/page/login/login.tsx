import { Container, Button, Snackbar } from "@mui/material";
import { useForm } from "react-hook-form";
import { validationLogin } from "../../lib/login-validotion";
import { TextField } from "@mui/material";
import { Scheme } from "../../lib/login-validotion";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { usePostUserMutation } from "../../redux/service/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Scheme>({ resolver: zodResolver(validationLogin) });
  const [createUser] = usePostUserMutation();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setOpen(true);
  };
  const submit = async (value: any) => {
    createUser(value)
      .unwrap()
      .then(() => navigate("/"))
      .catch((error: any) => {
        console.log(error);
        handleClick();
      });
    reset();
  };

  return (
    <div style={{ background: "#E8E1EF", height: "100vh" }}>
      <Container maxWidth={"lg"} style={{ padding: "20px 20px 0px 20px" }}>
        <div style={{ paddingTop: "25px" }}>
          <Link
            to={"/"}
            style={{
              color: "#E18255",
              cursor: "pointer",
              fontSize: "20px",
              border: "1px solid #E18255 ",
              padding: "15px 10px",
              borderRadius: "10px",
            }}
          >
            Back
          </Link>
        </div>
        <form
          onSubmit={handleSubmit(submit)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            maxWidth: "450px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "10%",
            background: "#fff",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <TextField
            className="input"
            placeholder="Jon"
            label="name"
            {...register("name", { required: true })}
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
          />
          <TextField
            className="input"
            placeholder="example@mail.com"
            label="email"
            {...register("email", { required: true })}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
          <TextField
            className="input"
            label="key"
            {...register("key", { required: true })}
            error={Boolean(errors.key)}
            helperText={errors.key?.message}
          />
          <TextField
            className="input"
            label="secret"
            {...register("secret", { required: true })}
            error={Boolean(errors.secret)}
            helperText={errors.secret?.message}
          />
          <Button
            style={{ background: "#FFC107" }}
            type="submit"
            variant="contained"
          >
            Send
          </Button>
        </form>
        <Snackbar open={open} autoHideDuration={6000} message="Close" />
      </Container>
    </div>
  );
};
