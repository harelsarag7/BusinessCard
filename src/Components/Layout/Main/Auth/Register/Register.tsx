import "./Register.css";


import * as React from 'react';
import { TextField, Button } from "@mui/material";
import {Modal, ModalDialog, Stack, Typography} from "@mui/joy"
import { useForm } from "react-hook-form";
import { userModel } from "../../../../../Models/userModel";
import { authFunctions } from "../../../../../Services/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function BasicModalDialog() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const { register,reset, handleSubmit } = useForm< userModel | any >();
  const [wrong, setWrong] = useState<string>("") 

  async function RegisterFunction( { firstName, lastName, email, phone, username, password} : userModel){

      await authFunctions.register({firstName, lastName, email, phone, username, password}).then( async (res: any) => {

        if(res === "") {
          setWrong("Wrong Username or Password")
          return 
        }

        window.localStorage.setItem('userToken', JSON.stringify(res));
          navigate(`/user/`+ username);
          setOpen(false);
          window.location.reload();
      })
  }

  return (
    <React.Fragment>
      <button className="register-btn-header" onClick={() => {
        setOpen(true)
        setWrong("")
        }} >Sign-Up</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          id="Register-modal"
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <Typography
            id="basic-modal-dialog-title"
            component="h2"
            level="inherit"
            fontSize="1.25em"
            mb="0.25em"
          >
            Register Box
          </Typography>
          <Typography
            id="basic-modal-dialog-description"
            mt={0.5}
            mb={2}
            textColor="text.tertiary"
          >
            Fill your details to connect.
          </Typography>

          <form 
            // onSubmit={(event) => {
              onSubmit={ handleSubmit(RegisterFunction)}
             
              // event.preventDefault();
              // setOpen(false);
            // }}
          >
            <Stack spacing={2}>
              <TextField label="Username" autoFocus required {...register("username")}/>
              <TextField label="Password" required {...register("password")} />
              <TextField label="firstName" required {...register("firstName")} />
              <TextField label="lastName" required {...register("lastName")} />
              <TextField label="email" required {...register("email")} />
              <TextField label="phone" required {...register("phone")} />
              <Button type="submit" variant="contained">Submit</Button>
            </Stack>
            <Typography
            id="wrong-password-username"
            mt={0.5}
            mb={2}
          >
            {wrong}
          </Typography>


          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}