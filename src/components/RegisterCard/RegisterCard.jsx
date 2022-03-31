import React from "react";
import { Wrapper, RegistrationBox, Title, Form, Input, Agreement, Button} from "./RegisterCard.styles";

function RegisterCard() {
  return (
    <Wrapper>
        <RegistrationBox>
          <Title>Create an account</Title>
          <Form>
            <Input placeholder="Name" />
            <Input placeholder="Lastname" />
            <Input placeholder="Email" />
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <Input placeholder="Confirm Password" />
            <Agreement>
              {" "}
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>Create</Button>
          </Form>
        </RegistrationBox>
        </Wrapper>
  );
}

export default RegisterCard;
