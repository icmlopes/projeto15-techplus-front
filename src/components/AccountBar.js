import { Link } from "react-router-dom";
import styled from "styled-components";


export default function AccountBar() {
    return (
        <Container>
            <Link to="/login">
                <Icon>
                    <ion-icon name="person-circle-outline"></ion-icon>
                    <p>Login</p>
                </Icon>
            </Link>
            
            <Link to="sign-up">
            <Text>
                <h5>Não tem uma conta ainda? Cadastre-se</h5>
            </Text>
            </Link>
            {/* <Text>
                <h5>Olá, Fulano</h5>
            </Text>
            <Text>
                <h5>Sair</h5>
            </Text> */}


        </Container>
    )
}

const Container = styled.div`
background-color: #8394AE;
height: 25px;
width: 100%;
display: flex;
align-items: center;
justify-content:space-between;
`

const Text = styled.div`
    display: flex;
    font-size: 10px;
    color: #fff;
    margin-right: 20px;
    margin-left: 20px;
`
const Icon = styled.div`
display: flex;
align-items: center;
justify-content: center;
p{
    color: #fff;
    font-size: 12px;
    margin-left: 5px;
}
ion-icon{
    font-size: 20px;
    color: #fff;
    margin-left: 20px;
    height: 15px;
    width: 15px;
}
`

