import styled from "styled-components"
import { useForm } from "../../components/useForm"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


export default function SignUpPage() {

    const [form, handleForm] = useForm({
        name: "",
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    function registration(event) {
        event.preventDefault()

        const URL = "http://localhost:4000/sign-up"

        const promise = axios.post(URL, form)
        promise.then(() => navigate("/"))
        promise.catch((err) => {
            console.log(err.response)
        })
        console.log(form)
    }

    return (
        <Container>
            <ContainerLogin>
                <Text>
                    <h1>Agora falta pouco!</h1>
                    <h3>Bora finalizer o seu cadastro?</h3>
                </Text>
                <Form onSubmit={registration}>
                    <p>Nome</p>
                    <input
                        type="text" required
                        placeholder="Nome"
                        name="name"
                        value={form.name}
                        onChange={handleForm}
                    />
                    <p>E-mail</p>
                    <input
                        type="email" required
                        placeholder="E-mail"
                        name="email"
                        value={form.email}
                        onChange={handleForm}
                    />
                    <p>Senha</p>
                    <input
                        type="password" required
                        placeholder="Senha"
                        name="password"
                        value={form.password}
                        onChange={handleForm}
                    />
                    <Button type="submit">
                        Finalizar Cadastro
                    </Button>
                </Form>

                <Link to="/login">
                    <Text>
                        <h3>Já tem uma conta? Faça login!</h3>
                    </Text>
                </Link>

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
    font-size: 25px;
}
h3{
    font-size: 12px;
    margin-top: 10px;
    margin-bottom: 10px;
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
    font-size: 8px;
    height: 20px;
    width: 200px;
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
width: 150px;
height: 30px;
color: #fff;
font-size: 10px;
border: none;
cursor: pointer;
`