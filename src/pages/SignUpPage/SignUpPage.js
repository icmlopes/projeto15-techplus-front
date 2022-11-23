import styled from "styled-components"


export default function SignUpPage(){
    return(
        <Container>
        <ContainerLogin>
            <Text>
            <h1>Agora falta pouco!</h1>
            <h3>Bora finalizer o seu cadastro?</h3>
            </Text>
            <Form>
                <p>Nome Completo</p>
                <input
                type="text" required
                placeholder="ex: João da Silva"
                name="name"
                // value={{form.email}}
                // onChange={handleForm}
                />
                <p>E-mail</p>
                <input
                type="email" required
                placeholder="ex: joaodasilva@gmail.com"
                name="email"
                // value={{form.email}}
                // onChange={handleForm}
                />
                <p>Senha</p>
                <input
                type="password" required
                placeholder="Senha"
                name="password"
                // value={{form.password}}
                // onChange={handleForm}
                />
                <Button>
                    Finalizar Cadastro
                </Button>      
            </Form>

            <Text>
                <h3>Já tem uma conta? Faça login!</h3>
            </Text>
        </ContainerLogin>
    </Container>
    )
}

const Container = styled.div`
display: flex;
align-items:center;
justify-content: center;
`
const ContainerLogin = styled.div`
height: 100%;
width: 80%;
`
const Text = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
margin-bottom: 10px;
color: #5D6168;
h1{
    margin-top: 20px;
}
h3{
    font-size: 12px;
    margin-top: 10px;

}
`
const Form = styled.form`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
input{
    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    border: none;
    margin-bottom: 10px;
    padding-left: 10px;
}
p{
    font-size: 12px;
    color: #5D6168;
    margin-bottom: 5px;
}
`
const Button = styled.button`
border-radius: 30px;
background-color: #0B3E89;
width: 100px;
height: 30px;
color: #fff;
font-size: 10px;
border: none;
cursor: pointer;
`