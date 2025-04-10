import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  margin-top: 40px;
  padding: 20px 0;
  text-align: center;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.7;

  span {
    color: #e25555;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => (
  <FooterContainer>
    Made with <span>❤️</span> by <a href="https://www.linkedin.com/in/harshit-agarwal" target="_blank" rel="noopener noreferrer">Harshit Agarwal</a>
  </FooterContainer>
);

export default Footer;
