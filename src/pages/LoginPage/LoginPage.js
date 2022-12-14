import axios from "axios";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "../../components/useForm";
import { BASE_URL } from "../../constants/urls";
import { UserContext } from "../../context/UserContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, handleForm] = useForm({
    email: "",
    password: "",
  });
  const { userdata, setUserdata } = useContext(UserContext);

  function login(event) {
    event.preventDefault()
    
    axios.post(`${BASE_URL}/sign-in`, form)
        .then((res) => {
          setUserdata(res)
            console.log("userContext: ", res);
          navigate('/')
        })
        .catch((err) => {
            console.log(err.response.data);
        })
  }


  return (
    <Container>
      <ContainerLogin>
        <Text>
          <h1>Que bom ter você aqui!</h1>
          <h3>Entre usando seu e-mail e senha cadastrados</h3>
        </Text>
        <Form>
          <p>E-mail</p>
          <input
            type="email"
            required
            placeholder="E-mail"
            name="email"
            value={form.email}
            onChange={handleForm}
          />
          <p>Senha</p>
          <input
            type="password"
            required
            placeholder="Senha"
            name="password"
            value={form.password}
            onChange={handleForm}
          />
          <Button>Continuar</Button>
        </Form>
        <Text>
            <Link to='/sign-up'>
          <h3>Não tem uma conta ainda? Cadastre-se</h3>
          </Link>
        </Text>
      </ContainerLogin>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContainerLogin = styled.div`
  height: 100%;
  width: 80%;
`;
const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 10px;
  color: #5d6168;
  h1 {
    margin-top: 20px;
    font-size: 25px;
  }
  h3 {
    font-size: 15px;
    margin-top: 10px;
  }
  a {
    color: #5d6168;
  }
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  input {
    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    border: none;
    margin-bottom: 10px;
    padding-left: 10px;
  }
  p {
    font-size: 15px;
    color: #5d6168;
    margin-bottom: 5px;
  }
`;
const Button = styled.button`
  border-radius: 30px;
  background-color: #0b3e89;
  width: 100px;
  height: 30px;
  color: #fff;
  font-size: 10px;
  border: none;
  cursor: pointer;
`;
