import React, { useRef, useState } from "react"

import { Label, Input, Background, Container} from "./ForgotPasswrodStyles";
import { Button } from "../../styles/GlobalComponents/Button";

export default function Forgotpassword(){
    const emailRef = useRef();
    function handleSubmit(){
        return null;
    }
    return(
        <Background>
        <Container>
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
            <Label> Registred Email</Label>
            <Input type='email' ref={emailRef} required />
            

            {false? (
              <Button
                type='submit'
                // disabled={loading}
                bg={({ theme }) => theme.colors.primaryBlue}
                clr={({ theme }) => theme.colors.neutral}
                mt='30px'
                w='100%'
              >
                Sending mail...
              </Button>
            ) : (
              <Button
                type='submit'
                // disabled={loading}
                bg={({ theme }) => theme.colors.primaryBlue}
                clr={({ theme }) => theme.colors.neutral}
                mt='30px'
                w='100%'
              >
                Send mail
              </Button>
              )}
              </form>
              </Container>
              </Background>
        )
}