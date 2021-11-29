import styled from "styled-components"

export const FooterStyled = styled.footer`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: ${({ theme }) => theme.colors.primaryBlue};
  background: rgb(0, 71, 151);
  background: radial-gradient(circle, ${({ theme }) => theme.colors.header});
  color: ${({ theme }) => theme.colors.white};
`
