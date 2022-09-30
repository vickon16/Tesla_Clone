/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import styled from "styled-components";
import { Flex } from "../variables";
import { AiOutlineClose } from "react-icons/ai";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
import Messages from "./Messages";

function Header() {
  const [openNav, setOpenNav] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <Messages />
      <Content>
        <a href="#">
          <img src="/images/logo.svg" alt="logo" />
        </a>

        <Menu>
          {cars?.map((car, index) => (
            <a href="#" key={index + car}>
              {car}
            </a>
          ))}
        </Menu>
        <RightMenu>
          <a href="#" className="other">Shop</a>
          <a href="#" className="other">Account</a>
          <a href="#" onClick={() => setOpenNav(true)}>
            Menu
          </a>
        </RightMenu>
        <BurgerNav openNav={openNav}>
          <CloseWrapper>
            <AiOutlineClose onClick={() => setOpenNav(false)} />
          </CloseWrapper>

          {cars?.map((car, index) => (
            <li key={index + car}>
              <a href="#">{car}</a>
            </li>
          ))}
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Use Inventory</a>
          </li>
          <li>
            <a href="#">Trade-in</a>
          </li>
          <li>
            <a href="#">Cybertruck</a>
          </li>
          <li>
            <a href="#">Roadaster</a>
          </li>
          <li>
            <a href="#">Semi</a>
          </li>
          <li>
            <a href="#">Utilities</a>
          </li>
          <li>
            <a href="#">Text Drive</a>
          </li>
        </BurgerNav>
      </Content>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
  position: fixed;
  z-index: 3;
`;

const Content = styled.div`
  ${Flex("space-between")};
  padding: 20px;

  svg {
    cursor: pointer;
    font-size: 1.5rem;
  }

  a {
    padding: 8px 10px;
    border-radius: 0.7rem;
    text-transform: capitalize;
    font-weight: 500;

    &:hover {
      background-color: hsl(210, 32%, 70%);
    }
  }

  @media screen and (max-width: 425px) {
    a img {
      width: 80px;
      margin-right: 1rem;
    }
  }
`;

const Menu = styled.div`
  ${Flex()};
  flex-wrap: nowrap;
  flex: 1;
  gap: 0.8rem;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  ${Flex()};
  gap: 0.8rem;

  @media screen and (max-width: 1200px) {
    .other {
      display: none;
    }
  }
`;

const BurgerNav = styled.ul`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 300px;
  transition: transform 0.25s ease-in;
  transform: translateX(${({ openNav }) => (openNav ? "0" : "100%")});
  z-index: 4;
  padding: 20px 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  li {
    padding: 20px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 500;
    }
  }

  @media screen and (min-width: 760px) {
    width: 400px;
  }
`;

const CloseWrapper = styled.div`
  ${Flex("flex-end")};

  svg {
    margin: 1rem 0;
  }
`;
