import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  gap: 16px;
  margin: 30px 0 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Tab = styled.button`
  padding: 10px 20px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: ${({ active }) =>
    active ? "linear-gradient(135deg, #007bff, #00c6ff)" : "transparent"};
  color: ${({ active, theme }) => (active ? "#fff" : theme.text)};
  border: 2px solid ${({ theme }) => theme.border};
  box-shadow: ${({ active }) =>
    active ? "0 4px 12px rgba(0, 123, 255, 0.3)" : "none"};

  &:hover {
    background: ${({ active }) =>
      active
        ? "linear-gradient(135deg, #007bff, #00c6ff)"
        : "rgba(0,123,255,0.1)"};
    color: ${({ active }) => (active ? "#fff" : "#007bff")};
    transform: scale(1.05);
  }
`;

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <Nav>
      {["All", "Today", "Upcoming"].map((tab) => (
        <Tab key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>
          {tab}
        </Tab>
      ))}
    </Nav>
  );
};

export default Navbar;

