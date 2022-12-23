import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-dio.png";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { Button } from "../Button";

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";

const Header = () => {
  const { user, handleSignOut } = useAuth();
  
  const navigate = useNavigate();

  const handleClickRegister = () => {
    navigate('/cadastro')
  }
  const handleClickSignIn = () => {
    navigate('/login')
  }

  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to="/">
            <img src={logo} alt="Logo da dio" />
          </Link>
          {user.id ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {user.id ? (
            <>
              <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />{" "}
              <a href="#" onClick={handleSignOut}>
                Sair
              </a>
            </>
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar" onClick={handleClickSignIn}/>
              <Button title="Cadastrar" onClick={handleClickRegister} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
