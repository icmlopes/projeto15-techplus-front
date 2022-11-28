import styled from "styled-components";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./components/NavBar";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import ShopPage from "./pages/ShopPage/ShopPage"
import { UserContextProvider } from "./context/UserContext";
import { PurchaseContextProvider } from "./context/PurchaseContext";


export default function App() {
  return (
    <BrowserRouter>
      <ContainerScreen>
        <GlobalStyle />
        <UserContextProvider>
        <NavBar />
        <PurchaseContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/Cart" element={< ShopPage />} />
        </Routes>
        </PurchaseContextProvider>
        </UserContextProvider>
      </ContainerScreen>
    </BrowserRouter>
  );
}

const ContainerScreen = styled.div`
  background-color: #EFEFEF;  
  min-height: 100vh;
  width: 100vw;
`;
