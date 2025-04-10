import React from "react";
import styled from "styled-components";

const Toggle = styled.button`
  padding: 8px 14px;
  border-radius: 30px;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.border};
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: ${({ theme }) => theme.border};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const DarkModeToggle = ({ isDark, toggle }) => (
  <Toggle onClick={toggle}>
    {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
  </Toggle>
);

export default DarkModeToggle;

