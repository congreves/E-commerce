import { MailOutlined } from "@mui/icons-material";
import React from "react";
import { Container, Title, Desc, InputContainer, Input, Button} from "./Newsletter.styles"



function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <MailOutlined />
        </Button>
      </InputContainer>
    </Container>
  );
}

export default Newsletter;
