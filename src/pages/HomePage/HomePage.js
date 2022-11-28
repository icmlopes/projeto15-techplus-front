import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import AccountBar from "../../components/AccountBar"

export default function HomePage() {

    const [product, setProduct] = useState([])

    useEffect(
        () => {

            const URL = "http://localhost:5000/products"
            const promise = axios.get(URL)

            promise.then((res) => {
                setProduct(res.data)
                console.log('useEffect: homepage', res)
            })
            promise.catch((err) => {
                console.log(err.response.data)
            })
        }, []
    )
    
    const notebookTypes = product.filter(type => type.type === "notebook")
    const celularTypes = product.filter(type => type.type === "celular")
    const acessorioTypes = product.filter(type => type.type === "Acessório")

    return (
        <>
            <AccountBar />
            <Container>
                <Title>Computadores</Title>
                <ShowProducts>
                    <ContainerAllProducts>
                        {notebookTypes.map((prod) => (
                            <ContainerProdutc>
                            <img src={prod.image} alt="Imagem do produto"/>
                            <h3>{prod.name}</h3>
                            <h4>R$ {prod.price}</h4>
                            </ContainerProdutc>
                        ))}
                    </ContainerAllProducts>
                </ShowProducts>
                <Title>Celulares</Title>
                <ShowProducts>
                    <ContainerAllProducts>
                        {celularTypes.map((prod) => (
                            <ContainerProdutc>
                            <img src={prod.image} alt="Imagem do produto"/>
                            <h3>{prod.name}</h3>
                            <h4>R$ {prod.price}</h4>
                            </ContainerProdutc>
                        ))}
                    </ContainerAllProducts>
                </ShowProducts>
                <Title>Acessórios</Title>
                <ShowProducts>
                    <ContainerAllProducts>
                        {acessorioTypes.map((prod) => (
                            <ContainerProdutc>
                            <img src={prod.image} alt="Imagem do produto"/>
                            <h3>{prod.name}</h3>
                            <h4>R$ {prod.price}</h4>
                            </ContainerProdutc>
                        ))}
                    </ContainerAllProducts>
                </ShowProducts>

            </Container>
        </>
    )
}

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items:center;
padding-top:20px;
`
const ShowProducts = styled.div`
margin-bottom: 20px;
background-color: #8394AE;
width: 90%;
height: 150px;
display: flex;
align-items: center;
overflow-x: scroll;
border-radius: 10px;
box-shadow:  8px 8px 16px #adadad,
             -8px -8px 16px #ffffff;
::-webkit-scrollbar-track {
  background: #f1f1f1;}
`

const Title = styled.div` 
font-size: 20px;
width: 90%;
margin-bottom: 10px;
font-weight: 700;
color: #B4AEAE;
`

const ContainerAllProducts = styled.div`

 height: 100%;
 display: flex;
 align-items: center;
 margin-right: 10px;
 margin-left: 10px;
`

const ContainerProdutc = styled.div`
padding: 5px 10px 5px 10px;
background-color: #EFEFEF;
display: flex;
align-items: center;
justify-content:center;
flex-direction: column;
height: 80%;
width: 100px;
margin-left: 10px;
margin-right: 10px;
min-width: 100px;
border-radius: 10px;
border: none;

img{
    width: 80px;
    height: 70px;
    object-fit: conver;
    border-radius: 10px;
}
h3{
    font-size: 10px;
    color: #000000;
    text-align: center;
    margin-top: 5px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
}
h4{
    font-size: 10px;
    color: #000000;
    margin-top: 5px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}
`