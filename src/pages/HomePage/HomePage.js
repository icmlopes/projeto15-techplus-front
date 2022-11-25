import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import AccountBar from "../../components/AccountBar"

export default function HomePage(){

    const [product, setProduct] = useState([])

    useEffect(
        () => {

            const URL = "http://localhost:5000/products"
            const promise = axios.get(URL)

            promise.then((res) => {
                setProduct(res.data)
                console.log(res)
            })
            promise.catch((err) => {
                console.log(err.response.data)
            })
        }, []
    )

    return(
        <>
        <AccountBar />
        </>
    )
}