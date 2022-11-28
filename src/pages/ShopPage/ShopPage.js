import styled from "styled-components";
import { useState } from "react";
import { Input } from "../../components/Input";
import {StyledButton} from '../../components/StyledButton'
import { useForm } from "../../components/useForm";

export default function ShopPage() {
    const [buyerform, handleForm] = useForm({
        cardName: "",
        cardNumber: "",
        securityNumber: '' ,
        expirationDate: "",
      });
  function purchase() {

  }

  return (
    <>
      <Container>
        <ShowProducts></ShowProducts>
        <MemberForm onSubmit={purchase}>
          <Input
            name="cardName"
            value={buyerform.cardName}
            onChange={handleForm
            }
            type="text"
            placeholder="Nome impresso no cartão"
          />
          <Input
            name="cardNumber"
            value={buyerform.cardNumber}
            onChange={handleForm
            }
            type="text"
            placeholder="Digitos do cartão"
          />
          <ShortInput
            name="securityNumber"
            value={buyerform.securityNumber}
            onChange={handleForm
            }
            type="number"
            placeholder="Codigo de segurança"
          />
          <ShortInput
            name="expirationDate"
            value={buyerform.expirationDate}
            onChange={(handleForm)}
            type="text"
            placeholder="Validade"
          />
          <StyledButton>ASSINAR</StyledButton>
        </MemberForm>
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;
const ShowProducts = styled.div`
  margin-bottom: 20px;
  background-color: #8394ae;
  width: 90%;
  height: 250px;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  border-radius: 10px;
  box-shadow: 8px 8px 16px #adadad, -8px -8px 16px #ffffff;
`;
const MemberForm = styled.form`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
`;

const ShortInput = styled.input`
  width: 149px;
  height: 60px;
  border-radius: 8px;
  background-color: white;
  padding-left: 6px;
  margin: 10px 0;
  &::placeholder {
    font-size: 14px;
    color: #7e7e7e;
    
  }
`;
