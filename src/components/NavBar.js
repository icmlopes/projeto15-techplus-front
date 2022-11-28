import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Container>
      <Link to="/">
        <Title>
          <h1>TechPlus</h1>
        </Title>
      </Link>
      <Icon>
        <Link to='/cart'>
          <ion-icon name="cart-outline"></ion-icon>
        </Link>
      </Icon>
    </Container>
  );
}

const Container = styled.div`
  height: 10vh;
  width: 100%;
  background-color: #0b3e89;
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
`;

const Title = styled.div`
  color: white;
  padding-left: 20px;
  font-family: "Electrolize", sans-serif;
  font-size: 30px;
`;

const Icon = styled.div`
  display: flex;
  margin-right: 20px;
  ion-icon {
    height: 25px;
    width: 25px;
    color: white;
  }
`;
